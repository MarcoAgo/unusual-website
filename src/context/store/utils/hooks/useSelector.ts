import { useGlobalStore } from "@/context/store";

const useStoreSelector = (selector: (state: any) => any) => {
  const store = useGlobalStore()

  return selector(store.store)
}

export default useStoreSelector