"use client"; // Required for Next.js App Router Client Components

import React, { useState, useMemo, useId, useCallback } from 'react'; // Import useCallback

// --- Updated Star Icon with Half-Star Support & Hydration Fix ---
// (StarIcon component remains the same as the previous version)
const StarIcon = ({
  fillPercentage = 0, // 0 for empty, 50 for half, 100 for full
  size = 24,
  activeColor = '#ffc107',
  inactiveColor = '#e4e5e9',
  className = '',
}: {
  fillPercentage?: number;
  size?: number;
  activeColor?: string;
  inactiveColor?: string;
  className?: string;
}) => {
  const baseId = useId();
  const uniqueGradientId = `grad-${baseId}`;

  let fillValue: string;
  if (fillPercentage === 100) {
    fillValue = activeColor;
  } else if (fillPercentage === 50) {
    fillValue = `url(#${uniqueGradientId})`;
  } else {
    fillValue = inactiveColor;
  }

  const strokeColor = fillPercentage > 0 ? activeColor : inactiveColor;
  const strokeWidth = 0.5;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fillValue}
      xmlns="http://www.w3.org/2000/svg"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
      aria-hidden="true"
    >
      {fillPercentage === 50 && (
        <defs>
          <linearGradient id={uniqueGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" style={{ stopColor: activeColor, stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: inactiveColor, stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      )}
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};


// --- Component Props Interface ---
interface RatingProps {
  count?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
  size?: number;
  activeColor?: string;
  inactiveColor?: string;
  readonly?: boolean;
  className?: string;
  customIcon?: React.ComponentType<{
      fillPercentage?: number;
      size?: number;
      activeColor?: string;
      inactiveColor?: string;
      className?: string;
  }>;
}

// --- Rating Component ---
const Rating: React.FC<RatingProps> = ({
  count = 5,
  initialValue = 0,
  onChange,
  size = 24,
  activeColor = '#ffc107',
  inactiveColor = '#e4e5e9',
  readonly = false,
  className = '',
  customIcon: CustomIcon = StarIcon,
}) => {
  const [rating, setRating] = useState<number>(initialValue);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // --- Memoized Event Handlers ---
  const handleMouseEnter = useCallback((index: number) => {
    if (readonly) return;
    setHoverRating(index + 1);
  }, [readonly]); // Dependency: readonly (setHoverRating is stable)

  const handleMouseLeave = useCallback(() => {
    if (readonly) return;
    setHoverRating(null);
  }, [readonly]); // Dependency: readonly (setHoverRating is stable)

  const handleClick = useCallback((index: number) => {
    if (readonly) return;
    const newRating = index + 1;
    setRating(newRating);
    // Call onChange prop if it exists
    if (onChange) {
      onChange(newRating);
    }
  }, [readonly, onChange]); // Dependencies: readonly, onChange (setRating is stable)


  const displayRating = hoverRating !== null ? hoverRating : rating;

  // --- Memoized Icons Calculation ---
  const icons = useMemo(() => {
    return Array.from({ length: count }, (_, index) => {
      const starValue = index + 1;
      let fillPercentage = 0;

      if (displayRating >= starValue) {
        fillPercentage = 100;
      } else if (displayRating > index && displayRating < starValue) {
        fillPercentage = 50;
      } else {
        fillPercentage = 0;
      }

      return (
        <span
          key={index}
          style={{
            cursor: readonly ? 'default' : 'pointer',
            display: 'inline-block',
            lineHeight: '0',
          }}
          // Use the memoized handlers
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          role="radio"
          aria-checked={Math.ceil(rating) === index + 1}
          tabIndex={readonly ? -1 : 0}
        >
          <CustomIcon
             fillPercentage={fillPercentage}
             size={size}
             activeColor={activeColor}
             inactiveColor={inactiveColor}
             className="rating-icon"
          />
        </span>
      );
    });
    // Now include the memoized handlers in the dependency array
  }, [count, displayRating, size, readonly, CustomIcon, rating, activeColor, inactiveColor, handleMouseEnter, handleMouseLeave, handleClick]);

  const accessibilityLabel = `Rating: ${Math.round(displayRating * 10) / 10} out of ${count} stars.`;

  return (
    <div
        className={`rating-container ${className}`}
        style={{ display: 'flex', alignItems: 'center', gap: '2px' }}
        role="radiogroup"
        aria-label={accessibilityLabel}
        aria-readonly={readonly}
    >
      {icons}
    </div>
  );
};

export default Rating;