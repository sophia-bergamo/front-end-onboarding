export const validatePassword = (password: string) => {
    if (!password) {
      return 'O campo de senha é obrigatório';
    } else if (password.length < 7) {
      return 'A senha deve ter no mínimo 7 caracteres';
    } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      return 'A senha deve conter pelo menos um dígito e uma letra';
    } else {
      return '';
    }
};