import create from "zustand";
import produce from "immer";

import { devtools, combine } from "zustand/middleware";

interface AppState {
  theme: boolean;
}

const initialState: AppState = {
  theme: true
};

export const useAppState = create(
  devtools(
    combine(initialState, (set, get) => ({
      setTheme: (theme: boolean) =>
        set(
          produce((state: AppState) => {
            state.theme = theme;
          })
        )
    }))
  )
);
