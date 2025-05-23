"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { templates } from '@/constants/templates'
import { cn } from '@/lib/utils'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { api } from '../../../convex/_generated/api'
import { toast } from 'sonner'


const TemplateGallery = () => {
    const [isCreating, setIsCreating] = useState(false)
    const router = useRouter()
    const create = useMutation(api.documents.create)

    const onTemplateClick = (title: string, initialContent: string) => {
        setIsCreating(true)
        create({ title, initialContent })
            .catch((err) => {
                toast.error(err.message)
                setIsCreating(false)
            })
            .then((documentId) => {
                toast.success("Document created successfully")
                setIsCreating(false)
                router.push(`/documents/${documentId}`)
            })
            .finally(() => {
                setIsCreating(false)
            })
    }
    return (
        <div className='bg-[#F1F3F4]'>
            <div className='max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4'>
                <h3 className='font-medium'>Start a new document</h3>
                <Carousel>
                    <CarouselContent className='-ml-4'>
                        {
                            templates.map((template) => (
                                <CarouselItem key={template.id} className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%] pl-4'>
                                    <div className={cn("aspect-[3/4] flex flex-col gap-y-2.5", isCreating && "pointer-events-none opacity-50")}>
                                        <button disabled={isCreating} onClick={() => onTemplateClick(template.label, template.initialContent)} style={{ backgroundImage: `url(${template.imageUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className='w-full h-full hover:border-blue-500 rounded-sm border hover:bg-blue-50 transition flex flex-col justify-center items-center gap-y-4 bg-white'>
                                        </button>
                                        <p className='text-sm font-medium truncate'>
                                            {template.label}
                                        </p>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                </Carousel>
            </div>
        </div>
    )
}

export default TemplateGallery