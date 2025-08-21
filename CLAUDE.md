# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Information

This is a professional assessment landing page for Switzerland built with Next.js 15, TypeScript, and Tailwind CSS. It focuses on lead generation for educational assessments (Standortbestimmung) for Swiss students aged 4-15 years.

## Communication Guidelines

- Refer to the developer as "Liam" or "the developer"
- Liam refers to yourself as "you" or "agent" or "Claude Code" or "CC"
- When writing instructions, distinguish between actions the agent can perform and those Liam must do

## Infos about yourself

You are inside a WSL instance. Liam tests the app usually inside a powershell terminal (windows), while you are inside a WSL instance. This can lead to differences between Liams tests and your tests. That's why you should ask Liam to test the app himself after big changes.

## Implementation Guidelines

- Follow existing code patterns and styling conventions
- Use consistent component naming (LP* prefix for Landing Page components)
- Maintain responsive design patterns established in the codebase
- All colors should use the established design system (#ff6b35 primary orange, #e55a2b hover orange, grays, etc.)
- Icons should be SVG-based or emoji-based to maintain lightweight bundle

## TypeScript Guidelines

- **NEVER use `any` type** - Use proper typing with interfaces
- Define interfaces for all form data and API responses
- Use consistent type naming conventions

## Next.js App Router Guidelines

- Use route groups: `(main)` for public pages, `(form)` for form flow pages
- API routes should follow RESTful patterns
- Static generation should be preferred where possible
- Use proper metadata for SEO optimization

## Project Structure Overview

**Technology Stack**: Next.js 15.4.6, React 19, TypeScript, Tailwind CSS v4, HubSpot CRM, Google Ads Tracking

### Core Directory Structure

**Application Core**:
- `/src/app/` - Next.js App Router with route groups
- `/src/components/` - Reusable UI components (LP* components for landing page)
- `/src/lib/` - Business logic (HubSpot, tracking, CSRF utilities)
- `/src/hooks/` - Custom React hooks
- `/src/app/api/` - Server-side API routes

**Key Pages & Flows**:
- `/src/app/(main)/page.tsx` - Main landing page
- `/src/app/(form)/lehrer-finden/page.tsx` - Multi-step form for lead capture
- `/src/app/(form)/dankesseite/page.tsx` - Thank you page with conversion tracking
- `/src/app/(main)/impressum/page.tsx` - Legal imprint
- `/src/app/(main)/datenschutz/page.tsx` - Privacy policy

**Component Organization**:
- `/src/components/LPHero.tsx` - Hero section with animated text
- `/src/components/LPBenefits.tsx` - Benefits overview section
- `/src/components/LPSection.tsx` - Reusable content section
- `/src/components/LPSteps.tsx` - Process steps section
- `/src/components/LPTestimonial.tsx` - Customer testimonials
- `/src/components/LPOffers.tsx` - Service offerings
- `/src/components/MultiStepForm.tsx` - 5-step lead capture form
- `/src/components/AnimatedText.tsx` - Text animation with underline effect

**External Integrations**:
- `/src/lib/hubspotService.ts` - HubSpot CRM integration for lead management
- `/src/lib/tracking.ts` - Google Ads tracking and UTM parameter handling
- `/src/components/GoogleAnalytics.tsx` - Google Ads setup (AW-17483108923)
- `/src/components/ConversionTracker.tsx` - Conversion tracking for thank you page

**API Routes**:
- `/src/app/api/submit-form/route.ts` - Form submission with HubSpot integration
- `/src/app/api/csrf-token/route.ts` - CSRF token generation for security

**Configuration & Security**:
- `/src/lib/csrf.ts` + `/src/hooks/useCSRF.ts` - CSRF protection system
- Environment variables for HubSpot API tokens

**Development Commands**:
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Production build
- `npm run lint` - ESLint checks

## Common Development Patterns

**Landing Page Components**:
- All landing page components use `LP` prefix (LPHero, LPSection, etc.)
- Responsive design with mobile-first approach
- Consistent color scheme using Tailwind classes
- Icon-based design to minimize image usage

**Multi-Step Form Flow**:
- 5-step process: Who needs tutoring → Class selection → Subject → Postal code → Contact details
- Auto-advance functionality for single-selection steps
- Progress indicator and back navigation
- Field validation with error handling
- CSRF protection on form submission

**Google Ads Integration**:
- Tracking ID: AW-17483108923
- Conversion tracking on thank you page (B5eZCOuOhIcbELukzJBB)
- UTM parameter preservation throughout user journey
- Enhanced conversions setup for better attribution

**HubSpot Integration**:
- Server-side API integration with rate limiting
- Lead data mapping from form to HubSpot properties
- Duplicate detection and update handling
- Error handling with fallback to success for user experience

**Security Implementation**:
- CSRF tokens for all form submissions
- Server-side validation for all API endpoints
- Secure cookie handling for session management
- Input sanitization and validation

**Responsive Design Patterns**:
- Mobile-first CSS with Tailwind breakpoints
- Flexible grid layouts that adapt to screen size
- Touch-friendly form interactions
- Optimized loading states and animations

**SEO & Performance**:
- Static page generation where possible
- Proper meta tags and structured data
- Image optimization (minimal image usage, SVG icons preferred)
- Bundle optimization (Firebase removed, clean dependencies)

## Brand Guidelines

**Standortbestimmung Schweiz Branding**:
- Primary Color: #ff6b35 (orange-500)
- Hover Color: #e55a2b (orange-600)
- Focus: Switzerland-wide educational assessments
- CTA Text: "Jetzt Standortbestimmung anfragen"
- Company: Bildungsinstitut Fokus AG
- Website: standortbestimmung-schweiz.ch

**Content Strategy**:
- Switzerland-wide educational assessment messaging
- Benefits-focused copy (Lehrplan 21 compliance, expert analysis, clear recommendations)
- Problem-solution narrative structure (uncertainty → clarity → action)
- Social proof through testimonials
- Clear 3-step assessment process explanation

## Deployment & Environment

**Environment Variables Required**:
- `HUBSPOT_PRIVATE_APP_TOKEN` - HubSpot API access
- Production environment should include proper CORS and security headers

**Build Optimization**:
- Current bundle size: ~99.7 kB shared JS
- Main page: 13.4 kB + 113 kB first load
- Form page: 2.61 kB + 102 kB first load
- Static generation for all public pages

---

*Last updated: 2025-01-18 (after Firebase cleanup - removed 80 dependencies, improved build time from 25s to 4s)*