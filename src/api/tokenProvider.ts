import { removeSecureItem, storeSecureItem } from '../storage';

export const createTokenProvider = () => {

  const setToken = async (token: string) => {
    if (token) {
      await storeSecureItem('token', token);
    }
  };

  const resetToken = async (token: null) => {
    await removeSecureItem('token');
  }

  return {
    resetToken,
    setToken,
  };
};