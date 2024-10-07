import { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { validateEmail } from '../validations/email-validation';
import { validatePassword } from '../validations/password-validation';
import { loginMutation } from '../domain/login.use-case';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { executeLogin, loading, loginSuccess, loginError } = loginMutation();

  const handleSubmit = async () => {
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    if (!emailValidationError || !passwordValidationError) {
      await executeLogin({ email, password });
    }
  };

  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Login</ThemedText>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput value={email} onChangeText={setEmail} style={styles.formInputs} />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput value={password} onChangeText={setPassword} style={styles.formInputs} />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#40E0D0" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      )}

      {loginSuccess ? <Text style={styles.loginSucces}>{loginSuccess}</Text> : null}

      {loginError ? <Text style={styles.loginError}>{loginError}</Text> : null}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginTop: 200,
    justifyContent: 'center',
  },
  formInputs: {
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#40E0D0',
    margin: 25,
    padding: 15,
    width: '80%',
    borderRadius: 15,
    alignItems: 'center',
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  label: {
    textAlign: 'left',
    margin: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  loginSucces: {
    color: 'green',
    marginTop: 10,
  },
  loginError: {
    color: 'red',
    marginTop: 10,
  },
});
