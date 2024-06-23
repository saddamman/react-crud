import { twMerge } from 'tailwind-merge';

export default function GrayBG({ className, onClick, children }) {
  const GrayBGClasses = twMerge(
    `absolute w-full top-0 left-0 h-full z-0 bg-black/35 ${className ?? ''}`
  );
  return (
    <div className={GrayBGClasses} onClick={onClick}>
      {children}
    </div>
  );
}
