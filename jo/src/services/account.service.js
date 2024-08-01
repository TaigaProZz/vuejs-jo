import { useUserStore } from '../stores/user-module.js';
import { axiosBase } from './axios.js'
import getUser from './user.service.js';

export async function login (credentials) {
  try {
    const res = await axiosBase().post('/auth/login', credentials);
    if (res.data === '2fa is not activated.') {
      throw ('2FA n\'est pas activé.');
    }
    return await getUser();
  } catch (error) {
    throw error;
  }
}

export async function verifyOtp (otp) {
  try {
    return await axiosBase().post('/auth/2fa/verify', { token: otp });
  } catch (error) {
    throw error;
  }
}

export async function register (credentials) {
  try {
    return await axiosBase().post('/user/', credentials);
  } catch (error) {
    const errMessage = error.response.data.message;
    if (errMessage === "Email already exists") throw ('Email déjà enregistré.')
    throw error;
  }
}

export async function logout () {
  const userStore = useUserStore();
  try {
    await axiosBase().post('/auth/logout');
    userStore.logoutUser();
    window.location.href = '/';
  } catch (error) {
    throw error;
  }
}
