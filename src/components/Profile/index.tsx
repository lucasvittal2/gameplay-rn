import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Avatar } from '../Avatar';
import {styles} from './styles';
export function Profile(){
    return(
        <View style={styles.container}>

            <Avatar urlImage = "https://avatars.githubusercontent.com/u/62555057?v=4"/>

            <View>
                <Text style={styles.greeting}>
                    Olá,
                </Text>
                <Text style={styles.username}>
                    Lucas
                </Text>
                <Text style={styles.message}>
                    Hoje é dia de vitória.
                </Text>
            </View>
        </View>
    );
}