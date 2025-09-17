"use client"

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Download, Share2, Tag, User } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { PDFViewer } from '../../../components/pdf-viewer/PDFViewer'
import { books } from '../../../data/books'

export default function BookDetailPage() {
  const params = useParams()
  const router = useRouter()

  const book = books.find(b => b.id === params.id)

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Book Not Found</h1>
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => router.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 truncate max-w-md">
                  {book.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  {book.author && (
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {book.author}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {book.category}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm" asChild>
                <a href={book.pdfUrl} download>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="container mx-auto px-4 py-8">
        <PDFViewer
          pdfUrl={book.pdfUrl}
          title={book.title}
        />
      </div>
    </div>
  )
}