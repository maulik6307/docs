"use client"

import React, { useState } from 'react'
import { Id } from '../../convex/_generated/dataModel'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { toast } from 'sonner';
interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
}

const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
    const remove = useMutation(api.documents.removeById)
    const [isRemoving, setIsRemoving] = useState(false)
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone. This will permanently delete your document.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='bg-red-500 hover:bg-red-600 text-white' onClick={(e) => {
                        e.stopPropagation()
                        setIsRemoving(true)
                        remove({ id: documentId })
                            .catch((err) => toast.error(err.message))
                            .then(() => {
                                toast.success("Document deleted successfully")
                            })
                            .finally(() => {
                                setIsRemoving(false)
                            })
                    }
                    }
                        disabled={isRemoving}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default RemoveDialog