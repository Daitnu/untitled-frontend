import styled, { createGlobalStyle } from 'styled-components';
import { BREAK_POINT_MOBILE } from '~/constants';
import 'antd/dist/antd.css';

export const ResetCss = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  text-decoration: none;
  color : inherit;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.tui-grid-stock-up {
  color: #d90400;
}

.tui-grid-stock-down {
  color: #005dde;
}

.tui-grid-stock-maintained {
  color: black;
}

.tui-grid-stock-link {
  cursor: pointer;
}

.tui-grid-cell-content {
  margin: 0 10px;
}
`;

interface IFullScreenWrap {
  bg: any;
}

export const FullScreenWrap = styled.div<IFullScreenWrap>`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  background: ${(props: any) => `center/cover no-repeat url(${props.bg})` || 'none'};
`;

export const CenterWrap = styled.div`
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 99;
  @media (max-width: ${BREAK_POINT_MOBILE}) {
    width: 100%;
    height: 100%;
    background: none;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FullWidth = styled.div`
  width: 100%;
`;

export const SpaceBetweenWithFullWidth = styled(FullWidth)`
  display: flex;
  justify-content: space-between;
`;

export const AlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexJustifyAlignCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImageStyle = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const IconStyle = styled(BackgroundImageStyle)`
  width: 30px;
  height: 30px;
`;

export const LoadingWarp = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  justify-items: center;
`;
