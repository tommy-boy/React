import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  @font-face {
    font-family: 'Roboto', sans-serif;    
  }

  body {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }

  .react-grid-layout {
    position: relative;
    transition: height 200ms ease;
  }
  .react-grid-item {
    transition: all 200ms ease;
    transition-property: left, top;
  }
  .react-grid-item.cssTransforms {
    transition-property: transform;
  }
  .react-grid-item.resizing {
    z-index: 1;
    will-change: width, height;
  }
  
  .react-grid-item.react-draggable-dragging {
    transition: none;
    z-index: 3;
    will-change: transform;
    cursor: move;
  }
  
  .react-grid-item.react-grid-placeholder {
    background: red;
    opacity: 0.1;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  
  .react-grid-item > .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }
  
  .react-grid-item > .react-resizable-handle::after {
    content: "";
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid rgba(0, 0, 0, 0.4);
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  }
 
  .isScroll {
    box-shadow: 0 4px 2px -2px #a5a5a5;
  }
`;

const theme = {
  primaryBackgroundColor: '#4d4d4d',
  linkDefaultColor: '#3C3C3C',
  linkDefaultActiveColor: '#dd6000',
  linkSecondaryColor: 'rgba(255,255,255,.87)',
  buttonDefaultColor: 'white',
  buttonDefaultBackgroundColor: 'rgba(255,255,255,.87)',
  buttonDefaultBorderColor: 'rgba(255,255,255,.87)',
  buttonPrimaryColor: 'white',
  buttonPrimaryBackgroundColor: '#dd6000',
  buttonPrimaryBorderColor: '#dd6000',
  buttonSecondaryColor: 'rgba(255,255,255,.87)',
  buttonSecondaryBackgroundColor: '#4D4D4D',
}

export default theme