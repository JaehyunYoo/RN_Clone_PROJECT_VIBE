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
import { colors } from '../../data/data';
import { FlatList } from 'react-native-gesture-handler';

function HomeDetail({ route }) {
  const [tracks, setTracks] = useState();
  const { id, img, title, description } = route.params;
  const token = useSelector((state) => state.tokenReducer);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios(`${API_PLAYLIST}/${id}`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
          params: {
            market: 'KR',
            fields:
              'tracks.items(track.id,track.name,track.album.images,track.artists.name)',
          },
        });
        setTracks(response.data.tracks.items.slice(0, 20));
      } catch (error) {
        console.warn(error);
      }
    };
    fetchDatas();
  }, []);

  const renderitem = ({ item, idx }) => {
    return (
      <View style={{ marginTop: 15, flex: 1 }}>
        <TouchableOpacity activeOpacity={0.9}>
          <ThumbnailWrap>
            <View style={{ flex: 1, width: 60, height: 60 }}>
              <MusicThumbnail
                source={{ uri: item.track.album.images[0].url }}
              />
            </View>
            <View style={{ flex: 3 }}>
              <TrackName>{item.track.name}</TrackName>
              <View>
                <FlatList
                  data={item.track.artists}
                  horizontal
                  renderItem={({ item }) => {
                    return <ArtistsName>{item.name}</ArtistsName>;
                  }}
                  keyExtractor={(item, idx) => String(idx + 1)}
                />
              </View>
            </View>
          </ThumbnailWrap>
        </TouchableOpacity>
      </View>
    );
  };

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
                  <PlayBtnOpacity activeOpacity={0.8}>
                    <AntDesign name='caretright' size={20} color='white' />
                    <PlayBtnTitle>PLAY</PlayBtnTitle>
                  </PlayBtnOpacity>
                </PlayBtnWrap>
              </PlayTitleWrap>
            </DescriptionWrap>
            <View style={{ flex: 3 }}>
              <View style={{ paddingTop: 20, marginBottom: 20 }}>
                <TotalMusicsTimeline>
                  2일전 업데이트 : 총{tracks?.length} 곡, 2시간 47분
                </TotalMusicsTimeline>
              </View>
              <FlatList
                data={tracks}
                renderItem={renderitem}
                keyExtractor={(item, idx) => String(idx)}
              />
            </View>
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
const PlayBtnTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
  font-weight: bold;
`;
const TotalMusicsTimeline = styled.Text`
  color: #fff;
  font-size: 16px;
`;
const MusicThumbnail = styled.Image`
  width: 60px;
  height: 60px;
`;
const TrackName = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const ThumbnailWrap = styled.View`
  ${(props) => props.theme.FlexRowCenter};
`;
const ArtistsName = styled.Text`
  font-size: 14px;
  color: #6a6a6a;
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
