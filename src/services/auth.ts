import axios from 'axios';
import Cookies from 'js-cookie';
import { SignupData, LoginData, AuthResponse } from '../types';

const API_URL = 'https://api2.flipit.com/api';

export const auth = {
  async signup(data: SignupData) {
    try {
      await axios.post(`${API_URL}/authenticate`, {
        ...data,
        langKey: 'en'
      });
      
      // Auto-login after successful signup
      return await this.login({
        username: data.email,
        password: data.password
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        throw new Error('This email is already registered. Please log in instead.');
      }
      throw error;
    }
  },

  async login(data: LoginData) {
    const response = await axios.post<AuthResponse>(`${API_URL}/authenticate`, data);
    const { id_token } = response.data;
    
    // Set authentication cookie
    Cookies.set('flipit_token', id_token, {
      expires: 365, // 1 year
      domain: 'flipit.com',
      secure: true,
      sameSite: 'strict'
    });

    return response.data;
  },

  logout() {
    Cookies.remove('flipit_token', {
      domain: 'flipit.com'
    });
  },

  isAuthenticated() {
    return !!Cookies.get('flipit_token');
  }
};