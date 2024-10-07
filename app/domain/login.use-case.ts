import { LOGIN_MUTATION } from '../mutation/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

export const loginMutation = () => {
  const [login, { loading }] = useMutation(LOGIN_MUTATION);
  const [loginSuccess, setLoginSuccess] = useState('');
  const [loginError, setLoginError] = useState('');

  const executeLogin = async (input: { email: string; password: string }) => {
    const { email, password } = input;

    setLoginError('');
    setLoginSuccess('');

    login({
      variables: {
        data: {
          email: email,
          password: password,
        },
      },
      onCompleted: (data) => {
        const token = data.login.token;
        AsyncStorage.setItem('token', token)
          .then(() => {
            setLoginSuccess('Login realizado com sucesso!');
          })
          .catch((error) => {
            setLoginError(`Erro ao salvar token: ${error.message}`);
          });
      },
      onError: (error) => {
        setLoginError(error.message);
      },
    });
  };

  return { executeLogin, loading, loginSuccess, loginError };
};
