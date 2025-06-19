# Personal Portfolio Website

## Overview

This is a full-stack personal portfolio website built with a modern React frontend and Node.js/Express backend. The application showcases a developer's skills, projects, and contact information through an elegant, responsive design using shadcn/ui components and Tailwind CSS.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React with TypeScript, built with Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but not fully implemented)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Library**: Comprehensive shadcn/ui components for consistent UI
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Styling**: Tailwind CSS with custom design tokens and dark mode support
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM configured for PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with Vite integration in development mode
- **Error Handling**: Centralized error handling middleware

### Database Schema
Currently defines basic user authentication structure:
- Users table with username/password fields
- Prepared for expansion with additional entities
- Uses Drizzle ORM with Zod schema validation

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Data Storage**: Currently uses in-memory storage (MemStorage class) with interface for database migration
4. **Response Handling**: JSON responses with proper error handling and logging

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Database connection for Neon PostgreSQL
- **@radix-ui/***: Headless UI primitives for accessibility
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **zod**: Schema validation

### Development Tools
- **Vite**: Build tool and dev server
- **Drizzle Kit**: Database migrations and schema management
- **ESBuild**: Server-side bundling for production
- **TSX**: TypeScript execution for development

## Deployment Strategy

### Development
- Local development server on port 5000
- Hot module replacement via Vite
- Separate client and server builds
- PostgreSQL database integration ready

### Production
- **Build Process**: 
  - Frontend: Vite build to `dist/public`
  - Backend: ESBuild bundle to `dist/index.js`
- **Deployment Target**: Replit autoscale deployment
- **Environment**: Node.js 20 with PostgreSQL 16
- **Port Configuration**: Internal port 5000, external port 80

### Database
- Drizzle migrations in `./migrations` directory
- Schema defined in `shared/schema.ts`
- Ready for PostgreSQL deployment with environment variable configuration

## Changelog
- June 19, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.