//react
import React from 'react'

//shadnc
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface ModalProps {
    setIsOpenModalBreve: any
    isOpenModalBreve: boolean
}


const ModalEmBreve = ({ setIsOpenModalBreve, isOpenModalBreve }: ModalProps) => {
    return (
        <AlertDialog open={isOpenModalBreve} onOpenChange={setIsOpenModalBreve} >
            <AlertDialogContent className='rounded-xl md:w-auto max-w-[95%]' >
                <AlertDialogHeader className='text-left' >
                    <AlertDialogTitle className='text-[var(--verde)] font-bold' >Calma aí!</AlertDialogTitle>
                    <AlertDialogDescription className='max-w-[90%]' >
                        Você não pode escrever histórias ainda. Leia as que estão disponiveis.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Voltar</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default ModalEmBreve