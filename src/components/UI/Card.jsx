import { twMerge } from 'tailwind-merge';

export const Card = ({ className, children }) => {
  const cardCalsses = twMerge(
    `px-5 bg-white shadow-lg rounded-md ${className ?? ''}`
  );

  return <div className={cardCalsses}>{children}</div>;
};
