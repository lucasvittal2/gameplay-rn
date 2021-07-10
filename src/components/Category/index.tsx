
import { RectButton } from 'react-native-gesture-handler';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps,
    ScrollView
} from 'react-native';
import React from 'react';
import DiscordImg from '../../assets/discord.png';

import{ styles} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';
import {categories} from '../../utils/categories';
import { SvgProps} from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>,
    checked?: boolean;
    hasCheckBox?: boolean;
};
export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = false,
    ...rest
}: Props){
    const {secondary50,  secondary70,secondary85,secondary40} = theme.colors;
    return(
        <RectButton {...rest}>
            <LinearGradient
                style = {styles.container}
                colors = {[secondary50,  secondary70]}
            >
                <LinearGradient
                style = {[styles.content, { opacity: checked? 1:0.5}]}
                colors = {[checked? secondary85: secondary50,checked? secondary50: secondary40]}
                >
                   { 
                   hasCheckBox &&
                   <View
                        style ={checked ? styles.checked : styles.check}
                       
                    />
                    }
                        <Icon
                        width ={48}
                        height ={48}
                        />
                    
                </LinearGradient>
                <Text
                    style={styles.title}
                >
                    {title}
                </Text>
            </LinearGradient>
        </RectButton>
    )
}