import AsyncStorage from "@react-native-async-storage/async-storage"
import { StateStorage } from "zustand/middleware"

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export async function loadString(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key)
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export async function load(key: string): Promise<unknown | null> {
  try {
    const almostThere = await AsyncStorage.getItem(key)
    return JSON.parse(almostThere ?? "")
  } catch {
    return null
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function save(key: string, value: unknown): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function remove(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key)
  } catch { }
}

/**
 * Burn it all to the ground.
 */
export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear()
  } catch { }
}

/**
 * Custom storage object to zustand
 * @property getItem - A function to retrieve an item from storage.
 * @returns string
 * @property setItem - A function to save an item to storage.
 * @returns void
 * @property removeItem - A function to remove an item from storage.
 * @returns void
 */
export const customStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await loadString(name)) || null
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await saveString(name, value)
  },
  removeItem: async (name: string): Promise<void> => {
    await remove(name)
  },
}
