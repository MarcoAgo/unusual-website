import { Component, createContext, JSX, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'
import { userJourneyDispatch, userJourneySlice, UserJourneySlice } from './store-slices/journey'

interface IStoreContextProviderProps {
    children: JSX.Element
}

export interface IStoreContextValues {
    journey: UserJourneySlice
}

const StoreContext = createContext()


const storeDefaultValues = {
    journey: { 
        data: userJourneySlice,
        dispatchers: { userJourneyDispatch },
    }
}

const StoreContextProvider: Component<IStoreContextProviderProps> = (props): JSX.Element =>  {
    const [globalStore, setGlobalStore] = createStore<IStoreContextValues>(storeDefaultValues)

    return (
        <StoreContext.Provider value={{ store: globalStore, setStore: setGlobalStore }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export function useGlobalStore() { return useContext(StoreContext) as any }

export default StoreContextProvider
