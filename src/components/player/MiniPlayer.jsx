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
// import { TrackPlayer } from 'react-native-track-player';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export default function Player() {
  const [sound, setSound] = useState(null);
  const [songs, setsongs] = useState([]);
  const [currentIndex, setIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [position, setPostion] = useState(null);

  const song = [
    {
      id: 1,
      thumbnail:
        'https://musicmeta-phinf.pstatic.net/album/003/382/3382648.jpg?type=r360Fll&v=20210118143210',
      title: '불티(Spark)',
      artist: '태연(TAEYEON)',
      music:
        'https://res.cloudinary.com/wecodesocial/video/upload/v1614694882/mp3/%E1%84%90%E1%85%A2%E1%84%92%E1%85%A7%E1%86%AB_%E1%84%87%E1%85%AE%E1%86%AF%E1%84%90%E1%85%B5_npku7b.mp3',
    },
  ];

  // useEffect(() => {
  //   (async () => {
  //     await TrackPlayer.setupPlayer().then(() => {
  //       console.log('Play Ready')
  //     })
  //   })();
  // },[])

  return (
    <PlayerWrap>
      <PlayBar width={getProgress()} />
      <PlayerContainer>
        <LeftContainer>
          {/* <SongImage source={{ uri: song.thumbnail }} /> */}
          <SongTitleWrap>
            <Text style={{ color: '#fff', fontSize: 16, paddingBottom: 12 }}>
              {/* {song.title} */}
            </Text>
            <Text style={{ color: '#575757', fontSize: 14 }}>
              {/* {song.artist} */}
            </Text>
          </SongTitleWrap>
        </LeftContainer>
        <RightContainer>
          {/* <TouchableOpacity
            activeOpacity={0.7}
            style={{ paddingRight: 20 }}
            onPress={onPlayControl}
          >
            <AntDesign
              name={isPlaying ? 'pause' : 'playcircleo'}
              size={24}
              color='white'
            />
          </TouchableOpacity> */}
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

const PlayerWrap = styled.View`
  width: 100%;
  height: 70px;
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
