import Header from '@/app/pages/header'
import React from 'react'

interface PostsSingleProps {
  params: {
    id: string
  }
}

const Posts_Single = ({ params: {id} }: PostsSingleProps) => {
  return (
    <>
      <main>
        <div className='md:px-24 md:py-5 px-10 py-3 bg-white' ><Header buttonBack={true} /></div>
      </main>
    </>
  )
}

export default Posts_Single