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
import CarouselSlide from '../components/home/CarouselSlide';
import { LIST_SLIDER } from '../data/list';
const screenWidth = Dimensions.get('screen').width;
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={{ flex: 9 }}>
              <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>
                # 내돈내들 VIBE
              </Text>
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
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text style={styles.secondeTitle}>
              좋아하는 아티스트를 선택해 주세요
            </Text>
            <Image
              source={{
                uri: 'https://fakeimg.pl/350x200/?text=World&font=lobster',
              }}
              style={{ width: screenWidth, height: 180, marginTop: 10 }}
            />
            <Text
              style={{
                color: '#fff',
                marginBottom: 5,
                marginTop: 5,
                textAlign: 'center',
              }}
            >
              매일 새로운 믹스테잎이 업데이트 됩니다.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingLeft: 20,
    paddingRight: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    padding: 20,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  secondeTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
