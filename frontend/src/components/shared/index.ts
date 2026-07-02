/**
 * Barrel Export - Clean imports for components
 * 
 * What is this?
 * Instead of: import { Button } from './Button/Button.tsx'
 * You write:  import { Button } from '@/components/shared'
 * 
 * This makes imports cleaner and easier to refactor later.
 */

export { Button } from './Button/Button';
export type { ButtonProps } from './Button/Button';

export { Card } from './Card/Card';
