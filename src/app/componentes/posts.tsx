//icons
import { MessageSquareWarning, Share2 } from 'lucide-react'

//react
import Link from 'next/link'
import React from 'react'

interface PostProps {
    story: any
}

const Posts = ({ story }: PostProps) => {
    return (
        <>
            <main className={`bg-white md:p-4 p-8 pb-6 px-10 rounded-t-xl md:w-[95%] w-full md:min-h-[250px] min-h-[150px] flex items-start justify-between relative border-b-[1px] border-[var(--cinza)]`} key={story.id}>
                <div>
                    <div className='md:text-sm text-xs flex items-center justify-start gap-3' >
                        <div className='flex items-center gap-2' >
                            <p className='w-7 h-7 bg-blue-900 rounded-full' ></p>
                            <h1 className='font-bold' >{story.name}</h1>
                        </div>
                        <h1 className='text-[var(--cinza)]' >{story.date}</h1>
                    </div>

                    <Link href={`post-single/${story.id}`} className='my-3 space-y-1 flex items-start justify-center flex-col hover:scale-[.99] duration-200' >
                        <h1 className='md:text-xl text-lg font-bold hover:text-[var(--verde)] duration-200' >{story.title}</h1>
                        <p className='md:text-sm text-xs max-h-[200px] overflow-hidden text-[var(--cinza)] font-thin first-letter:capitalize'>{story.description}</p>
                    </Link>

                    <div className='flex items-center justify-center' >
                        <Link href={`post-single/${story.id}`} className='text-[var(--verde)] text-center outline-none hover:scale-105 duration-200' >Ler Tudo</Link >
                    </div>
                </div>
                <div className='absolute top-7 right-8 md:top-2 md:right-4' >
                    <div className="flex items-center justify-end gap-2">
                        <h1 className='font-thin text-[var(--cinza)] md:text-sm text-xs bg-[#ffddaa] p-2 rounded-xl border-[#c3a77a] border-[1px]' >{story.category}</h1>
                        <button><Share2 /></button>
                        <button><MessageSquareWarning /></button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Posts