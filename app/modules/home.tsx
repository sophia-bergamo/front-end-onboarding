import { StyleSheet, TextInput , Text, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { validateEmail } from '../validations/email-validation';
import { validatePassword } from '../validations/password-validation';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleSubmit = () => {
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);
  };

  return (
      <ThemedView style={styles.titleContainer}> 
        <ThemedText type="title">Login</ThemedText>

       <View style={styles.inputContainer}>
         <Text style={styles.label} >E-mail</Text>
         <TextInput value={email} onChangeText={setEmail} style={styles.formInputs} />
         {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
       </View>

       <View style={styles.inputContainer}>
         <Text style={styles.label}>Senha</Text>
         <TextInput value={password} onChangeText={setPassword} style={styles.formInputs} />
         {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
       </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
         <Text style={styles.textButton}>Entrar</Text>
       </TouchableOpacity>

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
    borderColor: '#A9A9A9'
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
    alignItems: 'center'
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
});
