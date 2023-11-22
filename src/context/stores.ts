import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createIdCurorHoverSlice } from './slice/idMenuHoverSlice';
import { createOpenMenuSlice } from './slice/openMenuSlice';

export const useStore = create<TIdCursorHover & TMenuNav>()(
    devtools((...a) => ({
        ...createIdCurorHoverSlice(...a),
        ...createOpenMenuSlice(...a),
    })),
);
