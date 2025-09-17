"use client"

import React, { useState } from 'react'
import { ZoomIn, ZoomOut, Download, AlertCircle, RefreshCw, ExternalLink } from 'lucide-react'
import { Button } from '../ui/button'

interface PDFViewerProps {
  pdfUrl: string
  title: string
  onLoadStart?: () => void
  onLoadComplete?: () => void
}

export function PDFViewer({ pdfUrl, title, onLoadStart, onLoadComplete }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // URL encode the PDF path properly
  const encodedPdfUrl = encodeURI(pdfUrl)

  const handleIframeLoad = () => {
    console.log('PDF loaded successfully')
    setIsLoading(false)
    setError(null)
    onLoadComplete?.()
  }

  const handleIframeError = () => {
    console.error('PDF failed to load')
    setIsLoading(false)
    setError('Failed to load PDF document')
  }

  const handleRetry = () => {
    setError(null)
    setIsLoading(true)
    
    // Force reload iframe
    const iframe = document.getElementById('pdf-iframe') as HTMLIFrameElement
    if (iframe) {
      iframe.src = encodedPdfUrl + '#toolbar=1&navpanes=1&scrollbar=1&view=FitH'
    }
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Failed to Load PDF</h3>
        <p className="text-gray-600 mb-4">{error}</p>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-left">
          <p className="text-sm text-gray-700 mb-2"><strong>PDF Path:</strong> {pdfUrl}</p>
          <p className="text-sm text-gray-700"><strong>Encoded Path:</strong> {encodedPdfUrl}</p>
        </div>
        
        <div className="flex gap-3 justify-center">
          <Button onClick={handleRetry} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button asChild>
            <a href={encodedPdfUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in New Tab
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* PDF Controls */}
      <div className="border-b bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">PDF Viewer</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <a href={encodedPdfUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in New Tab
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={encodedPdfUrl} download>
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="relative" style={{ height: '80vh' }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading PDF...</p>
            </div>
          </div>
        )}
        
        <iframe
          id="pdf-iframe"
          src={`${encodedPdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
          className="w-full h-full border-0"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          title={title}
          allow="fullscreen"
        />
      </div>
    </div>
  )
}