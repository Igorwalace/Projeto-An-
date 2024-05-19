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
            <AlertDialogContent className='rounded-xl max-w-[95%]' >
                <AlertDialogHeader className='text-left' >
                    <AlertDialogTitle className='text-[var(--verde)] font-bold' >Calma aí!</AlertDialogTitle>
                    <AlertDialogDescription>
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