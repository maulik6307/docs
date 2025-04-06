import { Button } from '@/components/ui/button'
import { ExternalLinkIcon, FilePenIcon, MoreVertical, TrashIcon } from 'lucide-react'
import React from 'react'
import { Id } from '../../../convex/_generated/dataModel';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import RemoveDialog from '@/components/remove-dialog';
import RenameDialog from '@/components/rename-dialog';

interface DocumentMenuProps {
    documentId: Id<"documents">;
    title: string;
    onNewtab: (id: Id<"documents">) => void
}

const DocumentMenu = ({ documentId, title, onNewtab }: DocumentMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} className="rounded-full" size={"icon"}>
                    <MoreVertical className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <RemoveDialog documentId={documentId}>
                    <DropdownMenuItem onClick={(e) => e.stopPropagation()} onSelect={(e) => e.preventDefault()} className='cursor-pointer'>
                        <TrashIcon className='size-4 mr-2' />
                        Remove
                    </DropdownMenuItem>
                </RemoveDialog>
                <RenameDialog documentId={documentId} initialTitle={title}>
                    <DropdownMenuItem onClick={(e) => e.stopPropagation()} onSelect={(e) => e.preventDefault()} className='cursor-pointer'>
                        <FilePenIcon className='size-4 mr-2' />
                        Rename
                    </DropdownMenuItem>
                </RenameDialog>
                <DropdownMenuItem className='cursor-pointer' onClick={() => onNewtab(documentId)}>
                    <ExternalLinkIcon className='size-4 mr-2' />
                    Open in new tab
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DocumentMenu