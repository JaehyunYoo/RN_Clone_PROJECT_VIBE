import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import axios from 'axios';
import { API_PLAYLIST } from '../../config/Api';

const colors = [
  'rgba(0,0,0,1)',
  'rgba(0,0,0,1)',
  'rgba(0,0,0,1)',
  'rgba(0,0,0,.98)',
  'rgba(0,0,0,.8)',
];

function HomeDetail({ route }) {
  const [tracks, setTracks] = useState();
  const [tracksLength, setTrackLength] = useState();
  const { id, img, title, description } = route.params;
  const token = useSelector((state) => state.tokenReducer);

  console.log(tracks);
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios(`${API_PLAYLIST}/${id}`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
          params: {
            market: 'KR',
            fields: 'tracks.items(track.id,track.name,track.artists.name)',
          },
        });
        setTracks(response.data.tracks.items);
        setTrackLength(response.data.tracks.items.length);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchDatas();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <View style={styles.container}>
          <Image style={styles.blurredImage} source={{ uri: img }} />
          <BlurView
            intensity={100}
            style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
          />
        </View>
      </View>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ marginTop: 48 }} />
          <HomeDatailsWrap>
            <DescriptionWrap>
              <View style={{ flex: 1 }}>
                <AlbumImage source={{ uri: img }} />
              </View>
              <PlayTitleWrap>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                  <AlbumTitle>{title}</AlbumTitle>
                  <AlbumSubTitle>{description}</AlbumSubTitle>
                </View>
                <PlayBtnWrap style={{}}>
                  <PlayBtnOpacity>
                    <AntDesign name='caretright' size={20} color='white' />
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 16,
                        paddingLeft: 5,
                        fontWeight: 'bold',
                      }}
                    >
                      PLAY
                    </Text>
                  </PlayBtnOpacity>
                </PlayBtnWrap>
              </PlayTitleWrap>
            </DescriptionWrap>
            <View style={{ flex: 3 }}></View>
          </HomeDatailsWrap>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
export default HomeDetail;

const HomeDatailsWrap = styled.View`
  ${(props) => props.theme.screenFullPadding};
`;
const DescriptionWrap = styled.View`
  ${(props) => props.theme.flexRow};
`;
const AlbumImage = styled.Image`
  ${(props) => props.theme.AlbumImage};
`;
const PlayTitleWrap = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 20px;
`;
const AlbumTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
const AlbumSubTitle = styled.Text`
  margin-top: 18px;
  font-size: 14px;
  color: #6c6c6c;
`;
const PlayBtnWrap = styled.View`
  ${(props) => props.theme.flexEndRow};
`;
const PlayBtnOpacity = styled.TouchableOpacity`
  ${(props) => props.theme.PlayBtn};
`;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurredImage: {
    width: '100%',
    height: 250,
    position: 'absolute',
    top: -10,
    right: -250,
  },
  nonBlurredContent: {
    width: '100%',
    height: 250,
    position: 'absolute',
    right: 0,
  },
});
