/**
 * Card Component - Following Kldy Style Guide
 * 
 * A Card is a clean, modern container for content.
 * Kldy style: White background, subtle shadow, rounded corners,
 * clear hierarchy using their neutral gray palette.
 * 
 * Usage:
 * <Card>
 *   <Card.Header>Title</Card.Header>
 *   <Card.Body>Content here</Card.Body>
 *   <Card.Footer>Footer</Card.Footer>
 * </Card>
 */

import React from 'react';

// Card.Header component - Kldy style title section
interface CardHeaderProps {
  children: React.ReactNode;
}

function CardHeader({ children }: CardHeaderProps): React.ReactElement {
  // Kldy header: border bottom, white background, clear title hierarchy
  return (
    <div className="border-b border-gray-200 px-6 py-4 bg-white">
      <h2 className="text-lg font-bold text-gray-900">{children}</h2>
    </div>
  );
}

// Card.Body component - Main content area
interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

function CardBody({ children, className = '' }: CardBodyProps): React.ReactElement {
  return <div className={`px-6 py-5 text-gray-700 ${className}`}>{children}</div>;
}

// Card.Footer component - Actions/info section
interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

function CardFooter({ children, className = '' }: CardFooterProps): React.ReactElement {
  // Kldy footer: border top, light gray background (Kldy #e0e8ed)
  return (
    <div className={`border-t border-gray-200 px-6 py-4 bg-gray-50 ${className}`}>
      {children}
    </div>
  );
}

// Main Card component - Kldy style wrapper
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps): React.ReactElement {
  // Kldy card: white background, subtle shadow, rounded corners (6px),
  // light gray border, hover shadow effect
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-shadow duration-200 hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
}

// Attach sub-components to Card for compound component pattern
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
