import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    slide1: {
      flex: 1,
      alignItems: 'center',
    },
    logo:{
      width: 250,
      height: 250
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
});
