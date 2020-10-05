import React from 'react';

type Props = {
  value: number;
  text?: string;
  color?: string;
};

export const Rating = ({ value, text, color = '#f8e825' }: Props) => {
  const intValue = Math.floor(value);
  const fullStars = new Array(intValue).fill(0);
  const isFloating = intValue !== value;
  const emptyStars = isFloating
    ? new Array(5 - (intValue + 1)).fill(0)
    : new Array(5 - intValue).fill(0);

  return (
    <div className="rating">
      {fullStars.map((_, idx) => (
        <span key={idx}>
          <i style={{ color }} className="fas fa-star" />
        </span>
      ))}
      {isFloating && (
        <span>
          <i style={{ color }} className="fas fa-star-half-alt" />
        </span>
      )}
      {emptyStars.map((_, idx) => (
        <span key={idx}>
          <i style={{ color }} className="far fa-star" />
        </span>
      ))}
      {text && <span>{text}</span>}
    </div>
  );
};
