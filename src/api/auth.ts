import { getAsyncStorageItem, getSecureItemValue, storeAsyncData, storeSecureItem, } from '../storage';
import { createTokenProvider } from './tokenProvider';

//Types
import { UserType } from '../types'

export const createUserAccount = async (userData: UserType) => {
  try {
    const { setToken } = createTokenProvider();

    setToken("userTOKEN")

    //ENCRYPT PASSWORD
    //const token = await storeSecureItem('token')
    //const userToken = await getSecureItemValue('token')
    //Create user token

    return userData
  } catch (e) {
    console.log(e);
  }
};