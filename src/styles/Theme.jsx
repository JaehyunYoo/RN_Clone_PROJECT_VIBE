import { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

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
const theme = {
  ...colors,
  blackWrap,
  screenPadding,
  screenWidth,
  flexRow,
  screenFullPadding,
};

export default theme;
