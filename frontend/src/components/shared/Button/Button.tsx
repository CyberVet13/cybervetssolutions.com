/**
 * Button Component - Following Kldy Style Guide
 * 
 * This is a button that demonstrates:
 * 1. TypeScript types (what props it accepts)
 * 2. React component structure
 * 3. Kldy design system: blue #0047a1, cyan #21d4f3, green #2aca40
 * 4. Filled and outlined variants
 * 5. Accessibility features
 * 
 * Usage:
 * <Button>Filled Button</Button>                    // Kldy blue
 * <Button variant="outline">Sign In</Button>       // Outlined style
 * <Button variant="success">Add to Cart</Button>   // Kldy green
 * <Button disabled>Disabled</Button>
 */

import React from 'react';

// Define the "shape" of props (what data this component receives)
export interface ButtonProps {
  // What appears inside the button
  children: React.ReactNode;
  
  // What happens when clicked (optional)
  onClick?: () => void;
  
  // Button style variant (Kldy style guide):
  // - 'filled': Solid background (default) - Kldy primary blue
  // - 'outline': Border only, transparent background
  // - 'success': Kldy lime green #2aca40
  variant?: 'filled' | 'outline' | 'success';
  
  // Can the button be clicked?
  disabled?: boolean;
  
  // Button size (small, medium, large)
  size?: 'sm' | 'md' | 'lg';
  
  // HTML button type
  type?: 'button' | 'submit' | 'reset';
  
  // Additional CSS classes
  className?: string;
}

/**
 * The Button Component - Kldy Style
 * 
 * Props:
 * - children: text/content inside the button
 * - onClick: function to call when user clicks
 * - variant: 'filled' (blue), 'outline' (border), 'success' (green)
 * - disabled: if true, button can't be clicked
 * - size: 'sm', 'md', 'lg'
 * - type: 'button', 'submit', 'reset'
 * - className: additional Tailwind classes
 */
export function Button({
  children,
  onClick,
  variant = 'filled',
  disabled = false,
  size = 'md',
  type = 'button',
  className = '',
}: ButtonProps): React.ReactElement {
  // Base styles: Roboto font, rounded corners, smooth transitions (Kldy style)
  const baseStyles = 'font-medium transition-all duration-200 rounded-md font-roboto';
  
  // Size variations (matching Kldy guide)
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',     // 12px (Kldy caption size)
    md: 'px-4 py-2 text-base',     // 15px (normal)
    lg: 'px-6 py-3 text-lg',       // 18px (large)
  };
  
  // Kldy color variants
  const variantStyles = {
    // Filled: Kldy primary blue #0047a1
    filled: disabled
      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
      : 'bg-primary-800 text-white hover:bg-primary-700 active:bg-primary-900 shadow-md hover:shadow-lg',
    
    // Outline: Border with transparent background (Kldy style)
    outline: disabled
      ? 'border-2 border-gray-300 text-gray-400 cursor-not-allowed'
      : 'border-2 border-primary-800 text-primary-800 hover:bg-primary-50 active:bg-primary-100',
    
    // Success: Kldy lime green #2aca40
    success: disabled
      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
      : 'bg-success-600 text-white hover:bg-success-700 active:bg-success-800 shadow-md hover:shadow-lg',
  };

  // Combine all styles
  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      aria-label={typeof children === 'string' ? children : 'Button'}
    >
      {children}
    </button>
  );
}
