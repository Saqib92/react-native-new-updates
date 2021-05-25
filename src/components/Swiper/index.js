import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';

const SwiperHOC = props => {
  return (
    <Swiper
      loop={false}
      showsButtons={false}
      style={styles.container}
      dot={<View style={styles.swiperDot} />}
      activeDot={<View style={styles.swiperActiveDot} />}
      showsPagination={!props.hideDots}
      index={props.index || 0}
      {...props}
      >
      {props.children}
    </Swiper>
  );
};

export default SwiperHOC;
