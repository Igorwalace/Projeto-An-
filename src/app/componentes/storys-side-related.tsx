'use client'

//icons
import { Book } from 'lucide-react'

//react
import React from 'react'

//context
import useAppContextFirestore from '../contexts/firestore-storys'

//interfaces
import { Story } from './storys'
import Link from 'next/link'

interface Post {
    post: any
}

const Story_Side_Related = ({ post }: Post) => {

    const { firestoreStory } = useAppContextFirestore()

    const firestoreStoryFilter = firestoreStory.filter((posts: Story) => posts.id != post.id)
    const firestoreStoryFilterEnd = firestoreStoryFilter.filter((posts: Story) => posts.category == post.category)

    return (
        <>
            {
                firestoreStoryFilterEnd.length > 0 &&
                <div className='border-[var(--cinza)] border-[1px] p-2 rounded-xl pb-4'  >
                    <div className='flex items-center justify-start gap-1 my-2' >
                        <span><Book size={15} /></span>
                        <h1 className='md:text-sm text-xs text-[var(--cinza)]'>Mesma categoria</h1>
                    </div>

                    <div>
                        {
                            firestoreStory
                                .filter((posts: Story) => posts.category === post.category)
                                .filter((posts: Story) => posts.id != post.id)
                                .slice(0, 2)
                                .map((posts: Story) => (
                                    <Link href={`/post-single/${posts.id}`} key={posts.id} className='mt-5 flex items-start justify-start flex-col hover:scale-95 duration-200' >

                                        <div className='flex items-center justify-start gap-2 flex-wrap mb-1' >
                                            <p className='w-5 h-5 bg-blue-900 rounded-full' />
                                            <p className='md:text-sm text-xs' >{posts.name}</p>
                                        </div>

                                        <p className='text-[10px] md:text-xs font-bold' >{posts.title}</p>


                                    </Link>
                                ))
                        }
                    </div>

                </div>
            }
        </>
    )
}

export default Story_Side_Related