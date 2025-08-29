import type { ReactNode, ButtonHTMLAttributes } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

const GradientButton = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: GradientButtonProps) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-slate-700 border-2 border-slate-200 hover:border-indigo-400 hover:text-indigo-600 hover:shadow-lg",
    tertiary:
      "bg-white text-indigo-600 hover:bg-indigo-50 shadow-md hover:shadow-lg",
  };

  return (
    <button
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
