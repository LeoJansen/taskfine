import { create } from 'zustand';

type ProModalStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useCardModal = create<ProModalStore>(set => ({
    id: undefined,
    isOpen: false,
    onOpen: (id: string) => set({ isOpen: true, id }),
    onClose: () => set({ isOpen: false, id: undefined })
}))