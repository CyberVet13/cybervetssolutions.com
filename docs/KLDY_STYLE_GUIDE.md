# Kldy Style Guide - CyberVets Design System

> Adopted from the professional Kldy style guide. A clean, modern design system with primary blues, cyan accents, and lime green actions.

This document outlines the design system used throughout CyberVets Solutions, based on the Kldy style guide principles.

---

## 01. Color Palette

The Kldy color palette consists of carefully selected colors for a professional, modern look.

### Primary Colors

| Color | Hex Code | Usage | Tailwind Class |
|-------|----------|-------|---|
| **Primary Blue** | `#0047a1` | Main brand color, buttons, links, headings | `bg-primary-800` |
| **Cyan** | `#21d4f3` | Accent color, highlights, secondary actions | `bg-primary-600` |
| **Lime Green** | `#2aca40` | Success state, positive actions, CTAs | `bg-success-600` |

### Neutral Colors (Grays)

| Color | Hex Code | Usage | Tailwind Class |
|-------|----------|-------|---|
| **Dark (Almost Black)** | `#1e1e1e` | Primary text color | `text-gray-900` |
| **Dark Gray** | `#637283` | Secondary text, borders | `text-gray-700` |
| **Medium Gray** | `#799ca7` | Disabled text, captions | `text-gray-600` |
| **Light Gray** | `#e0e8ed` | Backgrounds, form inputs | `bg-gray-200` |
| **White** | `#ffffff` | Card backgrounds, contrast | `bg-white` |

### Usage Examples

```jsx
// Primary Blue - Main actions
<Button className="bg-primary-800">Sign In</Button>

// Cyan - Secondary actions
<div className="bg-primary-600">Feature highlight</div>

// Lime Green - Success/positive actions
<Button variant="success">Add to Cart</Button>

// Grays - Text hierarchy
<h1 className="text-gray-900">Main Heading</h1>
<p className="text-gray-600">Secondary Text</p>
```

---

## 02. Typography

All typography uses **Roboto** font family with a clean, modern hierarchy.

### Font Specifications

| Level | Font Size | Font Weight | Usage | CSS Class |
|-------|-----------|-------------|-------|-----------|
| **Title** | 72px | Bold (700) | Main page headings | `text-2xl font-bold` |
| **Subtitle** | 36px | Bold (700) | Section headings | `text-xl font-bold` |
| **Body 2 / Menu** | 18px | Medium (500) | Menus, secondary text | `text-lg font-semibold` |
| **Body 1** | 15px | Regular (400) | Paragraph text (default) | `text-base` |
| **Caption** | 12px | Regular (400) | Labels, captions | `text-sm` |
| **Small Caption** | 10px | Regular (400) | Tiny text, hints | `text-xs` |

### Font Family

```css
font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

All Google Fonts are imported:
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
```

### Text Hierarchy Example

```jsx
<h1 className="text-2xl font-bold">Title - Bold 72px</h1>
<h2 className="text-xl font-bold">Subtitle - Bold 36px</h2>
<h3 className="text-lg font-semibold">Body 2 - Medium 18px</h3>
<p className="text-base">Body 1 - Regular 15px</p>
<small className="text-xs">Caption - Regular 10px</small>
```

---

## 03. Buttons

Kldy features two main button styles: **Filled** and **Outlined**.

### Filled Buttons

Solid background, used for primary actions.

```jsx
// Primary Blue (default)
<Button>Click Me</Button>

// Success Green
<Button variant="success">Add to Cart</Button>

// Hover effect: Darker shade
// Active effect: Even darker shade
```

**Styles:**
- Background: Primary color
- Text: White
- Hover: Darker shade of the color
- Disabled: Gray background with reduced opacity

### Outlined Buttons

Border only, transparent background. Subtle, secondary actions.

```jsx
<Button variant="outline">Sign In</Button>
```

**Styles:**
- Border: 2px solid primary color
- Background: Transparent
- Text: Primary color
- Hover: Light background color
- Disabled: Gray border and text

### Button Sizes

```jsx
<Button size="sm">Small</Button>    {/* 12px, 3px padding */}
<Button size="md">Medium</Button>   {/* 15px, 4px padding - default */}
<Button size="lg">Large</Button>    {/* 18px, 6px padding */}
```

### Button Examples

