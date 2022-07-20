import { createStore } from "solid-js/store"

export interface UserJourneyData {
    isStarted: boolean
}

export interface UserJourneySlice {
    data: UserJourneyData,
    dispatchers: {
        userJourneyDispatch: (action: UserJourneyData) => void
    }
}

export const userJourneyDefaultStoreData: UserJourneyData = {
    isStarted: false,
}

const [userJourneySlice, userJourneyDispatch] = createStore(userJourneyDefaultStoreData)

export { userJourneySlice, userJourneyDispatch }
