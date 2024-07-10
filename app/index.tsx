import { StyleSheet, TextInput , Text, TouchableOpacity, View} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
      <ThemedView style={styles.titleContainer}> 
        <ThemedText type="title">Login</ThemedText>

       <View style={styles.inputContainer}>
         <Text style={styles.label}>E-mail</Text>
         <TextInput style={styles.formInputs} />
       </View>

       <View style={styles.inputContainer}>
         <Text style={styles.label}>Senha</Text>
         <TextInput style={styles.formInputs} />
       </View>

        <TouchableOpacity style={styles.button}>
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
  }
});
