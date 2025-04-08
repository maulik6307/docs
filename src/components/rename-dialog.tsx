"use client"

import React, { useState } from 'react'
import { Id } from '../../convex/_generated/dataModel'
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';
interface RenameDialogProps {
    documentId: Id<"documents">;
    initialTitle: string;
    children: React.ReactNode;
}

const RenameDialog = ({ documentId, children, initialTitle }: RenameDialogProps) => {
    const update = useMutation(api.documents.updateById)
    const [isUpdating, setIsUpdating] = useState(false)

    const [title, setTitle] = useState(initialTitle)
    const [open, setOpen] = useState(false)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsUpdating(true)
        update({ id: documentId, title: title.trim() || "Untitled" })
            .catch((err) => toast.error(err.message))
            .then(() => {
                toast.success("Document renamed successfully")
                setTitle("")
                setOpen(false)
            })
            .finally(() => {
                setIsUpdating(false)
            })
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent onClick={(e) => e.stopPropagation()}>
                <form onSubmit={onSubmit}>
                    <DialogHeader>
                        <DialogTitle>
                            Rename document
                        </DialogTitle>
                        <DialogDescription>
                            Enter the new name for your document.
                        </DialogDescription>
                    </DialogHeader>
                    <div className='my-4'>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Document title'
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            type='button'
                            variant={"ghost"}
                            className='bg-white text-neutral-900 hover:bg-neutral-50'
                            onClick={(e) => {
                                e.stopPropagation()
                                setOpen(false)
                            }}
                            disabled={isUpdating}
                        >
                            Cancle
                        </Button>
                        <Button
                            type='submit'
                            variant={"default"}
                            className='bg-blue-500 hover:bg-blue-600 text-white'
                            disabled={isUpdating}
                            onClick={(e) => e.stopPropagation()}
                        >
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default RenameDialog