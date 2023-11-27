"use client";
import { createContext, useReducer } from "react";

export interface DrawerState {
  right: { open: boolean; component: React.ReactNode };
  left: { open: boolean; component: React.ReactNode };
}

type Actions =
  | { type: "TOGGLE_RIGHT" }
  | { type: "TOGGLE_LEFT" }
  | { type: "SET_RIGHT"; component: React.ReactNode }
  | { type: "SET_LEFT"; component: React.ReactNode };

const drawerStateInit: DrawerState = {
  right: { open: false, component: null },
  left: { open: false, component: null },
};

const reducerForDrawer = (state: DrawerState, action: Actions): DrawerState => {
  switch (action.type) {
    case "TOGGLE_RIGHT":
      return {
        ...state,
        right: { ...state.right, open: !state.right.open },
      };
    case "TOGGLE_LEFT":
      return { ...state, left: { ...state.left, open: !state.left.open } };
    case "SET_RIGHT":
      return {
        ...state,
        right: { ...state.right, component: action.component },
      };
    case "SET_LEFT":
      return { ...state, left: { ...state.left, component: action.component } };
    default:
      return state;
  }
};

export const DrawerContext = createContext<{
  state: DrawerState;
  toggleRight: () => void;
  toggleLeft: () => void;
  setRightComponent: (component: React.ReactNode) => void;
  setLeftComponent: (component: React.ReactNode) => void;
}>({
  state: drawerStateInit,
  toggleRight: () => {},
  toggleLeft: () => {},
  setRightComponent: () => {},
  setLeftComponent: () => {},
});

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducerForDrawer, drawerStateInit);

  const toggleRight = () => dispatch({ type: "TOGGLE_RIGHT" });
  const toggleLeft = () => dispatch({ type: "TOGGLE_LEFT" });
  const setRightComponent = (component: React.ReactNode) =>
    dispatch({ type: "SET_RIGHT", component });
  const setLeftComponent = (component: React.ReactNode) =>
    dispatch({ type: "SET_LEFT", component });

  return (
    <DrawerContext.Provider
      value={{
        state,
        toggleRight,
        toggleLeft,
        setRightComponent,
        setLeftComponent,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}
