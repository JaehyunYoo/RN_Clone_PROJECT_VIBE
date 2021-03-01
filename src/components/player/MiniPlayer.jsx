import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export default function Player() {
  const [sound, setSound] = useState(null);
  const [songs, setsongs] = useState(null);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [position, setPostion] = useState(null);

  const song = [
    {
      id: 3,
      thumbnail:
        'https://musicmeta-phinf.pstatic.net/album/002/938/2938375.jpg?type=r360Fll&v=20210118143211',
      title: 'Hate you',
      artist: '백예린',
      music:
        'https://res.cloudinary.com/wecodesocial/video/upload/v1614694880/mp3/%E1%84%87%E1%85%A2%E1%86%A8%E1%84%8B%E1%85%A8%E1%84%85%E1%85%B5%E1%86%AB_Yerin_Baek_Hate_you_MV_s86ncj.mp3',
    },
    {
      id: 4,
      thumbnail:
        'https://musicmeta-phinf.pstatic.net/album/005/151/5151274.jpg?type=r480Fll&v=20201216160407',
      title: '잘할게',
      artist: '이승기',
      music:
        'https://res.cloudinary.com/wecodesocial/video/upload/v1614694880/mp3/%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%E1%86%BC%E1%84%80%E1%85%B5-%E1%84%8C%E1%85%A1%E1%86%AF%E1%84%92%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A6_llccbd.mp3',
    },
  ];

  useEffect(() => {}, []);

  // 상태
  const playerStatus = (status) => {
    console.log(status);
    setPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPostion(status.positionMillis);
  };

  // 플레이
  const currentPlaySong = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      playerStatus
    );
    setSound(sound);
  };

  // 컨트롤
  const onPlayControl = async () => {
    if (!sound) {
      return;
    }
    isPlaying ? await sound.pauseAsync() : await sound.playAsync();
  };

  // 프로그래스 바
  const getProgress = () => {
    if (sound === null || duration === null || position === null) return 0;
    return Math.floor((position / duration) * 100);
  };
  console.log(sound, '<<<<<<<<<<sound');
  return (
    <PlayerWrap>
      <PlayBar width={getProgress()} />
      <PlayerContainer>
        <LeftContainer>
          <SongImage source={{ uri: song.imgUrl }} />
          <SongTitleWrap>
            <Text style={{ color: '#fff', fontSize: 16, paddingBottom: 12 }}>
              {song.title}
            </Text>
            <Text style={{ color: '#575757', fontSize: 14 }}>
              {song.artist}
            </Text>
          </SongTitleWrap>
        </LeftContainer>
        <RightContainer>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ paddingRight: 20 }}
            onPress={onPlayControl}
          >
            <AntDesign
              name={isPlaying ? 'pause' : 'playcircleo'}
              size={24}
              color='white'
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={{ paddingRight: 20 }}>
            <AntDesign name='hearto' size={24} color='white' />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <AntDesign name='upcircleo' size={24} color='white' />
          </TouchableOpacity>
        </RightContainer>
      </PlayerContainer>
    </PlayerWrap>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    width: '100%',
    height: 10,
  },
});
const PlayerWrap = styled.View`
  position: absolute;
  bottom: 70px;
  width: 100%;
  background-color: #1f1f1f;
  border: 1px solid #282828;
`;
const PlayBar = styled.View`
  width: ${(props) => props.width + '%'};
  height: 2px;
  background-color: ${(props) => props.theme.redBtnColor};
`;
const PlayerContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 12px;
`;
const LeftContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const SongImage = styled.Image`
  width: 45px;
  height: 45px;
`;
const SongTitleWrap = styled.View`
  flex-direction: column;

  padding-left: 15px;
`;
const RightContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
