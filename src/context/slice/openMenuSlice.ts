import { StateCreator } from 'zustand';

export const createOpenMenuSlice: StateCreator<TMenuNav, [], [], TMenuNav> = (
    set: any,
) => ({
    isOpenMenuHeader: false,
    setIsOpenMenuHeader: (isOpen: boolean) => set({ isOpenMenuHeader: isOpen }),
});
