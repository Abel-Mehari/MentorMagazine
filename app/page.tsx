"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BookOpen, Library, Quote, Users, Star, Download } from 'lucide-react'
import { magazines } from '@/data/magazines'
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

export default function HomePage() {
  const featuredMagazines = magazines.slice(0, 3)
  const featuredBooks = books.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Mentor Magazine
              </h1>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Digital Library & Educational Resource Platform
                <br />
                <span className="text-lg text-yellow-300">by Eritrean Scientific Society</span>
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg" asChild>
                <Link href="/magazines">
                  <Library className="w-5 h-5 mr-2" />
                  Explore Magazines
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg" asChild>
                <Link href="/books">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse Books
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <Library className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">14 Magazine Issues</h3>
                <p className="text-gray-300">Comprehensive collection from 2016-2018</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <BookOpen className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">15 Educational Books</h3>
                <p className="text-gray-300">Self-improvement and technical guides</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <Quote className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">Inspirational Quotes</h3>
                <p className="text-gray-300">Daily motivation and wisdom</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Magazines Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              Featured Magazines
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest magazine issues filled with educational content and inspiring stories
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredMagazines.map((magazine) => (
              <motion.div key={magazine.id} variants={fadeInUp}>
                <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-[3/4] relative bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Library className="w-16 h-16 text-blue-400" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-white font-semibold text-sm">{magazine.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 text-sm">{magazine.description}</p>
                    <Button className="w-full group-hover:bg-blue-600 transition-colors" asChild>
                      <Link href={`/magazines/${magazine.id}`}>
                        Read Magazine
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <Link href="/magazines">
                View All Magazines
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              Educational Library
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover books that will transform your thinking and accelerate your personal growth
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredBooks.map((book) => (
              <motion.div key={book.id} variants={fadeInUp}>
                <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-[3/4] relative bg-gradient-to-br from-green-100 to-blue-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-green-400" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
                        {book.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-white font-semibold text-sm">{book.title}</h3>
                      {book.author && <p className="text-white/80 text-xs">{book.author}</p>}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 text-sm">{book.description}</p>
                    <Button className="w-full group-hover:bg-green-600 transition-colors" asChild>
                      <Link href={`/books/${book.id}`}>
                        Read Book
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <Link href="/books">
                View All Books
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of learners accessing quality educational content from the Eritrean Scientific Society
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4" asChild>
                <Link href="/about">
                  <Users className="w-5 h-5 mr-2" />
                  Learn About EriSci
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4" asChild>
                <Link href="/contact">
                  <Star className="w-5 h-5 mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}