import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import CarouselSlide from '../components/home/CarouselSlide';
import { API_CATEGEORY } from '../config/Api';
import { globalToken } from '../store/tokenReducer/action';
import { LIST_SLIDER } from '../data/data';

export default function Home() {
  const token = useSelector((state) => state.tokenReducer);
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalToken());
    const fetchCateGory = async () => {
      const response = await axios(API_CATEGEORY, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setData(response.data.categories.items.slice(0, 8));
    };
    fetchCateGory();
  }, []);
  console.log(data, '끝난건가????');
  return (
    <HomeWrap>
      <Container>
        <TopWrap>
          <TopTitle># 내돈내들 VIBE</TopTitle>
          <TopProfile
            source={{ uri: 'https://fakeimg.pl/200x200/?text=U&font=lobster' }}
            style={{ borderRadius: 40 / 2 }}
          />
        </TopWrap>
        <CarouselSlide listItem={LIST_SLIDER} />
        <SecondeTitle>좋아하는 아티스트를 선택해 주세요.</SecondeTitle>
        <SectionImage source={require('../../assets/images/event.png')} />
        <Text style={{ color: '#545454', textAlign: 'center', fontSize: 18 }}>
          매일 새로운 믹스테잎이 업데이트 됩니다.
        </Text>
        <SelectBtn>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            선택하기
          </Text>
        </SelectBtn>
      </Container>
    </HomeWrap>
  );
}
const HomeWrap = styled.SafeAreaView`
  ${(props) => props.theme.blackWrap};
`;
const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  margin-top: 10px;
  ${(props) => props.theme.screenPadding};
`;

const TopWrap = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const TopTitle = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;
const TopProfile = styled.Image`
  width: ${(props) => props.theme.screenWidth - 385};
  height: ${(props) => props.theme.screenWidth - 385};
`;
const SecondeTitle = styled.Text`
  margin: 26px 0 16px 0;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
`;
const SectionImage = styled.Image`
  margin: 16px 0;
  width: ${(props) => props.theme.screenWidth - 30};
`;
const SelectBtn = styled.TouchableOpacity`
  width: ${(props) => props.theme.screenWidth - 320};
  border: 1px solid red;
  margin: 15px auto;
  padding: 10px;
  border-radius: 25px;
  background-color: #fb0653;
`;
