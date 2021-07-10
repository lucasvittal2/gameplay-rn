import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 360,
        marginTop:30
    },
    content:{
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom:-40,
        fontFamily: theme.fonts.title700,
        lineHeight:40

    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        textAlign: 'center',
        marginBottom: 10,
        lineHeight:25
    }
}) 