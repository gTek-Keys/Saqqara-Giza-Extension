"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/tables/data-table'
import { GridTable } from '@/components/tables/grid-table'
import { AIDesignSuite } from '@/components/design-suite/ai-design-suite'
import { 
  Palette, 
  Table, 
  Sparkles, 
  Code, 
  Database, 
  Zap,
  Github,
  ExternalLink,
  CheckCircle
} from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'

// Sample data for tables
const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', status: 'Active' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Designer', status: 'Active' },
]

const columns: ColumnDef<typeof sampleData[0]>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        row.getValue('status') === 'Active' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      }`}>
        {row.getValue('status')}
      </div>
    ),
  },
]

const gridData = sampleData.map(item => [item.name, item.email, item.role, item.status])
const gridColumns = ['Name', 'Email', 'Role', 'Status']

const features = [
  {
    icon: Code,
    title: 'Next.js 14 + TypeScript',
    description: 'Modern React framework with full TypeScript support',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Tailwind CSS + shadcn/ui',
    description: 'Beautiful, accessible components with utility-first CSS',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Supabase Integration',
    description: 'Full-stack backend with authentication and real-time features',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Design Suite',
    description: 'Generate layouts, colors, typography with AI assistance',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Table,
    title: 'Responsive Data Tables',
    description: 'TanStack Table and Grid.js for complex data visualization',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'Framer Motion',
    description: 'Smooth animations and micro-interactions',
    color: 'from-pink-500 to-rose-500',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')

  const handleGenerateDesign = async (prompt: string, type: string) => {
    try {
      const response = await fetch('/api/generate-design', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, type }),
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Failed to generate design:', error)
      throw error
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: CheckCircle },
    { id: 'tables', label: 'Data Tables', icon: Table },
    { id: 'ai-suite', label: 'AI Design Suite', icon: Sparkles },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-12 w-12 text-purple-600" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Saqqara-Giza
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Fullstack AI-powered design suite with React, Next.js, Supabase, Tailwind, and generative AI engines
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Github className="h-5 w-5 mr-2" />
              View on GitHub
            </Button>
            <Button size="lg" variant="outline">
              <ExternalLink className="h-5 w-5 mr-2" />
              Live Demo
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive starter kit with modern tools and AI-powered features
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Components
            </h2>
            <p className="text-lg text-gray-600">
              Explore the powerful features included in this starter kit
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-3 rounded-md font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-purple-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-5 w-5 inline mr-2" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white rounded-md shadow-sm"
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-xl p-8"
          >
            {activeTab === 'overview' && (
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Welcome to Saqqara-Giza Extension
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  This fullstack starter includes everything you need to build modern web applications with AI-powered features, responsive design, and robust backend integration.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">15+</div>
                    <div className="text-gray-600">Pre-built Components</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600">4</div>
                    <div className="text-gray-600">AI Design Types</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">100%</div>
                    <div className="text-gray-600">TypeScript Coverage</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tables' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">TanStack Table</h3>
                  <DataTable columns={columns} data={sampleData} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Grid.js Table</h3>
                  <GridTable data={gridData} columns={gridColumns} />
                </div>
              </div>
            )}

            {activeTab === 'ai-suite' && (
              <AIDesignSuite onGenerateDesign={handleGenerateDesign} />
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-semibold">Saqqara-Giza Extension</span>
          </div>
          <p className="text-gray-400 mb-6">
            Built with ❤️ using Next.js, React, Tailwind CSS, and modern web technologies
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              License
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
