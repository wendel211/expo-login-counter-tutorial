import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);

 
  const users = {
    admin: { password: '123', role: 'Administrador' },
    aluno: { password: 'abc123', role: 'Aluno' },
    convidado: { password: 'guest', role: 'Convidado' },
  };

  function handleLogin() {
    if (!username || !password) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos!');
      return;
    }

    if (password.length < 3) {
      Alert.alert('Aviso', 'A senha deve ter pelo menos 3 caracteres!');
      return;
    }

    if (users[username] && users[username].password === password) {
      Alert.alert(
        'Sucesso!',
        `Bem-vindo, ${users[username].role}!`,
        [{ text: 'Continuar', onPress: () => navigation.navigate('Counter') }]
      );
      setAttempts(0); /
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 3) {
        Alert.alert('Acesso bloqueado', 'Muitas tentativas incorretas! Tente novamente mais tarde.');
        setAttempts(0);
        return;
      }

      Alert.alert('Erro', `Usuário ou senha incorretos! Tentativa ${newAttempts}/3`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>

      <TextInput
        placeholder="Usuário"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleLogin} color="#006400" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f0f0' },
  title: { fontSize: 26, textAlign: 'center', marginBottom: 30, fontWeight: 'bold', color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});
