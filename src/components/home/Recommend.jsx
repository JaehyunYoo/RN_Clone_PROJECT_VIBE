import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export default function MusicFlatList({ recomData, navigation }) {
  const renderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('HomeDetail', {
              id: item.id,
              img: item.thumbnail,
              title:item.albumTitle,
              description:item.description
            })
          }
        >
          <RecomWrap>
            <Carousel source={{ uri: item.thumbnail }} />
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                marginTop: 16,
              }}
            >
              {item.albumTitle}
            </Text>
            <Text style={{ color: '#ccc' }}>{item.description}</Text>
          </RecomWrap>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <RecomWrap>
      <SectionTitle>{recomData?.title}</SectionTitle>
      <FlatList
        data={recomData?.musicList}
        renderItem={renderItem}
        keyExtractor={(item, idx) => String(idx)}
        horizontal
      />
    </RecomWrap>
  );
}
const RecomWrap = styled.View`
  flex: 1;
  padding: 15px 0;
`;
const SectionTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`;
const Carousel = styled.Image`
  width: 200px;
  height: 200px;
  margin-right: 28px;
`;
