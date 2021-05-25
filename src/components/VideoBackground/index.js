// @flow
import React, {useRef} from 'react';
import Video from 'react-native-video';
import defaultStyle from './styles';

export default (VideoBackground = ({
  source,
  onError,
  repeat = true,
  children,
  containerStyle = {},
  onReadyForDisplay=()=>{},
}) => {
  const videoBgRef = useRef(null);
  const _containerStyle = [defaultStyle.containerStyle, containerStyle];
  return (
    <Video
      source={source}
      repeat={repeat}
      ref={videoBgRef}
      onError={onError}
      resizeMode={'cover'}
      style={defaultStyle.backgroundVideo}
      onReadyForDisplay={onReadyForDisplay}
    />
  );
});
