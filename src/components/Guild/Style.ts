import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const  styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 44
        
    },
    content: {
        justifyContent: 'center',
        marginRight: 80,
        marginLeft: -70, 
        paddingHorizontal:70,
        marginVertical: 5
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
        marginBottom: 4,
        marginLeft: 20
      },
      type: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginLeft: 20
      }
});