import { create } from "zustand";

export const useSideBarToggle = create(set => ({
    toggleCollapse: false,
    invokeToggleCollapse: () => set(state => ({ toggleCollapse: !state.toggleCollapse }))
}));
