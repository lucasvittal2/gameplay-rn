
import { RectButton } from 'react-native-gesture-handler';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import React from 'react';
import DiscordImg from '../../assets/discord.png';

import{ styles} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

type props = RectButtonProps & {
    title?: string;
}
export function ButtonIcon({title, ...rest}: props){
    return(
        <RectButton style ={ styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source = {DiscordImg} style = {styles.icon}/>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}