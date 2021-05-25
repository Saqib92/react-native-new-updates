// @flow
import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

const styles = StyleSheet.create({
  customImgTextStyle:{fontSize: Fonts.size.small, color: Colors.text.dark, fontFamily: Fonts.type.bold },
    wrapper: {},
    swiperDot: {
        backgroundColor: Colors.themeColors.themeWhite,
        width: Metrics.moderateScale(40),
        height: Metrics.moderateScale(4),
        marginHorizontal: Metrics.moderateScale(4),
        marginBottom: Metrics.moderateScale(15),
    },
    swiperActiveDot: {
        backgroundColor: Colors.themeColors.themePurple,
        width: Metrics.moderateScale(40),
        height: Metrics.moderateScale(4),
        marginHorizontal: Metrics.moderateScale(4),
        marginBottom: Metrics.moderateScale(15),
    }

})
export default styles;