import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { BlurView } from 'expo-blur';
import styled from 'styled-components/native';
import axios from 'axios';
import { API_PLAYLIST } from '../../config/Api';

function HomeDetail({ route }) {
  const [tracks, setTracks] = useState();
  const [tracksLength, setTrackLength] = useState();
  const { id, img, title, description } = route.params;
  const token = useSelector((state) => state.tokenReducer);
  console.log(token, img);
  useEffect(() => {
    const fetchDatas = async () => {
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
    };
    fetchDatas();
  }, []);

  return (
    <DetailWrap>
      <BlurBackImg style={{ ...styles.blurredImage }} source={{ uri: img }} />
      <BlurView intensity={100} tint='dark' style={styles.nonBlurredContent}>
        <ThumbnailWrap>
          <Thumbnail source={{ uri: img }} />
        </ThumbnailWrap>
      </BlurView>
    </DetailWrap>
  );
}

export default HomeDetail;

const DetailWrap = styled.SafeAreaView`
  ${(props) => props.theme.blackWrap};
`;
const BlurBackImg = styled.Image`
  width: 100%;
  height: 150px;
  position: absolute;
  top: -90;
  right: -50;
`;
const ThumbnailWrap = styled.View`
  flex: 1;
  ${(props) => props.theme.screenFullPadding};
  border: 1px solid red;
  align-items: center;
`;
const Thumbnail = styled.Image`
  width: 150px;
  height: 150px;
`;
const styles = StyleSheet.create({
  nonBlurredContent: {
    width: '100%',
    height: 250,
  },
});
