'use client'

//react
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

//context

//interface

//pages
import { Categorys } from '../categorys/categorys';

interface Array {
    category: string
    id: number
}

const Tags_Header = () => {

    const [active, setActive] = useState<string>('')

    useEffect(() => {
        setActive(decodeURIComponent(window.location.pathname));
    }, [active]);

    return (
        <>
            {
                Categorys.map((categorys: Array) => (
                    <div key={categorys.id} >
                        <Link href={`/story-tag/${categorys.category}`} className={`font-medium ${active == `/story-tag/${categorys.category}` && 'text-[var(--verde)] font-extrabold'}`} >{categorys.category}</Link>
                    </div>
                ))
            }
        </>
    )
}

export default Tags_Header


