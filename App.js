import React from 'react';
import { StyleSheet, View } from 'react-native';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <View style={styles.container}>
      <Gallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
