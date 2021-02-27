import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import CarouselSlide from '../components/home/CarouselSlide';
import { LIST_SLIDER } from '../data/list';

const screenWidth = Dimensions.get('screen').width;

export default function Home() {
  return (
    <HomeWrap>
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={{ flex: 9 }}>
            <Text style={styles.title}># 내돈내들 VIBE</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Image
              source={{
                uri: 'https://fakeimg.pl/200x200/?text=U&font=lobster',
              }}
              style={styles.profileImg}
            />
          </View>
        </View>
        <CarouselSlide listItem={LIST_SLIDER} />
        <View style={{ flex: 1 }}>
          <Text style={styles.secondeTitle}>
            좋아하는 아티스트를 선택해 주세요
          </Text>
          <Image
            source={{
              uri:
                'https://music-phinf.pstatic.net/20210216_123/1613438250614oH14u_PNG/%B4%D9%BF%EE%B7%CE%B5%E5_%2832%29_-_400.png?type=f310_182',
            }}
            style={styles.likeArtist}
          />
          <Text style={styles.updateContent}>
            매일 새로운 믹스테잎이 업데이트 됩니다.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: screenWidth - 300,
              backgroundColor: '#FF004F',
              flex: 1,
              padding: 10,
              borderRadius: 200 / 2,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              선택하기
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.secondeTitle}>
            좋아하는 아티스트를 선택해 주세요
          </Text>
          <Image
            source={{
              uri:
                'https://music-phinf.pstatic.net/20210216_123/1613438250614oH14u_PNG/%B4%D9%BF%EE%B7%CE%B5%E5_%2832%29_-_400.png?type=f310_182',
            }}
            style={styles.likeArtist}
          />
          <Text style={styles.updateContent}>
            매일 새로운 믹스테잎이 업데이트 됩니다.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: screenWidth - 300,
              backgroundColor: '#FF004F',
              flex: 1,
              padding: 10,
              borderRadius: 200 / 2,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              선택하기
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.secondeTitle}>
            좋아하는 아티스트를 선택해 주세요
          </Text>
          <Image
            source={{
              uri:
                'https://music-phinf.pstatic.net/20210216_123/1613438250614oH14u_PNG/%B4%D9%BF%EE%B7%CE%B5%E5_%2832%29_-_400.png?type=f310_182',
            }}
            style={styles.likeArtist}
          />
          <Text style={styles.updateContent}>
            매일 새로운 믹스테잎이 업데이트 됩니다.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: screenWidth - 300,
              backgroundColor: '#FF004F',
              flex: 1,
              padding: 10,
              borderRadius: 200 / 2,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              선택하기
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.secondeTitle}>
            좋아하는 아티스트를 선택해 주세요
          </Text>
          <Image
            source={{
              uri:
                'https://music-phinf.pstatic.net/20210216_123/1613438250614oH14u_PNG/%B4%D9%BF%EE%B7%CE%B5%E5_%2832%29_-_400.png?type=f310_182',
            }}
            style={styles.likeArtist}
          />
          <Text style={styles.updateContent}>
            매일 새로운 믹스테잎이 업데이트 됩니다.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: screenWidth - 300,
              backgroundColor: '#FF004F',
              flex: 1,
              padding: 10,
              borderRadius: 200 / 2,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              선택하기
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </HomeWrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingLeft: 15,
    paddingRight: 15,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  secondeTitle: {
    marginTop: 34,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  likeArtist: {
    width: screenWidth - 30,
    height: 180,
    marginTop: 10,
    resizeMode: 'cover',
  },
  updateContent: {
    color: '#C4C4C4',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
  },
});
const HomeWrap = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
  padding-left: 15;
  padding-right: 15;
`;
