import { Accessor, createSignal } from "solid-js"
import { IStoreContextValues } from "../.."

export interface UserScrollData {
    offset: number
    contentHeight: number
}

export interface UserScrollSlice {
    data: Accessor<UserScrollData>,
    dispatchers: {
        userScrollDispatch: (action: UserScrollData) => void
    }
}

export const scrollDataSelector = (state: IStoreContextValues) => state.scroll.data
export const scrollDispatchersSelector = (state: IStoreContextValues) => state.scroll.dispatchers

export const userScrollDefaultStoreData: UserScrollData = {
    offset: 0,
    contentHeight: 0,
}

const [userScrollSlice, userScrollDispatch] = createSignal(userScrollDefaultStoreData)

export { userScrollSlice, userScrollDispatch }
