"use client"
import React from 'react'
import Navbar from './navbar'
import TemplateGallery from './templete-gallery'
import { usePaginatedQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { FullScreenLoader } from '@/components/fullscreen-loader'
import DocumentsTable from './documents-table'

export default function page() {
  const { results, status, loadMore } = usePaginatedQuery(api.documents.get, {}, { initialNumItems: 5 })
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='fixed top-0 left-0 right-0 z-10 bg-white h-16 p-4'>
        <Navbar />
      </div>
      <div className='mt-16'>
        <TemplateGallery />
        <DocumentsTable documents={results} loadMore={loadMore} status={status} />
      </div>
    </div>
  )
}
