import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

function CarouselSlide({ listItem }) {
  const carouselRef = useRef(null);

  const SCREEN_WIDTH = Dimensions.get('window').width;

  const CAROUSEL_VERTICAL_OUTPUT = 36;

  const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH - CAROUSEL_VERTICAL_OUTPUT;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.trend}</Text>
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            marginTop: 18,
            fontWeight: 'bold',
          }}
        >
          {item.title}
        </Text>
        <Text style={{color:'#5F5F5F',fontSize:16,marginTop:5}}>{item.subTitle}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Carousel
        layout='default'
        ref={carouselRef}
        data={listItem}
        sliderWidth={SCREEN_WIDTH}
        sliderHeight={screenWidth}
        renderItem={renderItem}
        itemWidth={CAROUSEL_ITEM_WIDTH}
        useScrollView
        activeSlideAlignment='start'
        inactiveSlideScale={1}
      />
    </View>
  );
}

export default CarouselSlide;

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 200,
  },

  image: {
    width: screenWidth - 60,
    height: screenWidth - 200,
    resizeMode: 'cover',
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    color: '#CF3152',
  },
});
