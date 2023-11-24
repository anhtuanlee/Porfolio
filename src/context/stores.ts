import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createIdCurorHoverSlice } from './slice/idMenuHoverSlice';
import { createOpenMenuSlice } from './slice/openMenuSlice';
import { createImgHoverSlice } from './slice/imgHoverSlice';

export const useStore = create<TIdCursorHover & TMenuNav & TImgHoverStore>()(
    devtools((...a) => ({
        ...createIdCurorHoverSlice(...a),
        ...createOpenMenuSlice(...a),
        ...createImgHoverSlice(...a),
    })),
);
