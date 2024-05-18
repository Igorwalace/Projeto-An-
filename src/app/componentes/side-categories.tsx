'use client'

//react
import React from 'react'

//context
import useAppContextFirestore from '../contexts/firestore-storys'

interface Posts {
    category: string
    id: string
}

const Side_Categories = () => {

    const { firestoreStory } = useAppContextFirestore()

    return (
        <>
            <div className="flex items-start justify-center flex-col gap-4">
                {
                    firestoreStory.length < 1
                        ?
                        <>
                            <button className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] p-1 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200'>Carregando</button>
                            <button className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] p-1 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200'>Carregando</button>
                            <button className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] p-1 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200'>Carregando</button>
                            <button className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] p-1 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200'>Carregando</button>
                            <button className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] p-1 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200'>Carregando</button>
                        </>
                        :
                        firestoreStory
                            .slice(0, 5)
                            .sort((a:any, b:any) => Math.random() - 0.5)
                            .map((post: Posts) => (
                                <>
                                    <button className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] p-1 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200' key={post.id} >{post.category}</button>
                                </>
                            ))
                }
            </div>
        </>
    )
}

export default Side_Categories