import { StoreApi, create, useStore } from 'zustand'
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { customStorage } from '@/lib/storage';

type StoreCounter = {
    bears: number
    increasePopulation: () => void
    decreasePopulation: () => void
    removeAllBears: () => void
    getBears: () => number
}

export const useCounter = create<StoreCounter>()(
    persist((set, get) => ({
        bears: 0,
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
        removeAllBears: () => set({ bears: 0 }),
        getBears: () => get().bears
    }),
        {
            name: 'bear-storage',
            // storage: createJSONStorage(() => AsyncStorage),
            storage: createJSONStorage(() => customStorage),
        }
    ),
)

const createBoundedUseStore = ((store) => (selector) => useStore(store)) as <
    S extends StoreApi<unknown>,
>(
    store: S,
) => {
    (): ExtractState<S>
    <T>(selector: (state: ExtractState<S>) => T): T
}

type ExtractState<S> = S extends { getState: () => infer X } ? X : never

export const useCounterStore = createBoundedUseStore(useCounter)



