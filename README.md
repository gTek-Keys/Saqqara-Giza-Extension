# Saqqara-Giza-Extension
Fullstack AI-powered design suite with React, Next.js, Supabase, Tailwind, and generative AI engines. Includes responsive tables, open-source integrations, DevOps pipelines, and compliance-ready frameworks for SaaS, DeFi, and grant-backed fintech platforms.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **React 18** with Server Components
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** component library
- **Framer Motion** for animations
- **Supabase** for backend and authentication
- **AI Design Suite** with generate-design API
- **Responsive Tables** with Grid.js and TanStack Table
- **Design Tokens** system
- **CI/CD** with GitHub Actions
- **Vercel** deployment ready
- **Comprehensive Testing** setup
- **License & Compliance** ready

## 🛠️ Getting Started

1. Clone the repository:
```bash
git clone https://github.com/gTek-Keys/Saqqara-Giza-Extension.git
cd Saqqara-Giza-Extension
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Add your Supabase and AI service keys
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── api/             # API routes
│   │   └── generate-design/ # AI design generation
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── tables/     # Responsive table components
│   │   └── design-suite/ # AI Design Suite
│   ├── lib/            # Utilities and configurations
│   ├── styles/         # Global styles and design tokens
│   └── types/          # TypeScript definitions
├── public/             # Static assets
└── docs/              # Documentation
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🚀 Deployment

### Vercel
The app is configured for automatic deployment on Vercel:

```bash
npm run build
npm run start
```

### Manual Deployment
1. Build the application: `npm run build`
2. Deploy the `.next` folder to your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Documentation](./docs/README.md)
- [Component Library](./docs/components.md)
- [API Reference](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)