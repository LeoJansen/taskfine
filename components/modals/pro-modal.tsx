"use client"

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog,  DialogContent, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { } from "@radix-ui/react-dialog";
import Image from "next/image";

export const ProModal = () => {
    const proModal = useProModal();

    return (
        <Dialog
        open={proModal.isOpen}
        onOpenChange={proModal.onClose}
        >
            <DialogContent className="max-w-md p-0 overflow-hidden">
                <div className="aspect-video relative flex items-center justify-center">
                    <Image
                    src="/hero.svg"
                    alt="Hero"
                    className="object-cover bottom-0"
                    fill
                    />
                </div>
                <div className="text-neutral-700 mx-auto space-y-6 p-6">
                    <h2 className="font-semibold text-xl">
                        Upgrade to Taskfine Pro Today
                    </h2>
                    <p className="text-xs font-semibold text-neutral-600">
                        Explore the best of Taskfine
                    </p>

                </div>

            </DialogContent>

        </Dialog>
    )
}
