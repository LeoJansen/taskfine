"use client"

import { Button } from "@/components/ui/button";
import { SheetContent, Sheet, SheetClose } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
    const pathname = usePathname();
    const [isMount, setIsMount] = useState(false);

    const onOpen = useMobileSidebar(state => state.onOpen);
    const onClose = useMobileSidebar(state => state.onClose);
    const isOpen = useMobileSidebar(state => state.isOpen);

    useEffect(() => {
        setIsMount(true)
    }, []);

    useEffect(() => {
        onClose();

    }, [pathname, onClose]);

    if (!isMount) {
        return null;
    }


    return (
        <>
            <Button
                onClick={onOpen}
                className="block md:hidden mr-2"
                variant="ghost"
                size="sm"
            >
                <Menu className="h-4 w-4" />
                <Sheet open={isOpen} onOpenChange={onClose} >
               
                    <SheetContent
                        side="left"
                        className="p-2 pt-10"
                    >
                     
                        
                        <Sidebar
                            storageKey="t-sidebar-mobile-state"

                        />
                        
                        

                    </SheetContent>
                </Sheet>
            </Button>
        </>
    )
}