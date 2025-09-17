"use client"

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Filter, Calendar, Library, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { magazines } from '@/data/magazines'

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

export default function MagazinesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState<string>('all')

  const years = useMemo(() => {
    const yearSet = new Set(magazines.map(mag => mag.year.toString()))
    return Array.from(yearSet).sort((a, b) => parseInt(b) - parseInt(a))
  }, [])

  const filteredMagazines = useMemo(() => {
    return magazines.filter(magazine => {
      const matchesSearch = magazine.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          magazine.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesYear = selectedYear === 'all' || magazine.year.toString() === selectedYear
      return matchesSearch && matchesYear
    })
  }, [searchQuery, selectedYear])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <Library className="w-16 h-16 text-white mx-auto mb-4" />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
              Magazine Collection
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore our comprehensive collection of Mentor Magazine issues spanning from 2016 to 2018
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search magazines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div className="text-sm text-gray-500">
                {filteredMagazines.length} of {magazines.length} magazines
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazines Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredMagazines.map((magazine) => (
              <motion.div key={magazine.id} variants={fadeInUp}>
                <MagazineCard magazine={magazine} />
              </motion.div>
            ))}
          </motion.div>

          {filteredMagazines.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Library className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No magazines found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

function MagazineCard({ magazine }: { magazine: any }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1">
      <div className="aspect-[3/4] relative bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <Library className="w-20 h-20 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
            {magazine.year}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-semibold text-sm leading-tight">{magazine.title}</h3>
          <p className="text-white/80 text-xs mt-1">{magazine.issue} {magazine.year}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{magazine.description}</p>
        <Button className="w-full group-hover:bg-blue-600 transition-colors" asChild>
          <Link href={`/magazines/${magazine.id}`}>
            Read Magazine
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}