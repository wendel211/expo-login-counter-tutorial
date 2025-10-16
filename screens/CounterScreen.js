import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Interativo</Text>
      <Text style={styles.count}>{count}</Text>

      <Button title="Somar +1" onPress={() => setCount(count + 1)} />
      <Button title="Zerar" onPress={() => setCount(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
  count: { fontSize: 40, marginBottom: 20 },
});
