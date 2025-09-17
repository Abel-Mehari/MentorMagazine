"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { BookOpen, FileText } from 'lucide-react'

interface CoverImageProps {
  src: string
  alt: string
  title: string
  type: 'magazine' | 'book'
  className?: string
  width?: number
  height?: number
}

export function CoverImage({ 
  src, 
  alt, 
  title, 
  type, 
  className = "", 
  width = 200, 
  height = 280 
}: CoverImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const Icon = type === 'magazine' ? FileText : BookOpen

  // If image failed to load, show placeholder
  if (imageError) {
    return (
      <div 
        className={`bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white relative overflow-hidden rounded-lg ${className}`}
        style={{ width: width, height: height }}
      >
        <Icon className="w-12 h-12 mb-3 opacity-80" />
        <h3 className="text-xs font-medium text-center leading-tight px-2 max-w-full">
          {title}
        </h3>
        <div className="absolute top-2 right-2">
          <span className="text-xs opacity-60 uppercase">
            {type}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ width: width, height: height }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover rounded-lg"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageError(true)
          setIsLoading(false)
        }}
        priority={false}
      />
    </div>
  )
}