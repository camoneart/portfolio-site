# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website for Kaishu Aoyama, a creative developer. The site showcases interactive 3D elements, animations, and a modern design. It uses TypeScript, Tailwind CSS, and various animation libraries.

## Development Commands

**Package Manager**: This project uses `pnpm` exclusively (configured in package.json as `"packageManager": "pnpm@10.11.1"`).

### Core Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix and format

### Code Quality

- `pnpm format:write` - Format code with Prettier
- `pnpm format:check` - Check formatting without changes

## Architecture & Structure

### Directory Organization

- **Feature-based structure**: Each major feature has its own directory under `src/app/features/`
- **Component organization**: Components are organized by type:
  - `src/app/components/3D/` - Three.js and React Three Fiber components
  - `src/app/components/Animation/` - Animation components using GSAP and Motion
  - `src/app/components/elements/` - Basic UI elements
  - `src/app/components/layouts/` - Layout components
  - `src/app/features/` - Feature-specific components grouped by domain

### Key Technologies

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + CSS Modules (component-specific styles)
- **Animation**: GSAP, Motion (Framer Motion successor), next-view-transitions
- **3D**: React Three Fiber, Drei, Three.js
- **Forms**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui components
- **Audio**: Howler.js for background music

### Core Architecture Patterns

1. **CSS Modules + Tailwind**: Each component has its own `.module.css` file for component-specific styles, combined with Tailwind utilities
2. **Feature-based organization**: Related components, hooks, and logic are co-located in feature directories
3. **Custom hooks**: Feature-specific hooks are organized in `hooks/` subdirectories
4. **Type safety**: Full TypeScript implementation with strict typing
5. **Responsive design**: Mobile-first approach with Tailwind breakpoints

### Important Implementation Details

- **Font**: Uses Russo One Google Font as primary display font
- **Animation system**: Complex animation sequences using GSAP and Motion with staggered delays
- **3D Elements**: Floating cubes animation on homepage using React Three Fiber
- **Audio Player**: Global audio player component with volume controls
- **View Transitions**: Smooth page transitions using next-view-transitions
- **Form handling**: Contact form with email sending via Resend API
- **Responsive navigation**: Hamburger menu for mobile, full navigation for desktop

### Development Notes

- The site uses Japanese language for content
- Metadata includes `robots: "noindex, nofollow"` for development
- All animations have carefully orchestrated timing and delays
- Component styles follow BEM-like naming conventions in CSS Modules
- Images are optimized using Next.js Image component
- External links open in new tabs with security attributes

### Code Style Conventions

- Use TypeScript for all new code
- Follow existing CSS Modules naming patterns
- Maintain consistent animation timing patterns
- Use Motion for new animations where appropriate
- Keep feature-specific code within feature directories
- Maintain responsive design patterns established in existing components

## Testing

No specific test setup is currently configured. When adding tests, consider the animation-heavy nature of the codebase and the 3D components that may require special testing approaches.
