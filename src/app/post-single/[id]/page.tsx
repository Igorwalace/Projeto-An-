'use client'

//intarface
import { Story } from '@/app/componentes/storys'

//context
import useAppContextFirestore from '@/app/contexts/firestore-storys'

// pages
import Story_Side_Related from '@/app/componentes/storys-side-related'
import Header from '@/app/pages/header'
import Story_Side_Category from '@/app/componentes/story-side-category'

//react
import React from 'react'
import Link from 'next/link'

//icons
import { Clock12, MessageSquareWarning, Share2, ThumbsDown, ThumbsUp } from 'lucide-react'

interface PostsSingleProps {
  params: {
    id: string
  }
}

const Posts_Single = ({ params: { id } }: PostsSingleProps) => {

  const { firestoreStory } = useAppContextFirestore()

  return (
    <>
      <main>
        <div className='md:px-24 md:py-5 px-10 py-3 bg-white' ><Header buttonBack={true} /></div>

        <main className='md:px-24 md:py-5 px-10 py-3 mt-7' >
          {
            firestoreStory
              .filter((post: Story) => post.id === id)
              .map((post: Story) => (
                <main key={post.id} className='md:flex items-start justify-between' >
                  <div className="md:w-[70%] w-full">
                    <div>
                      <h1 className='md:text-4xl text-2xl font-extrabold' >{post.title}</h1>
                    </div>

                    <div className='md:text-sm text-xs flex items-center justify-start gap-3 my-5' >
                      <div className='flex items-center gap-2' >
                        <p className='w-7 h-7 bg-blue-900 rounded-full' ></p>
                        <h1 className='font-bold' >{post.name}</h1>
                      </div>
                      <h1 className='text-[var(--cinza)] flex items-center gap-1' ><Clock12 size={20} />{post.date}</h1>

                    </div>

                    <div className='flex items-center justify-between gap-3' >
                      <div className='flex items-center justify-center gap-3' >
                        <Link href='/' className='font-thin text-[var(--cinza)] md:text-sm text-xs bg-[#ffddaa] p-2 rounded-xl border-[#c3a77a] border-[1px]' >{post.category}</Link>
                        <div className='flex items-center gap-2' >
                          <button><ThumbsUp /></button>
                          <button><ThumbsDown /></button>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button><Share2 /></button>
                        <button><MessageSquareWarning /></button>
                      </div>
                    </div>

                    <div className='md:my-14 my-5' >
                      <p className='md:text-[15px] text-sm text-[var(--cinza)] font-thin first-letter:capitalize'>{post.description}</p>
                    </div>

                  </div>

                  <div className='md:w-[25%] w-full' >
                    <Story_Side_Related post={post} />
                    <Story_Side_Category post={post} />
                  </div>

                </main>
              ))
          }
        </main>

      </main>
    </>
  )
}

export default Posts_Single