import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {styles} from './Styles';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


type Props = {
  guildId?: string| null;
  iconId?: string | null;

}
export function GuildIcon({
  guildId,
  iconId
}:Props){
    const uri = "https://c0.klipartz.com/pngpicture/842/992/gratis-png-discord-ordenadores-servidores-teamspeak-discord-icon-thumbnail.png";
    return(
      <Image
      
        source = {{uri}}
        style={styles.image}
        resizeMode = 'stretch'
      />
    );
}
