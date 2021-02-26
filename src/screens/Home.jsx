import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{ flex: 9 }}>
          <Text style={{ color: '#fff', fontSize: 30,fontWeight:'bold' }}># 내돈내들 VIBE</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Image
            source={{ uri: 'https://fakeimg.pl/200x200/?text=U&font=lobster' }}
            style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    padding: 20,
  },
});
