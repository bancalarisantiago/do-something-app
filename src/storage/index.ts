import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function storeSecureItem(key: string, value: string) {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (e) {
    console.log(e)
  }

}

export async function getSecureItemValue(key: string) {
  let data = await SecureStore.getItemAsync(key);
  if (data) {
    return data
  } else {
    console.log('No values stored under that key.');
  }
}

export async function removeSecureItem(key: string) {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log('secure item remove from store')
  } catch (e) {
    console.log('No values stored under that key.');
  }
}

export async function storeAsyncData(key: string, value: string | never[]) {
  try {
    const valueToJSON = JSON.stringify(value)
    await AsyncStorage.setItem(key, valueToJSON)
    return valueToJSON
  } catch (e) {
    console.log(e)
  }
}

export async function getAsyncStorageItem(key: string) {
  try {
    const data = await AsyncStorage.getItem(key)
    if (data) {
      const jsonToObject = JSON.parse(data)
      return jsonToObject
    }
  } catch (e) {
    console.log(e)
  }
}
export async function removeAllAsyncData() {
  try {
    await AsyncStorage.clear()
    console.log('Clear all async data: success')
  } catch (e) {
    console.log(e)
  }


}

export async function removeStoreData(key: string) {
  try {
    const item = await AsyncStorage.removeItem(key)
    console.log("succes clear data")
    return item
  } catch (e) {
    console.log(e)
  }
}