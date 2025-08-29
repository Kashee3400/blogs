import type { ReactNode, HTMLAttributes } from "react";

interface AnimatedCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard = ({ children, className = "", delay = 0, ...props }: AnimatedCardProps) => (
  <div
    className={`transform transition-all duration-700 ease-out opacity-0 translate-y-8 animate-slide-up ${className}`}
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    {...props}
  >
    {children}
  </div>
);

export default AnimatedCard;
