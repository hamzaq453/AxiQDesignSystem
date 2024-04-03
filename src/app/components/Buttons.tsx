// Button.tsx
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  iconName?: string;
  iconPosition?: 'left' | 'right';
  variant?: 'base' | 'neutral' | 'brand' | 'outline-brand' | 'destructive' | 'success' | 'text-destructive' | 'icon';
  iconSize?: 'x-small' | 'small' | 'medium' | 'large';
  responsive?: boolean;
  assistiveText?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  label,
  iconName,
  iconPosition = 'left',
  variant = 'neutral',
  iconSize = 'medium',
  responsive = false,
  assistiveText,
  className,
  ...props
}, ref) => {
  const baseStyles = 'focus:outline-none transition ease-in-out duration-150';
  const variantStyles = {
    base: 'text-white bg-blue-500 hover:bg-blue-600',
    neutral: 'text-black bg-gray-200 hover:bg-gray-300',
    // Add other variants here...
  };

  const iconSizeStyles = {
    'x-small': 'w-4 h-4',
    small: 'w-5 h-5',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
  };

  const computeStyles = () => {
    const appliedVariantStyles = variantStyles[variant] ?? variantStyles.neutral;
    const appliedIconSizeStyles = iconName ? iconSizeStyles[iconSize] : '';
    const responsiveStyles = responsive ? 'w-full' : '';
    return `${baseStyles} ${appliedVariantStyles} ${appliedIconSizeStyles} ${responsiveStyles} ${className ?? ''}`;
  };

  return (
    <button
      ref={ref}
      className={computeStyles()}
      {...props}
    >
      {iconPosition === 'left' && iconName && (
        // Placeholder for the icon. You should replace this with your actual icon component.
        <span className={`inline-block ${iconSizeStyles[iconSize]} mr-2`}>Icon</span>
      )}
      {label && <span>{label}</span>}
      {iconPosition === 'right' && iconName && (
        // Placeholder for the icon. You should replace this with your actual icon component.
        <span className={`inline-block ${iconSizeStyles[iconSize]} ml-2`}>Icon</span>
      )}
      {assistiveText && <span className="sr-only">{assistiveText}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
