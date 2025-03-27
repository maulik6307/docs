"use client"
import { DropdownMenu, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useEditorStore } from '@/store/use-editor-store';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { BoldIcon, ChevronDownIcon, ItalicIcon, ListTodoIcon, LucideIcon, MessageSquarePlusIcon, PrinterIcon, Redo2Icon, RemoveFormattingIcon, SpellCheckIcon, UnderlineIcon, Undo2Icon } from 'lucide-react';
import React from 'react'
import { type Level } from "@tiptap/extension-heading"

const HeadingLevelButton = () => {
    const { editor } = useEditorStore()
    const headings = [
        {
            label: "Normal text",
            value: 0,
            fontSize: "16px",
        },
        {
            label: "Heading 1",
            value: 1,
            fontSize: "32px",
        },
        {
            label: "Heading 2",
            value: 2,
            fontSize: "24px",
        },
        {
            label: "Heading 3",
            value: 3,
            fontSize: "20px",
        },
        {
            label: "Heading 4",
            value: 4,
            fontSize: "18px",
        },
        {
            label: "Heading 5",
            value: 5,
            fontSize: "16px",
        },
        {
            label: "Heading 6",
            value: 6,
            fontSize: "14px",
        },
    ]

    const getCurrentHeading = () => {
        for (let level = 1; level <= 5; level++) {
            if (editor?.isActive("heading", { level })) {
                return `heading-${level}`
            }
        }
        return "Normal text"
    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={cn("h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm")}>
                    <span className='truncate'>
                        {getCurrentHeading()}
                    </span>
                    <ChevronDownIcon className='ml-2 size-4 shrink-0' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-1 flex flex-col gap-y-1'>
                {headings.map(({ label, value, fontSize }) => (
                    <button
                        onClick={() => {
                            if (value === 0) {
                                editor?.chain().focus().setParagraph().run()
                            } else {
                                editor?.chain().focus().toggleHeading({ level: value as Level }).run()
                            }
                        }}
                        key={value}
                        className={cn("flex items-center  rounded-sm gap-x-2 px-2 py-1 hover:bg-neutral-200/80", (value === 0 && !editor?.isActive("heading")) || editor?.isActive("heading", { level: value }) && "bg-neutral-200/80")}
                        style={{ fontSize }}
                    >
                        {label}
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const FontFamilyButton = () => {
    const { editor } = useEditorStore()
    const fonts = [
        {
            lable: "Arial",
            value: "Arial"
        },
        {
            lable: "Times New Roman",
            value: "Times New Roman"
        },
        {
            lable: "Courier New",
            value: "Courier New"
        },
        {
            lable: "Georgia",
            value: "Georgia"
        },
        {
            lable: "Verdana",
            value: "Verdana"
        },
        {
            lable: "Trebuchet MS",
            value: "Trebuchet MS"
        },
        {
            lable: "Comic Sans MS",
            value: "Comic Sans MS"
        },
        {
            lable: "Arial Black",
            value: "Arial Black"
        },
        {
            lable: "Impact",
            value: "Impact"
        },
        {
            lable: "Lucida Console",
            value: "Lucida Console"
        },
        {
            lable: "Lucida Sans Unicode",
            value: "Lucida Sans Unicode"
        },
        {
            lable: "Tahoma",
            value: "Tahoma"
        }
    ]


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={cn("h-7 w-[120px] flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm")}>
                    <span className='truncate'>
                        {editor?.getAttributes("textStyle").fontFamily || "Arial"}
                    </span>
                    <ChevronDownIcon className='ml-2 size-4 shrink-0' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-1 flex flex-col gap-y-1'>
                {fonts.map((font) => (
                    <button
                        onClick={() => editor?.chain().focus().setFontFamily(font.value).run()}
                        key={font.value}
                        className={cn("flex items-center  rounded-sm gap-x-2 px-2 py-1 hover:bg-neutral-200/80", editor?.getAttributes("textStyle").fontFamily === font.value && "bg-neutral-200/80")}
                        style={{ fontFamily: font.value }}
                    >
                        <span className='text-sm'>{font.lable}</span>
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon
}

const ToolbarButton = ({ onClick, isActive, icon: Icon }: ToolbarButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn("text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80", isActive && "bg-neutral-200/80")}
        >
            <Icon className='size-4' />
        </button>
    )
}


const Toolbar = () => {

    const { editor } = useEditorStore()

    const sections: {
        label: string
        icon: LucideIcon
        onClick: () => void
        isActive?: boolean
    }[][] = [
            [
                {
                    label: "Undo",
                    icon: Undo2Icon,
                    onClick: () => editor?.chain().focus().undo().run(),
                },
                {
                    label: "Redo",
                    icon: Redo2Icon,
                    onClick: () => editor?.chain().focus().redo().run(),
                },
                {
                    label: "Print",
                    icon: PrinterIcon,
                    onClick: () => window.print()
                },
                {
                    label: "Spell Check",
                    icon: SpellCheckIcon,
                    onClick: () => {
                        const current = editor?.view.dom.getAttribute("spellcheck");
                        editor?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false")
                    }
                }
            ],
            [
                {
                    label: "Bold",
                    icon: BoldIcon,
                    onClick: () => editor?.chain().focus().toggleBold().run(),
                    isActive: editor?.isActive('bold')
                },
                {
                    label: "Italic",
                    icon: ItalicIcon,
                    onClick: () => editor?.chain().focus().toggleItalic().run(),
                    isActive: editor?.isActive('italic')
                },
                {
                    label: "Underline",
                    icon: UnderlineIcon,
                    onClick: () => editor?.chain().focus().toggleUnderline().run(),
                    isActive: editor?.isActive('underline')
                }
            ],
            [
                {
                    label: "Comment",
                    icon: MessageSquarePlusIcon,
                    onClick: () => console.log("TODO: Comment"),
                    // isActive: false
                },
                {
                    label: "List Todo",
                    icon: ListTodoIcon,
                    onClick: () => editor?.chain().focus().toggleTaskList().run(),
                    isActive: editor?.isActive('taskList')
                },
                {
                    label: "Remove Formatting",
                    icon: RemoveFormattingIcon,
                    onClick: () => editor?.chain().focus().unsetAllMarks().run(),
                }
            ]
        ]
    return (
        <div className='bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto'>
            {
                sections[0].map((item => (
                    <ToolbarButton key={item.label} {...item} />
                )))
            }
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <FontFamilyButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <HeadingLevelButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {/* TODO: Font Size */}
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {
                sections[1].map((item => (
                    <ToolbarButton key={item.label} {...item} />
                )))
            }
            {/* TODO: Text color */}
            {/* TODO: Highlight color */}
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {/* TODO: Link */}
            {/* TODO: Image */}
            {/* TODO: Align */}
            {/* TODO: Line Hight */}
            {/* TODO: List */}
            {
                sections[2].map((item => (
                    <ToolbarButton key={item.label} {...item} />
                )))
            }
        </div>
    )
}

export default Toolbar