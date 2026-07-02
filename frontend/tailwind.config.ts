// Tailwind CSS Configuration
//
// What is Tailwind CSS?
// Tailwind is a CSS framework with pre-made utility classes.
// Instead of writing CSS files, you compose classes in HTML.
//
// Example:
// <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
//   Click me
// </button>
//
// This creates a styled button without writing any CSS!

import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    extend: {
      // Kldy Style Guide Fonts
      // Typography: Roboto with clean hierarchy
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      
      // Font sizes matching Kldy style guide
      fontSize: {
        'xs': '10px',      // Caption
        'sm': '12px',      // Button
        'base': '15px',    // Body 1
        'lg': '18px',      // Body 2 / Menu
        'xl': '36px',      // Subtitle
        '2xl': '72px',     // Title
      },
      
      // Kldy Style Guide Color Palette
      colors: {
        // Primary colors
        'primary': {
          '50': '#f0f7ff',
          '100': '#e0efff',
          '200': '#b8deff',
          '300': '#90ceff',
          '400': '#68beff',
          '500': '#40aeff',  // Cyan/Sky Blue
          '600': '#21d4f3',  // Kldy Cyan (bright)
          '700': '#0080c0',
          '800': '#0047a1',  // Kldy Primary Blue
          '900': '#003680',
        },
        
        // Success/Action colors
        'success': {
          '50': '#f0fdf4',
          '100': '#dcfce7',
          '200': '#bbf7d0',
          '300': '#86efac',
          '400': '#4ade80',
          '500': '#22c55e',
          '600': '#2aca40',  // Kldy Lime Green
          '700': '#16a34a',
          '800': '#15803d',
          '900': '#166534',
        },
        
        // Neutral grays (Kldy palette)
        'gray': {
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e0e8ed',  // Kldy light gray
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#799ca7',  // Kldy medium gray
          '700': '#637283',  // Kldy darker gray
          '800': '#374151',
          '900': '#1e1e1e',  // Kldy dark/black
        },
        
        // Brand alias
        'brand': '#0047a1',  // CyberVets primary blue
      },
      
      // Border radius for modern look
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'base': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'full': '9999px',
      },
      
      // Custom spacing scale
      spacing: {
        '128': '32rem',
      },
      
      // Shadows for depth
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  
  plugins: [],
};

export default config;
