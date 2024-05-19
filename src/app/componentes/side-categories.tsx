'use client'

//react
import Link from 'next/link'
import React from 'react'

//context
import useAppContextFirestore from '../contexts/firestore-storys'

//pages

interface Posts {
    category: string
    id: string
}
const Side_Categories = () => {

    const { firestoreStory } = useAppContextFirestore()

    return (
        <>
            <div className={`flex items-start justify-center flex-col gap-4`}>
                {
                    firestoreStory.length < 1
                        ?
                        <>
                            <div className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] py-2 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200 w-full flex items-center justify-center'><p className="loader2"></p></div>
                            <div className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] py-2 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200 w-full flex items-center justify-center'><p className="loader2"></p></div>
                            <div className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] py-2 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200 w-full flex items-center justify-center'><p className="loader2"></p></div>
                            <div className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] py-2 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200 w-full flex items-center justify-center'><p className="loader2"></p></div>
                        </>
                        :
                        <>

                            <Link href={`/`} className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] p-1 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200 w-full text-center'>Início</Link>
                            <Link href={`/story-tag/Confissões`} className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] p-1 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] w-full duration-200 text-center' >Confissões</Link>
                            <Link href={`https://meu-website-igor.vercel.app/`} target='_blank' className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] p-1 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200 w-full text-center'>Meu site</Link>
                            <Link href={`https://www.freespaace.com/`} target='_blank' className='border-[var(--cinza)] bg-[#ECECEC] border-[1px] p-1 px-6 rounded-2xl text-[var(--verde)] text-sm hover:scale-[1.01] duration-200 w-full text-center'>Inspiração</Link>
                        </>
                }
            </div>
        </>
    )
}

export default Side_Categories