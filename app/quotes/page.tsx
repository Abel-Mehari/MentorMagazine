"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Shuffle, Heart, Share2, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { quotes } from '@/data/quotes'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6 }
}

const slideIn = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.5, ease: "easeInOut" }
}

export default function QuotesPage() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [favorites, setFavorites] = useState<string[]>([])
  const [copied, setCopied] = useState(false)

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentQuote((prev) => prev === 0 ? quotes.length - 1 : prev - 1)
  }

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(randomIndex)
  }

  const toggleFavorite = (quoteId: string) => {
    setFavorites(prev => 
      prev.includes(quoteId) 
        ? prev.filter(id => id !== quoteId)
        : [...prev, quoteId]
    )
  }

  const copyQuote = async () => {
    const quote = quotes[currentQuote]
    const text = `"${quote.text}" - ${quote.author}`
    
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy quote:', err)
    }
  }

  const shareQuote = async () => {
    const quote = quotes[currentQuote]
    const text = `"${quote.text}" - ${quote.author}`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Inspirational Quote',
          text: text,
          url: window.location.href
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      copyQuote()
    }
  }

  // Auto-advance quotes every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextQuote()
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const currentQuoteData = quotes[currentQuote]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="container max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Quote className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Daily Inspiration
            </h1>
            <p className="text-xl text-gray-300">
              Discover wisdom and motivation from great minds
            </p>
          </motion.div>

          {/* Quote Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              variants={slideIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center mb-12"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8 md:p-12">
                  <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 leading-relaxed">
                    "{currentQuoteData.text}"
                  </blockquote>
                  <cite className="text-xl md:text-2xl text-yellow-300 font-medium">
                    — {currentQuoteData.author}
                  </cite>
                  {currentQuoteData.category && (
                    <div className="mt-4">
                      <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                        {currentQuoteData.category}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center space-y-6"
          >
            {/* Navigation Controls */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={prevQuote}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={randomQuote}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Shuffle className="w-5 h-5 mr-2" />
                Random
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={nextQuote}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Action Controls */}
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleFavorite(currentQuoteData.id)}
                className="text-white hover:bg-white/10"
              >
                <Heart 
                  className={`w-4 h-4 mr-2 ${
                    favorites.includes(currentQuoteData.id) ? 'fill-red-500 text-red-500' : ''
                  }`} 
                />
                {favorites.includes(currentQuoteData.id) ? 'Favorited' : 'Favorite'}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={copyQuote}
                className="text-white hover:bg-white/10"
              >
                <Copy className="w-4 h-4 mr-2" />
                {copied ? 'Copied!' : 'Copy'}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={shareQuote}
                className="text-white hover:bg-white/10"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center space-x-2">
              <span className="text-white/70 text-sm">
                {currentQuote + 1} of {quotes.length}
              </span>
              <div className="w-32 h-1 bg-white/20 rounded-full">
                <div 
                  className="h-full bg-yellow-300 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuote + 1) / quotes.length) * 100}%` }}
                />
              </div>
            </div>
          </motion.div>

          {/* Quote Grid (optional) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">Explore More Quotes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quotes.slice(0, 6).map((quote, index) => (
                <Card
                  key={quote.id}
                  className={`bg-white/5 backdrop-blur-sm border-white/10 cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                    index === currentQuote ? 'ring-2 ring-yellow-300' : ''
                  }`}
                  onClick={() => setCurrentQuote(index)}
                >
                  <CardContent className="p-4">
                    <p className="text-white text-sm mb-2 line-clamp-3">"{quote.text}"</p>
                    <p className="text-yellow-300 text-xs">— {quote.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}