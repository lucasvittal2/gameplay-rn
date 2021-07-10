
import { RectButton } from 'react-native-gesture-handler';
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import React from 'react';


import{ styles} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

type props = RectButtonProps & {
    title?: string;
}
export function Button({title, ...rest}: props){
    return(
        <RectButton style ={ styles.container} {...rest}>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}