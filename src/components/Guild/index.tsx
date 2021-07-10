import React from "react";
import { View, TouchableOpacity, TouchableOpacityProps, Text} from "react-native";
import {Feather} from '@expo/vector-icons';


import{ styles} from './Style';
import { GuildIcon} from '../GuildIcon';
import { theme } from "../../global/styles/theme";

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}
type Props = TouchableOpacityProps & {
   data: GuildProps,
   handleGuildSelect: (guild: GuildProps) =>void
};
export function Guild({
    data,
    ...rest
}: Props){
    console.log('**** ' + data.name)
    return (
        <TouchableOpacity
        style={styles.container}
        activeOpacity={0.7}
        {...rest}
      >
          <GuildIcon guildId={data.id} iconId={data.icon} />
  
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>
                {data.name}
              </Text>
  
              <Text style={styles.type}>
                { data.owner ? 'Administrador' : 'Convidado'}
              </Text>
            </View>
          </View>
  
          <Feather 
            name="chevron-right"
            color={theme.colors.heading}
            size={24}        
          />
      </TouchableOpacity>
    );

}