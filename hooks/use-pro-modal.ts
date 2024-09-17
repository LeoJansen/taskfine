import { create } from 'zustand';

type ProModalStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useCardModal = create<ProModalStore>(set => ({
    id: undefined,
    isOpen: false,
    onOpen: () => set({ isOpen: true,  }),
    onClose: () => set({ isOpen: false, })
}))