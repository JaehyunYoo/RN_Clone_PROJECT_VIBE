import React from 'react';
import { Text, View } from 'react-native';

function HomeDetail({ route }) {
  const { id } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Text>홈 상세</Text>
      <Text>{id}</Text>
    </View>
  );
}

export default HomeDetail;
