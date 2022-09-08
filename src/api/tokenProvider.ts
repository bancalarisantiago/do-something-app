import { removeSecureItem, storeSecureItem } from '../storage';

export const createTokenProvider = () => {

  const setToken = async (token: string | null) => {
    if (token) {
      await storeSecureItem('token', token);
    } else {
      await removeSecureItem('token');
    }
  };

  const resetToken = async () => {
    await removeSecureItem('token');
  }

  return {
    resetToken,
    setToken,
  };
};