'use client'

//firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

//react
import { createContext, useContext, useEffect, useState } from "react"


export const AppContext = createContext<any>(undefined);

export function AppFirestore({ children }: {
    children: React.ReactNode;
}) {
    const [firestoreStory, setFirestoreStory] = useState<any[]>([])

    useEffect(() => {
        const firestoreStory = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, `posts`));
                const allPosts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setFirestoreStory(allPosts)
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        firestoreStory()
    }, [])

    return (
        <AppContext.Provider value={{ firestoreStory, }} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppContextFirestore() {
    return useContext(AppContext)
}