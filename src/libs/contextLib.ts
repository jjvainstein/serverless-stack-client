import { useContext, createContext } from "react";

export const AppContext: any = createContext(null);
export function useAppContext(): any {
  return useContext(AppContext);
}
