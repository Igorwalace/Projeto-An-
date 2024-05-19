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
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className='text-[var(--verde)]' >Calma aí!</AlertDialogTitle>
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