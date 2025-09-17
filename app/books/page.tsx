"use client"

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, BookOpen, ArrowRight, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { books } from '@/data/books'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = useMemo(() => {
    const categorySet = new Set(books.map(book => book.category))
    return Array.from(categorySet).sort()
  }, [])

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <BookOpen className="w-16 h-16 text-white mx-auto mb-4" />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
              Educational Library
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-green-100 max-w-2xl mx-auto">
              Discover 15 carefully curated books covering self-improvement, technical skills, and personal development
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search books, authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
              >
                All Categories
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="text-sm text-gray-500">
              {filteredBooks.length} of {books.length} books
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredBooks.map((book) => (
              <motion.div key={book.id} variants={fadeInUp}>
                <BookCard book={book} />
              </motion.div>
            ))}
          </motion.div>

          {filteredBooks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No books found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

function BookCard({ book }: { book: any }) {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Self Improvement': 'from-purple-100 to-pink-100',
      'Technical Skills': 'from-blue-100 to-cyan-100',
      'Language Learning': 'from-green-100 to-emerald-100',
      'Business & Success': 'from-yellow-100 to-orange-100',
      'Philosophy': 'from-indigo-100 to-purple-100',
      'Psychology': 'from-red-100 to-pink-100'
    }
    return colors[category as keyof typeof colors] || 'from-gray-100 to-gray-200'
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1">
      <div className={`aspect-[3/4] relative bg-gradient-to-br ${getCategoryColor(book.category)}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-20 h-20 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
            {book.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2">{book.title}</h3>
          {book.author && <p className="text-white/80 text-xs mt-1">{book.author}</p>}
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{book.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {book.tags.slice(0, 3).map(tag => (
            <span key={tag} className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        <Button className="w-full group-hover:bg-green-600 transition-colors" asChild>
          <Link href={`/books/${book.id}`}>
            Read Book
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}