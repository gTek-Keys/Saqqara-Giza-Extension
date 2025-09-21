import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(request: NextRequest) {
  try {
    const { prompt, type } = await request.json()

    if (!prompt || !type) {
      return NextResponse.json(
        { error: 'Prompt and type are required' },
        { status: 400 }
      )
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    // Initialize OpenAI client only when needed
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Define system prompts for different design types
    const systemPrompts = {
      layout: `You are an expert UI/UX designer. Generate a detailed layout design specification based on the user's prompt. Include:
      - Component hierarchy and structure
      - Responsive breakpoints and grid system
      - Spacing and positioning guidelines
      - Accessibility considerations
      - Modern design patterns and best practices
      
      Return a JSON object with the layout specification.`,
      
      'color-palette': `You are a color theory expert and designer. Generate a comprehensive color palette based on the user's prompt. Include:
      - Primary, secondary, and accent colors
      - Color harmonies and relationships
      - Usage guidelines for each color
      - Accessibility compliance (WCAG contrast ratios)
      - Semantic color mappings (success, warning, error, etc.)
      
      Return a JSON object with the color palette specification.`,
      
      typography: `You are a typography expert. Generate a complete typography system based on the user's prompt. Include:
      - Font family recommendations
      - Type scale and hierarchy
      - Line heights and spacing
      - Font weights and styles
      - Responsive typography guidelines
      - Usage examples for different contexts
      
      Return a JSON object with the typography specification.`,
      
      imagery: `You are a visual design expert. Generate detailed specifications for visual assets based on the user's prompt. Include:
      - Icon style guidelines
      - Illustration style recommendations
      - Image treatment and filters
      - Visual hierarchy principles
      - Brand consistency guidelines
      - Asset organization and naming conventions
      
      Return a JSON object with the visual asset specification.`,
    }

    const systemPrompt = systemPrompts[type as keyof typeof systemPrompts] || systemPrompts.layout

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    })

    const result = completion.choices[0]?.message?.content

    if (!result) {
      return NextResponse.json(
        { error: 'Failed to generate design' },
        { status: 500 }
      )
    }

    // Try to parse as JSON, fallback to text if parsing fails
    let parsedResult
    try {
      parsedResult = JSON.parse(result)
    } catch {
      parsedResult = { content: result, type, generated_at: new Date().toISOString() }
    }

    return NextResponse.json({
      success: true,
      data: parsedResult,
      type,
      prompt,
      generated_at: new Date().toISOString(),
    })

  } catch (error) {
    console.error('Design generation error:', error)
    
    if (error instanceof Error && error.message.includes('API key')) {
      return NextResponse.json(
        { error: 'OpenAI API configuration error' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'AI Design Generation API',
    endpoints: {
      POST: {
        description: 'Generate design based on prompt and type',
        parameters: {
          prompt: 'string - Description of the design to generate',
          type: 'string - Type of design (layout, color-palette, typography, imagery)',
        },
      },
    },
    supported_types: ['layout', 'color-palette', 'typography', 'imagery'],
  })
}