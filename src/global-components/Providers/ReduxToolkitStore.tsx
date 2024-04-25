"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import {
  makeStore,
  AppStore,
  globalStore,
  updateGlobalStore,
} from "@/lib/redux-toolkit/store";

/**
 * @Desc: Redux-toolkit Provider Wrapper
 */
export default function ReduxToolkitStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(globalStore);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    if (!globalStore) {
      storeRef.current = makeStore();
      updateGlobalStore(storeRef.current);
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
