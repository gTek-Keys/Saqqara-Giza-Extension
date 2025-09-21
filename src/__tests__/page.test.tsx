import { render, screen } from '@testing-library/react'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

// Mock the tables to avoid gridjs issues
jest.mock('@/components/tables/data-table', () => ({
  DataTable: () => <div data-testid="data-table">Mock Data Table</div>
}))

jest.mock('@/components/tables/grid-table', () => ({
  GridTable: () => <div data-testid="grid-table">Mock Grid Table</div>
}))

// Mock the AI Design Suite
jest.mock('@/components/design-suite/ai-design-suite', () => ({
  AIDesignSuite: () => <div data-testid="ai-design-suite">Mock AI Design Suite</div>
}))

import Home from '@/app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByText('Saqqara-Giza')
    expect(heading).toBeInTheDocument()
  })

  it('renders the hero description', () => {
    render(<Home />)
    const description = screen.getByText(/Fullstack AI-powered design suite/i)
    expect(description).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(<Home />)
    const features = [
      'Next.js 14 + TypeScript',
      'Tailwind CSS + shadcn/ui',
      'Supabase Integration',
      'AI-Powered Design Suite',
      'Responsive Data Tables',
      'Framer Motion'
    ]

    features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument()
    })
  })

  it('renders navigation tabs', () => {
    render(<Home />)
    expect(screen.getByText('Overview')).toBeInTheDocument()
    expect(screen.getByText('Data Tables')).toBeInTheDocument()
    expect(screen.getByText('AI Design Suite')).toBeInTheDocument()
  })
})