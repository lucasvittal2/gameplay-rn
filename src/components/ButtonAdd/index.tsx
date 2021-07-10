import React from 'react';
import {
    View
} from 'react-native';
import {

} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {styles} from './styles';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { theme } from '../../global/styles/theme';


export function ButtonAdd({...rest}: RectButtonProps){
    return(
        <RectButton 
        style={styles.container}
        {...rest}
        >
            
        <MaterialCommunityIcons
            name="plus"
            color = { theme.colors.heading}
            size = {24}
        />
        </RectButton>
    );
}