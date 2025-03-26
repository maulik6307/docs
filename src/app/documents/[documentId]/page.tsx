import React from 'react'
import Editor from './editor'

interface pageProps {
    params: Promise<{ documentId: string }>
}

const page = async ({ params }: pageProps) => {
    const { documentId } = await params
    return (
        <div className='min-h-screen bg-[#FAFBFD]'>
            <Editor />
        </div>
    )
}

export default page