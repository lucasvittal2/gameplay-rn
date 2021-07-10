import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width:104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 30,
        
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 15,
        marginBottom: 30
    },
    check: {
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        alignSelf: 'flex-end',
        marginRight:7,
        marginBottom: 10,
        borderBottomColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3 
    },
    checked:{
        width: 12,
        height: 12,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-end',
        marginRight:7,
        marginBottom: 10,
        borderRadius: 3 
    },
});