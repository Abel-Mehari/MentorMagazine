"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Mail, Globe, Github, Heart, ExternalLink } from 'lucide-react'

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

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Logo and Description */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mentor Magazine</h3>
                <p className="text-sm text-gray-400">Educational Resources Platform</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering minds through accessible education. Access our comprehensive library of magazines, 
              books, and inspirational content from the Eritrean Scientific Society.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://eri-sci-society.netlify.app/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="mailto:eriscisociety@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Abel-Mehari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/magazines" className="text-gray-300 hover:text-white transition-colors">
                  Magazines
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-300 hover:text-white transition-colors">
                  Educational Books
                </Link>
              </li>
              <li>
                <Link href="/quotes" className="text-gray-300 hover:text-white transition-colors">
                  Inspiration
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About EriSci
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://eri-sci-society.netlify.app/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  EriSci Website
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://abiel-mehari.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  Developer Portfolio
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <Link href="/magazines" className="text-gray-300 hover:text-white transition-colors">
                  Magazine Archive
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-300 hover:text-white transition-colors">
                  Book Library
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="flex items-center">
                © {currentYear} Mentor Magazine. Made with 
                <Heart className="w-4 h-4 text-red-500 mx-1" /> 
                by the Eritrean Scientific Society
              </p>
            </div>
            <div className="text-gray-400 text-sm">
              <p>Empowering minds through education</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}