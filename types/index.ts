export interface Magazine {
  id: string
  title: string
  description: string
  publicationDate: string
  coverImage: string
  pdfUrl: string
  issue: string
  year: number
}

export interface Book {
  id: string
  title: string
  author?: string
  category: string
  description: string
  coverImage: string
  pdfUrl: string
  tags: string[]
}

export interface Quote {
  id: string
  text: string
  author: string
  category?: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: React.ComponentType
  children?: NavigationItem[]
}