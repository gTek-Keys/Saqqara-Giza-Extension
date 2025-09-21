# Documentation

Welcome to the Saqqara-Giza Extension documentation. This fullstack starter provides everything you need to build modern web applications with AI-powered features.

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/gTek-Keys/Saqqara-Giza-Extension.git
   cd Saqqara-Giza-Extension
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## Features Overview

### 🏗️ Architecture
- **Next.js 14** with App Router for modern React development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for beautiful, accessible components

### 🤖 AI Integration
- **OpenAI API** integration for design generation
- **AI Design Suite** with multiple design types
- **Intelligent prompt processing** for better results

### 📊 Data Management
- **Supabase** for backend and authentication
- **TanStack Table** for advanced data tables
- **Grid.js** for lightweight table solutions
- **Real-time updates** support

### 🎨 Design System
- **Design tokens** for consistent styling
- **Responsive design** patterns
- **Framer Motion** for smooth animations
- **Accessibility** best practices

### 🚀 DevOps & Deployment
- **GitHub Actions** CI/CD pipeline
- **Vercel** deployment configuration
- **Automated testing** with Jest
- **Code quality** tools (ESLint, Prettier)

## File Structure

```
src/
├── app/                  # Next.js App Router
│   ├── api/             # API routes
│   │   └── generate-design/ # AI design generation endpoint
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── tables/         # Table components (TanStack, Grid.js)
│   └── design-suite/   # AI Design Suite components
├── lib/                # Utility functions and configurations
│   ├── utils.ts        # Common utilities (cn function)
│   ├── supabase.ts     # Supabase client configuration
│   └── design-tokens.ts # Design system tokens
├── styles/             # Additional styles
└── types/              # TypeScript type definitions
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Optional: Additional services
REPLICATE_API_TOKEN=your_replicate_api_token
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_vercel_analytics_id
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Code Quality

This project includes several tools to maintain code quality:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking
- **Jest** for testing
- **Husky** for Git hooks
- **lint-staged** for pre-commit checks

### Testing

Tests are located in `__tests__` directories and use Jest with React Testing Library:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Next Steps

1. [Component Library](./components.md) - Learn about available components
2. [API Reference](./api.md) - Explore API endpoints
3. [Deployment Guide](./deployment.md) - Deploy your application
4. [Contributing](../CONTRIBUTING.md) - Contribute to the project

## Support

- [GitHub Issues](https://github.com/gTek-Keys/Saqqara-Giza-Extension/issues)
- [Discussions](https://github.com/gTek-Keys/Saqqara-Giza-Extension/discussions)
- [Documentation](./README.md)