'use client'

//react
import React from 'react'
import Link from 'next/link'

//contexts
import useAppContextFirestore from '../contexts/firestore-storys'

export interface Story{
    name: string,
    id: string,
    date: string,
    title: string,
    description: string,
    category: string,
    like: number,
    deslike: number,
}   

const Storys = () => {

    const { firestoreStory } = useAppContextFirestore()

    return (
        <>
            {
                firestoreStory.map((story: Story) => (
                    <main className='bg-white md:p-4 p-8 px-10 rounded-xl md:w-[95%] w-full md:min-h-[250px] min-h-[150px]' key={story.id}>
                        <div className='md:w-3/4'>
                            <div className='md:text-sm text-xs flex items-center justify-start gap-3' >
                                <div className='flex items-center gap-2' >
                                    <p className='w-7 h-7 bg-blue-900 rounded-full' ></p>
                                    <h1 className='font-bold' >{story.name}</h1>
                                </div>
                                <h1 className='text-[var(--cinza)]' >{story.date}</h1>
                            </div>

                            <Link href={`post-single/${story.id}`} className='my-3 space-y-1 flex items-start justify-center flex-col' >
                                <h1 className='md:text-xl text-lg font-bold hover:text-[var(--verde)] duration-200' >{story.title}</h1>
                                <p className='md:text-sm text-xs max-h-[200px] overflow-hidden text-justify text-[var(--cinza)] font-thin first-letter:capitalize'>{story.description}</p>
                            </Link>

                            <div className='flex items-center justify-center' >
                                <Link href={`post-single/${story.id}`} className='text-[var(--verde)] text-center outline-none hover:scale-105 duration-200' >Ler Tudo</Link >
                            </div>

                            <div>
                                <h1 className='md:text-sm text-xs text-[var(--verde)]' >{story.category}</h1>
                            </div>

                        </div>
                    </main>
                ))
            }
        </>
    )
}

export default Storys