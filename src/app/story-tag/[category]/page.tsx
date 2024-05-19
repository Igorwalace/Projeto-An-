'use client'
//pages
import Posts from '@/app/componentes/posts'
import Side_Category_Home from '@/app/componentes/side-category'
import Header from '@/app/pages/header'

//context
import useAppContextFirestore from '@/app/contexts/firestore-storys'

//icons
import { LibraryBig } from 'lucide-react'

//react
import React from 'react'

//intarface
import { Story } from '@/app/componentes/storys'
import Loading from '@/app/componentes/laoding'

interface TagCategory {
    params: {
        category: string
    }
}

const Story_Tag = ({ params: { category } }: TagCategory) => {

    const NewCategory = decodeURIComponent(category)
    const { firestoreStory } = useAppContextFirestore()

    const firestoreStoryEmpty = firestoreStory.filter((post: Story) => post.category === NewCategory)

    return (
        <>
            <div className='md:px-24 md:py-5 px-10 py-3 bg-white' ><Header buttonBack={true} tags={true} /></div>
            <main className='text-[#212529] md:flex items-start justify-center md:px-24 md:py-5' >

                <div className='w-full' >
                    <div className='flex items-center gap-1 md:text-xl text-lg font-bold md:mb-5 px-10 py-3 ' >
                        <span> <LibraryBig /> </span>
                        <h1 className='capitalize' >{NewCategory}</h1>
                    </div>

                    {firestoreStory.length < 1 && <Loading />}
                    {   
                        firestoreStoryEmpty.length < 1 ?
                            <div>
                                <h1 className='text-center' >Nada encontrado</h1>
                            </div>
                            :
                            firestoreStory
                                .filter((post: Story) => post.category === NewCategory)
                                .map((story: Story) => (
                                    <Posts story={story} key={story.id} />
                                ))
                    }
                </div>

                <Side_Category_Home />
            </main>
        </>
    )
}

export default Story_Tag