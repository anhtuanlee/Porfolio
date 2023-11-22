import { StateCreator } from 'zustand';
export const createIdCurorHoverSlice: StateCreator<
    TIdCursorHover,
    [],
    [],
    TIdCursorHover
> = (set: any) => ({
    idCursorHover: null,
    setIdCursorHover: (newId: number | null | string) =>
        set({ idCursorHover: newId }),
});
