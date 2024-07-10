import { StyleSheet, TextInput , Text, TouchableOpacity} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
      <ThemedView style={styles.titleContainer}> 
        <ThemedText type="title">Bem vindo(a) Taqtile!</ThemedText>
        <TextInput style={styles.formInputs} placeholder="E-mail" />
        <TextInput style={styles.formInputs} placeholder="Senha"/>
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
    borderColor: '#708090',
    borderRadius: 10,
    width: '80%',
    padding: 15,
    borderWidth: 1,
    marginTop: 30,
    opacity: 0.7
  },
  button: {
    backgroundColor: '#FFB6C1',
    margin: 25,
    padding: 15,
    width: '80%',
    borderRadius: 15,
    alignItems: 'center'
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 15,
  }
});
