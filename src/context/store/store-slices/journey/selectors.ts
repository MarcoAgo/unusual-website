import { IStoreContextValues } from "../..";

export const journeyDataSelector = (state: IStoreContextValues) => state.journey.data
export const journeyDispatchersSelector = (state: IStoreContextValues) => state.journey.dispatchers