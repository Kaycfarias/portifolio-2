# Copilot Instructions for Portfolio Site

## Project Overview

A Next.js 15 portfolio site using React 19, TailwindCSS v4, Styled Components, and Framer Motion. Single-page application with section-based navigation and intersection observer for active states.

## Architecture Patterns

### Section-Based SPA Structure

- All content lives in `src/app/page.tsx` as a single scrollable container
- Each section (Home, About, Skills, Projects, Contact) is a separate component in `src/app/sections/`
- Each section MUST use the `<Section>` wrapper component with matching `id` prop
- Navigation array in `src/app/page.tsx` drives both navbar and section routing

### Navigation Context Pattern

- `NavContext` tracks active section via intersection observer
- `SectionButton` components automatically highlight based on active section
- Section visibility threshold is 0.6 (60% visible triggers active state)

### Hybrid Styling Approach

- **TailwindCSS v4**: Primary styling system with CSS variables in `globals.css`
- **Styled Components**: Used for complex hover effects (see `SectionButton` gradient underline)
- **Motion**: Framer Motion for animations (mobile menu, transitions)

## Key Components

### Section Wrapper (`src/components/ui/Section.tsx`)

```tsx
<Section id="Home">
  {" "}
  // ID must match navigation array
  <div>Your content</div>
</Section>
```

- Handles intersection observer logic
- Sets viewport height minus navbar (3.5rem)
- Updates NavContext on visibility changes

### SectionButton (`src/components/ui/secbutton.tsx`)

- Styled component with gradient underline animation
- Automatically shows/hides underline based on active section
- Uses anchor links for smooth scrolling

## Development Workflows

### Local Development

```bash
yarn dev  # Uses Turbopack for faster builds
```

### Project Structure Rules

- UI components in `src/components/ui/`
- Page sections in `src/app/sections/`
- Context providers in `src/app/context/`
- Utility functions in `src/lib/`

## Styling Conventions

### TailwindCSS v4 Setup

- Uses CSS variables defined in `@theme inline` block in `globals.css`
- Import order: `tailwindcss` → `tw-animate-css` → custom styles
- Responsive design: mobile-first with `sm:` breakpoints

### Component Styling Pattern

- Use `cn()` utility from `src/lib/utils.ts` for conditional classes
- Styled Components only for complex animations/gradients
- Consistent spacing with `max-w-6xl` containers

## Configuration Notes

### Key Dependencies

- **Motion**: `motion/react` (not framer-motion)
- **Fonts**: Geist Sans/Mono via Google Fonts
- **UI Library**: Radix UI components with shadcn/ui setup
- **Package Manager**: Yarn (locked version in package.json)

### Navigation Updates

When adding new sections:

1. Create component in `src/app/sections/`
2. Add to navigation array in `src/app/page.tsx`
3. Import and render in main page component
4. Use exact ID matching between navigation and Section component

### Mobile Considerations

- Hamburger menu with animated state (pure CSS in navbar)
- Mobile navigation slides down with Motion AnimatePresence
- Responsive breakpoint at `sm:` (640px)
