// @flow
import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.themeColors.themePink
    },
    backgroundVideo: {
        backgroundColor: Colors.themeColors.themePink,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});