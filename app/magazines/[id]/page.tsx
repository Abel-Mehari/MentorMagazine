"use client"

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Download, Share2 } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { PDFViewer } from '../../../components/pdf-viewer/PDFViewer' // Use the simple viewer
import { magazines } from '../../../data/magazines'

export default function MagazineDetailPage() {
  const params = useParams()
  const router = useRouter()

  const magazine = magazines.find(mag => mag.id === params.id)

  if (!magazine) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Magazine Not Found</h1>
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
                  {magazine.title}
                </h1>
                <p className="text-sm text-gray-500">{magazine.issue} {magazine.year}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm" asChild>
                <a href={magazine.pdfUrl} download>
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
          pdfUrl={magazine.pdfUrl}
          title={magazine.title}
        />
      </div>
    </div>
  )
}