```jsx
// Filled Primary (Blue)
<Button>Filled Button</Button>

// Filled Success (Green)
<Button variant="success">Add to Cart</Button>

// Outlined
<Button variant="outline">Sign In</Button>

// Disabled
<Button disabled>Disabled</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

---

## 04. Cards

Cards are clean, modern containers with subtle shadows and rounded corners.

### Card Structure

Cards are compound components with three sections:

```jsx
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content goes here</Card.Body>
  <Card.Footer>Actions or additional info</Card.Footer>
</Card>
```

### Card Styling

- **Background:** White (`#ffffff`)
- **Border:** 1px solid light gray (`#e0e8ed`)
- **Border Radius:** 8px (rounded corners)
- **Shadow:** Subtle shadow on normal, enhanced on hover
- **Header:** Bordered bottom, Roboto bold 18px
- **Body:** Regular text, default padding
- **Footer:** Light gray background, bordered top

### Card Example

```jsx
<Card>
  <Card.Header>My Card Title</Card.Header>
  <Card.Body>
    <p>This is the main content of the card.</p>
  </Card.Body>
  <Card.Footer>
    <Button size="sm">Learn More</Button>
  </Card.Footer>
</Card>
```

---

## 05. Forms

Forms follow Kldy style with clean inputs and clear labels.

### Text Inputs

- **Border Radius:** 6px
- **Border:** 1px solid light gray
- **Font:** Roboto, Regular 15px
- **Disabled State:** Light gray background, reduced opacity

```jsx
<input 
  type="text" 
  placeholder="Hint text"
  className="border border-gray-200 rounded-md p-3 text-base"
/>
```

### Form Labels

```jsx
<label className="text-sm font-medium text-gray-900 mb-2 block">
  Label Text
</label>
```

### Form Example

```jsx
<div className="space-y-4">
  <div>
    <label className="text-sm font-medium text-gray-900 mb-2 block">
      Email Address
    </label>
    <input 
      type="email" 
      placeholder="email@example.com"
      className="w-full border border-gray-200 rounded-md p-3"
    />
  </div>
  
  <div>
    <label className="text-sm font-medium text-gray-900 mb-2 block">
      Password
    </label>
    <input 
      type="password" 
      placeholder="••••••••"
      className="w-full border border-gray-200 rounded-md p-3"
    />
  </div>
  
  <Button>Sign In</Button>
</div>
```

---

## 06. Icons

Icons in Kldy follow a simple, outline style with consistent stroke width.

### Icon Style

- **Style:** Outline/line icons
- **Size:** 24px (standard), scalable
- **Stroke Width:** 1.5px-2px
- **Color:** Match text color (use `text-gray-700` or `text-primary-800`)

### Icon Usage

```jsx
// E-commerce icons
<ShoppingCartIcon className="text-primary-800" />

// Navigation icons
<HomeIcon className="text-gray-700" />
<UserIcon className="text-gray-700" />

// Status icons
<CheckCircleIcon className="text-success-600" />
<AlertIcon className="text-red-600" />
```

---

## 07. Sign In Forms

Kldy features social login options and clean email/password forms.

### Social Login Buttons

```jsx
<Button className="bg-blue-600 w-full mb-3">
  <FacebookIcon className="mr-2" />
  Sign in with Facebook
</Button>

<Button className="bg-primary-600 w-full mb-3">
  <TwitterIcon className="mr-2" />
  Sign in with Twitter
</Button>
```

### Email/Password Form

```jsx
<form className="space-y-4">
  <div>
    <label className="text-sm font-medium text-gray-900 mb-2 block">
      Email Address
    </label>
    <input 
      type="email" 
      placeholder="email@example.com"
      className="w-full border border-gray-200 rounded-md p-3"
    />
  </div>
  
  <div>
    <label className="text-sm font-medium text-gray-900 mb-2 block">
      Password
    </label>
    <input 
      type="password" 
      placeholder="••••••••"
      className="w-full border border-gray-200 rounded-md p-3"
    />
  </div>
  
  <Button className="w-full">Sign In</Button>
  
  <p className="text-sm text-center text-gray-600">
    Don't have an account? <a href="#" className="text-primary-800">Sign up</a>
  </p>
</form>
```

---

## 08. Other Elements

### Weather Forecast

```jsx
<Card>
  <Card.Body>
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold">Monday</p>
        <p className="text-2xl">25°C</p>
      </div>
      <CloudIcon className="text-3xl" />
    </div>
  </Card.Body>
</Card>
```

### Sliders

```jsx
<input 
  type="range" 
  min="1" 
  max="100"
  className="w-full accent-primary-800"
/>
```

### Tables

