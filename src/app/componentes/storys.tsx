'use client'

//react
import React from 'react'

//contexts
import useAppContextFirestore from '../contexts/firestore-storys'

//pages
import Posts from './posts'
import Loading from './laoding'

export interface Story {
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
                firestoreStory.length > 1 &&
                <>
                    <div className="flex items-center justify-center flex-col">
                        <main className='w-[87%] bg-[#e1e1e1] h-[200px] rounded-xl' ></main>
                        <main className='w-[87%] bg-[#e1e1e1] h-[200px] rounded-xl my-2' ></main>
                        <main className='w-[87%] bg-[#e1e1e1] h-[200px] rounded-xl' ></main>
                    </div>
                    <Loading />
                </>
            }
            {
                firestoreStory.map((story: Story) => (
                    <>
                        <Posts story={story} key={story.id} />
                    </>
                ))
            }
            {
                firestoreStory.length > 0 &&
                <h1 className='mt-5 text-center' >Você chegou ao fim.</h1>
            }
        </>
    )
}

export default Storys