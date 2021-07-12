
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1,

    },
    header: {
        width: '100%',
        flexDirection: 'row',
        
        justifyContent: 'space-between',
        marginBottom: 12
    },
    title:{
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18,

    },
    category: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginRight: 24
    },
    footer: { 
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    

    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 13,
        marginLeft: 7
    },
    players: {
        fontFamily: theme.fonts.text500,
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24
    },
    guildIconContainer: {
        height: 68,
        width: 64,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    }
    
});