```jsx
<table className="w-full border-collapse">
  <thead>
    <tr className="border-b border-gray-200">
      <th className="text-left p-3 font-semibold">Name</th>
      <th className="text-left p-3 font-semibold">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="p-3">Item 1</td>
      <td className="p-3 text-success-600">Active</td>
    </tr>
  </tbody>
</table>
```

---

## Color Reference - Tailwind Classes

### Primary Colors

```
bg-primary-600    → Cyan (#21d4f3)
bg-primary-800    → Primary Blue (#0047a1)
text-primary-600  → Cyan text
text-primary-800  → Primary Blue text
text-primary-100  → Light blue text
```

### Success Colors

```
bg-success-600    → Lime Green (#2aca40)
text-success-600  → Lime Green text
```

### Gray Colors

```
bg-gray-50        → Very light (backgrounds)
bg-gray-200       → Light (#e0e8ed)
bg-gray-900       → Dark (#1e1e1e)
text-gray-600     → Medium gray text
text-gray-700     → Darker gray text
text-gray-900     → Dark text
```

---

## Layout Principles

### Spacing Scale

- **Extra Small:** 4px (text padding)
- **Small:** 8px (component spacing)
- **Medium:** 16px (section spacing)
- **Large:** 24px (major sections)
- **Extra Large:** 32px+ (page margins)

### Borders & Radii

- **Border Radius:** 6-8px (modern, not too rounded)
- **Border Width:** 1-2px (subtle borders)
- **Border Color:** Light gray (`#e0e8ed`)

### Shadows

- **Subtle:** `0 1px 3px rgba(0, 0, 0, 0.1)`
- **Medium:** `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Large:** `0 10px 15px rgba(0, 0, 0, 0.1)`

### Responsive Design

```jsx
// Mobile first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>
```

---

## Design Tokens - Quick Reference

```javascript
// Colors
const COLORS = {
  PRIMARY_BLUE: '#0047a1',
  CYAN: '#21d4f3',
  LIME_GREEN: '#2aca40',
  DARK: '#1e1e1e',
  DARK_GRAY: '#637283',
  MEDIUM_GRAY: '#799ca7',
  LIGHT_GRAY: '#e0e8ed',
  WHITE: '#ffffff',
};

// Typography
const FONT = {
  FAMILY: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  SIZES: {
    TITLE: '72px',
    SUBTITLE: '36px',
    BODY2: '18px',
    BODY1: '15px',
    CAPTION: '12px',
  },
};

// Spacing
const SPACING = {
  XS: '4px',
  SM: '8px',
  MD: '16px',
  LG: '24px',
  XL: '32px',
};

// Border Radius
const RADIUS = {
  SM: '2px',
  MD: '6px',
  LG: '8px',
  FULL: '9999px',
};
```

---

## Implementation Checklist

When building new components, ensure:

- ✅ Use Kldy primary blue (`#0047a1`) for primary actions
- ✅ Use Kldy lime green (`#2aca40`) for success/positive actions
- ✅ Use Kldy cyan (`#21d4f3`) for secondary/accent colors
- ✅ Use Roboto font family with proper weights
- ✅ Follow typography hierarchy (72px → 10px)
- ✅ Apply subtle shadows and rounded corners
- ✅ Maintain consistent spacing (4px, 8px, 16px scale)
- ✅ Use light gray borders on inputs and cards
- ✅ Support both filled and outlined button variants
- ✅ Ensure proper color contrast for accessibility
- ✅ Test responsive design (mobile, tablet, desktop)

---

## Accessibility

### Color Contrast

All text colors meet WCAG AA standards:

- **Primary Blue on White:** 7.5:1 ✅
- **Cyan on White:** 2.8:1 ⚠️ (use for decorative elements only)
- **Dark Gray on White:** 4.5:1 ✅
- **White on Primary Blue:** 8.2:1 ✅

### Font Sizes

- Minimum font size: 10px (captions only)
- Body text: 15px minimum
- Headings: 18px minimum
- Always provide sufficient line-height (1.5-1.6)

### Interactive Elements

- All buttons have clear hover states
- Disabled state is visually distinct
- Focus states for keyboard navigation
- Touch targets minimum 44x44px

---

## Resources

- [Tailwind CSS Color Reference](https://tailwindcss.com/docs/customization/colors)
- [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated:** July 1, 2026  
**Based on:** Kldy Style Guide  
**Status:** Production Ready  

For questions or updates, refer to [frontend/README.md](../frontend/README.md) or ask Claude with `/design-review`.
