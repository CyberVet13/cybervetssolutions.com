/**
 * Button Component Tests
 * 
 * Tests check that the Button works correctly.
 * They simulate user actions (click) and verify the component responds.
 * 
 * Example test:
 * - Set up: Create a Button with onClick handler
 * - Action: Simulate user clicking the button
 * - Verify: Check that onClick was called
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  // Test 1: Button renders with text
  it('should render button with text', () => {
    render(<Button>Click me</Button>);
    
    // Check that text "Click me" appears on screen
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  // Test 2: Button calls onClick when clicked
  it('should call onClick handler when clicked', () => {
    // vi.fn() creates a mock function we can track
    const onClick = vi.fn();
    
    render(<Button onClick={onClick}>Click me</Button>);
    
    // Find and click the button
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    
    // Verify onClick was called once
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // Test 3: Button can be disabled
  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });

  // Test 4: Button applies correct variant styles
  it('should apply secondary variant classes', () => {
    render(<Button variant="secondary">Secondary</Button>);
    
    const button = screen.getByText('Secondary');
    // Check that secondary styling is applied (contains bg-gray-200)
    expect(button).toHaveClass('bg-gray-200');
  });

  // Test 5: Button applies correct size
  it('should apply large size classes', () => {
    render(<Button size="lg">Large Button</Button>);
    
    const button = screen.getByText('Large Button');
    expect(button).toHaveClass('px-6', 'py-3');
  });
});
