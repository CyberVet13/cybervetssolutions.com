# Frontend — React Dashboard

React 18 + TypeScript dashboard for real estate agents, designed with the **Kldy Style Guide**.

## 🎨 Kldy Style Guide

This frontend adopts the professional **Kldy style guide** with:

- **Colors:** Primary Blue (#0047a1), Cyan (#21d4f3), Lime Green (#2aca40)
- **Typography:** Roboto font with clean hierarchy (72px → 10px)
- **Components:** Button (filled/outlined/success), Card (header/body/footer)
- **Design:** Modern, professional, accessible (WCAG AA)

**Full Guide:** See [docs/KLDY_STYLE_GUIDE.md](../docs/KLDY_STYLE_GUIDE.md)  
**Adoption Details:** See [KLDY_ADOPTION.md](../KLDY_ADOPTION.md)

## Quick Start

```bash
cd frontend
npm install
npm run dev
# http://localhost:3000 → Kldy style showcase
```

## Project Structure

```
src/
├── components/         # Reusable component library (Kldy styled)
│   ├── shared/        # Button, Card, Input, Modal (Kldy primitives)
│   └── domain/        # LeadCard, EmailComposer, etc.
├── pages/             # Page components by route
├── hooks/             # Custom React hooks
├── services/          # API clients + external services
├── state/             # State management
├── utils/             # Utilities
├── types/             # TypeScript types
└── __tests__/         # Tests
```

## Component Examples (Kldy Styled)

### Buttons

```jsx
import { Button } from '@/components/shared';

// Kldy Primary Blue (filled)
<Button>Click Me</Button>

// Kldy Lime Green (success)
<Button variant="success">Add to Cart</Button>

// Kldy Outlined (secondary)
<Button variant="outline">Sign In</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Cards

```jsx
import { Card } from '@/components/shared';

<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content here</Card.Body>
  <Card.Footer>
    <Button size="sm">Action</Button>
  </Card.Footer>
</Card>
```

### Colors (Kldy Palette)

```jsx
// Primary Blue
<div className="bg-primary-800 text-white">
  Primary content
</div>

// Cyan (accent)
<div className="bg-primary-600 text-white">
  Accent highlight
</div>

// Lime Green (success)
<div className="bg-success-600 text-white">
  Success message
</div>

// Text hierarchy
<h1 className="text-2xl font-bold text-gray-900">Title</h1>
<p className="text-base text-gray-700">Body text</p>
```

## Key Commands

```bash
npm run dev           # Start dev server (http://localhost:3000)
npm run build         # Production build
npm run test          # Run tests
npm run test:watch    # Watch mode
npm run lint          # ESLint check
npm run format        # Prettier format
npm run type-check    # TypeScript validation
```

## Design System

- **Colors:** See `frontend/tailwind.config.ts` for all Kldy colors
- **Typography:** Roboto font family with predefined sizes
- **Spacing:** 4px, 8px, 16px, 24px, 32px scale
- **Borders:** 6-8px radius, 1px solid borders
- **Shadows:** Subtle to prominent on hover

## Guidelines (Kldy)

✅ **Use predefined colors** (primary-800, success-600, gray-200)  
✅ **Use Roboto font** (imported globally)  
✅ **Use button variants** (filled, outline, success)  
✅ **Use card compound component** (Header/Body/Footer)  
✅ **Maintain spacing** (4px, 8px, 16px scale)  
✅ **Test contrast** (WCAG AA minimum)  
✅ **Check accessibility** (keyboard nav, ARIA labels)  

❌ Don't create custom colors  
❌ Don't use arbitrary font sizes  
❌ Don't bypass component patterns  
❌ Don't ignore disabled states  

## Testing

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

## Troubleshooting

**Colors not showing?**
- Check Tailwind classes (bg-primary-800, text-gray-900, etc.)
- Verify `frontend/tailwind.config.ts` is imported

**Roboto font not loading?**
- Check `src/index.css` for Google Fonts import
- Clear cache: `npm run build`

**Components not styled?**
- Ensure you're using Tailwind classes
- Import from `@/components/shared`

## Resources

- [Kldy Style Guide](../docs/KLDY_STYLE_GUIDE.md) - Complete design specs
- [Kldy Adoption Document](../KLDY_ADOPTION.md) - What changed
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Documentation](https://react.dev)

## Tips

1. **Copy Button Examples:** Check `src/components/shared/Button/Button.tsx`
2. **Copy Card Examples:** Check `src/components/shared/Card/Card.tsx`
3. **See Showcase:** Run `npm run dev` and visit http://localhost:3000
4. **Reference Colors:** Open `frontend/tailwind.config.ts`
5. **Ask Claude:** Use `/build`, `/qa`, `/design-review` for help

## Guidelines

- **Functional components** with hooks only
- **TypeScript strict mode** — explicit types everywhere
- **Tests alongside code** — `Component.test.tsx` next to `Component.tsx`
- **Barrel exports** (`index.ts`) for clean imports
- **Storybook** for component documentation
- **80%+ test coverage** target

## Common Patterns

### Custom Hook
```typescript
// hooks/useApi.ts
export function useApi<T>(endpoint: string) {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // fetch logic
  }, [endpoint]);

  return { data, error, loading };
}
```

### Component with Tests
```typescript
// components/shared/Button/Button.tsx
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

// Button.test.tsx
describe('Button', () => {
  it('calls onClick handler when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    
    fireEvent.click(getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

## Styling

- **Tailwind CSS** for utility-first CSS
- **CSS Modules** for component scoping if needed
- **Theme configuration** in `styles/theme.ts`

## API Integration

```typescript
// services/api/client.ts
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${getToken()}`
  }
});

// services/api/leads.ts
export async function getLeads() {
  const { data } = await api.get('/leads');
  return data;
}

// Usage in component
function Dashboard() {
  const { data: leads, loading } = useApi('/leads');
  // ...
}
```

## Next Steps

1. Set up **pnpm workspaces** (shared dependencies across frontend/backend)
2. Create **Storybook** for component library
3. Setup **Vitest** for faster testing
4. Add **E2E tests** with Playwright

---

See [CONTRIBUTING.md](../CONTRIBUTING.md) for development workflow.
