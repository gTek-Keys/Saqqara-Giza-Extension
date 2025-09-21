"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Wand2, Palette, Layout, Type, Image as ImageIcon, Sparkles } from 'lucide-react'

interface AIDesignSuiteProps {
  onGenerateDesign?: (prompt: string, type: string) => Promise<any>
}

export function AIDesignSuite({ onGenerateDesign }: AIDesignSuiteProps) {
  const [prompt, setPrompt] = useState('')
  const [selectedType, setSelectedType] = useState('layout')
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<any>(null)

  const designTypes = [
    {
      id: 'layout',
      name: 'Layout Design',
      description: 'Generate responsive layouts and component structures',
      icon: Layout,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'color-palette',
      name: 'Color Palette',
      description: 'Create harmonious color schemes and palettes',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'typography',
      name: 'Typography',
      description: 'Design typography scales and font combinations',
      icon: Type,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'imagery',
      name: 'Visual Assets',
      description: 'Generate icons, illustrations, and visual elements',
      icon: ImageIcon,
      color: 'from-orange-500 to-red-500',
    },
  ]

  const handleGenerate = async () => {
    if (!prompt.trim() || !onGenerateDesign) return

    setIsGenerating(true)
    try {
      const generated = await onGenerateDesign(prompt, selectedType)
      setResult(generated)
    } catch (error) {
      console.error('Design generation failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="h-8 w-8 text-purple-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI Design Suite
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your design ideas into reality with AI-powered generation tools
        </p>
      </motion.div>

      {/* Design Type Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">Choose Design Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {designTypes.map((type) => {
            const Icon = type.icon
            return (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedType(type.id)}
                className={`relative p-6 rounded-xl border-2 transition-all ${
                  selectedType === type.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${type.color} mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{type.name}</h3>
                <p className="text-sm text-gray-600 text-left">{type.description}</p>
                {selectedType === type.id && (
                  <motion.div
                    layoutId="selected-indicator"
                    className="absolute inset-0 rounded-xl border-2 border-purple-500 bg-purple-500/5"
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Prompt Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">Describe Your Vision</h2>
        <div className="space-y-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={`Describe the ${designTypes.find(t => t.id === selectedType)?.name.toLowerCase()} you want to create...`}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
            rows={4}
          />
          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            size="lg"
          >
            {isGenerating ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="h-5 w-5 mr-2"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="h-5 w-5 mr-2" />
                Generate Design
              </>
            )}
          </Button>
        </div>
      </motion.div>

      {/* Results */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold text-gray-800">Generated Design</h2>
          <div className="p-6 bg-gray-50 rounded-lg border">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default AIDesignSuite