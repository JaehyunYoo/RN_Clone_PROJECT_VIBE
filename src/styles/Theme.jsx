import { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const colors = {
  whiteColor: '#ffffff',
  pupleColor: '#2f2051',
  darkColor: '#000000',
  grayColor: '#e2e2e2',
  redBtnColor: '#FB0653',
};

const blackWrap = css`
  display: flex;
  flex: 1;
  background-color: ${colors.darkColor};
`;

const screenPadding = css`
  padding: 0 15px;
`;
const screenFullPadding = css`
  padding: 15px;
`;
const flexRow = css`
  flex: 1;
  flex-direction: row;
`;

const flexEndRow = css`
  flex: 1;
  align-items: flex-end;
  flex-direction: row;
`;
const AlignJustifyCenter = css`
  align-items: center;
  justify-content: center;
`;
const theme = {
  ...colors,
  blackWrap,
  AlignJustifyCenter,
  screenPadding,
  screenWidth,
  flexRow,
  flexEndRow,
  screenFullPadding,
  screenHeight,
};

export default theme;
