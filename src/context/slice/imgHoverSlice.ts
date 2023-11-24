import { StateCreator } from 'zustand';

export const createImgHoverSlice: StateCreator<
    TImgHoverStore,
    [],
    [],
    TImgHoverStore
> = (set: any) => ({
    data: { path: '', title: '' },
    isHoverImg: false,
    setIsHover: (hover: boolean) => set({ isHoverImg: hover }),
    setPathImgHover: (data: TDataHoverImg | undefined) => set({ data: data }),
});
