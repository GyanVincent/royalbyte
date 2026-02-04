# Royal Byte - Premium IT Solutions Website

## Overview

Royal Byte is a modern, single-page marketing website for a premium IT solutions and software development company. The site showcases the company's services, team, and provides a contact form for potential clients. Built as a React SPA with a dark "royal" theme featuring navy blue and gold accents, the application emphasizes smooth animations and professional presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool for fast development and optimized production builds
- **React Router** for client-side routing (currently single-page with a 404 fallback)

### UI Component System
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Framer Motion** for smooth page animations and transitions
- **Lucide React** for consistent iconography

### Design System
The app uses a custom "Royal" dark theme with CSS variables defined in `src/index.css`:
- Primary colors: Royal blue (`hsl(217, 91%, 60%)`)
- Accent colors: Gold (`hsl(43, 74%, 49%)`)
- Background: Dark navy (`hsl(222, 47%, 6%)`)
- Custom fonts: Inter (body) and Playfair Display (headings)

### Page Structure
Single-page layout with sections:
1. Hero - Main landing with CTAs
2. Services - Service offerings grid
3. About - Company information and stats
4. Team - Leadership team profiles
5. Contact - Contact form and information

### State Management
- **TanStack Query** for server state management (configured but not heavily utilized in current implementation)
- React hooks for local component state
- Toast notifications via shadcn/ui toast system

### Build Configuration
- Development server runs on port 5000
- Production builds output to `docs/` folder for GitHub Pages hosting
- Base path configured as `/royalbyte-main/` for production deployment
- Code splitting configured for vendor and Radix UI bundles

## External Dependencies

### Email Service
- **EmailJS** (`@emailjs/browser`) - Handles contact form submissions without a backend server. Requires EmailJS service configuration with credentials.

### Backend/Database
- **Supabase** client is included in dependencies (`@supabase/supabase-js`) but not actively configured in the current codebase. This may be intended for future features like form submissions storage or user authentication.

### Hosting
- Configured for **GitHub Pages** deployment with:
  - SPA redirect handling via `404.html`
  - SEO-friendly `robots.txt`
  - Base path configuration in Vite

### Third-Party Integrations
- Social links to LinkedIn, GitHub, and Instagram
- WhatsApp integration for direct messaging
- Google Maps links for location information