import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Image
  } from 'react-native';
import Video from 'react-native-video';
import Swiper from 'react-native-swiper';

import styles from './styles';
import vid from '../assets/video/background.mp4';

const TutorialScreen = ({navigation}) =>{
   return (
       <View style={styles.container}>
           <Video source={vid}   // Can be a URL or a local file.
                resizeMode='cover'
                muted={true}
                repeat={true}
                style={styles.backgroundVideo}
            />

            <View>
            <Swiper style={styles.wrapper} showsButtons={false}>

               

                <View style={styles.slide1}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/logo.png')}
                    />
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>

                <View style={styles.slide2}>
                 <Text style={styles.text}>Beautiful</Text>
                </View>

                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
            </View>
       </View>
   )
 }

 export default TutorialScreen;