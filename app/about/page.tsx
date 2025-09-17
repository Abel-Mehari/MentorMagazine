"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Mail, Globe, BookOpen, Target, Heart, Award, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-800 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Users className="w-20 h-20 text-yellow-300 mx-auto mb-6" />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-white mb-6">
              Eritrean Scientific Society
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 leading-relaxed">
              Advancing knowledge, fostering innovation, and building bridges through science and education. 
              We are dedicated to promoting scientific literacy and educational excellence within the Eritrean community and beyond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                    <CardTitle className="text-3xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To empower individuals through accessible, high-quality educational resources and scientific knowledge. 
                    We strive to create a platform where learning knows no boundaries, fostering intellectual growth 
                    and scientific understanding within our community.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Promote scientific literacy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Foster innovation and creativity</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Build community connections</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                    <CardTitle className="text-3xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To become a leading force in democratizing education and scientific knowledge, creating a world 
                    where every individual has the opportunity to learn, grow, and contribute to the advancement of society 
                    through science and education.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Global educational impact</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Inclusive learning environment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Sustainable knowledge sharing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About EriSci Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Society</h2>
              <p className="text-xl text-gray-600">
                Learn more about our history, values, and commitment to education
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
                <p className="text-gray-800 leading-relaxed mb-6">
                  The Eritrean Scientific Society (EriSci) was founded with a vision to bridge the gap between 
                  scientific knowledge and community education. We believe that access to quality educational 
                  resources should be universal, and that every individual deserves the opportunity to expand 
                  their horizons through learning.
                </p>
                
                <p className="text-gray-800 leading-relaxed mb-6">
                  Our journey began with the simple idea that knowledge sharing can transform lives. Through 
                  our flagship publication, Mentor Magazine, and our comprehensive digital library, we've 
                  created a platform that serves thousands of learners worldwide.
                </p>

                <p className="text-gray-800 leading-relaxed">
                  Today, we continue to evolve and adapt to the changing needs of our community, always 
                  maintaining our core commitment to educational excellence and scientific advancement. 
                  We invite you to join us on this journey of discovery and growth.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive educational resources designed to inspire and educate
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Digital Magazines</h3>
                    <p className="text-gray-600">
                      Access our complete collection of Mentor Magazine issues, featuring 
                      educational content and inspiring stories.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <Lightbulb className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Educational Books</h3>
                    <p className="text-gray-600">
                      Explore our curated library of books covering self-improvement, 
                      technical skills, and personal development.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <Heart className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Inspirational Content</h3>
                    <p className="text-gray-600">
                      Daily doses of motivation and wisdom through our carefully 
                      selected collection of inspirational quotes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-white mb-6">
              Join Our Learning Community
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to embark on your educational journey? Explore our resources and connect with us.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/magazines">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Reading
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* External Website Integration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-6">
              Visit Our Main Website
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Learn more about our organization, ongoing projects, and how you can get involved 
              by visiting our official website.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" asChild>
                <a 
                  href="https://eri-sci-society.netlify.app/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Visit EriSci Website
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}