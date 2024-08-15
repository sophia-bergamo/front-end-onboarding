export const validateEmail = (email: string) => {
    if (!email) {
      return 'O campo de e-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Formato de e-mail inválido';
    } else {
      return '';
    }
};