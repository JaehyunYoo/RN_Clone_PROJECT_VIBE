import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useSelector } from 'react-redux';
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

import axios from 'axios';
import { API_PLAYLIST } from '../../config/Api';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('screen');
function HomeDetail({ route }) {
  const [tracks, setTracks] = useState();
  const [tracksLength, setTrackLength] = useState();
  const { id, img, title, description } = route.params;
  const token = useSelector((state) => state.tokenReducer);
  console.log(token, img);
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
    <DetailsWrap>
      <BackBlurImg source={{ uri: img }} />
      <BlurView intensity={100} tint='default' style={styles.blurViews} />
      <LinearGradient
        colors={[
          'rgba(0,0,0,.880)',
          'rgba(0,0,0,1)',
          'rgba(0,0,0,1)',
          'rgba(0,0,0,1)',
        ]}
        style={styles.gradient}
      />
      <ScrollView style={{ flex: 1 }}>
        <AlbumTrackWrap>
          <TracksProfileWrap>
            <Image source={{ uri: img }} style={{ width: 195, height: 195 }} />
            <RightProfile>
              <RightTitle>{title}</RightTitle>
              <RightsubTitle>{description}</RightsubTitle>
              <PlayerWrap>
                <PlayBtn>
                  <PlayContentWrap>
                    <AntDesign name='playcircleo' size={24} color='white' />
                    <PlayBtnTitle>PLAY</PlayBtnTitle>
                  </PlayContentWrap>
                </PlayBtn>
              </PlayerWrap>
            </RightProfile>
          </TracksProfileWrap>
        </AlbumTrackWrap>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            TOTAL: {tracksLength} 곡
          </Text>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            트랙
          </Text>
        </View>
      </ScrollView>
    </DetailsWrap>
  );
}

export default HomeDetail;

const DetailsWrap = styled.SafeAreaView`
  flex: 1;
`;
const BackBlurImg = styled.Image`
  position: absolute;
  top: 0;
  right: 30px;
  z-index: -1;
  width: 100%;
  height: 250px;
`;
const AlbumTrackWrap = styled.View`
  flex: 1;
  ${(props) => props.theme.screenFullPadding};
`;
const TracksProfileWrap = styled.View`
  ${(props) => props.theme.flexRow};
`;
const RightProfile = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 16px;
`;
const RightTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
const RightsubTitle = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  color: #807e7f;
`;
const PlayerWrap = styled.View`
  ${(props) => props.theme.flexEndRow}
`;
const PlayBtn = styled.TouchableOpacity`
  width: 126px;
  ${(props) => props.theme.AlignJustifyCenter};
  padding: 10px;
  background-color: #1a1a1a;
`;
const PlayBtnTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  padding-left: 16px;
`;
const PlayContentWrap = styled.View`
  align-items: center;
  flex-direction: row;
`;
const styles = StyleSheet.create({
  blurViews: {
    position: 'absolute',
    top: 0,
    zIndex: -1,
    height: 250,
    width: '100%',
  },
  gradient: {
    position: 'absolute',
    top: -50,
    zIndex: -1,
    width: '100%',
    height: height,
    flex: 1,
  },
});
