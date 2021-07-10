import React from 'react';

import {
    View, Text
} from 'react-native';
import { theme } from '../../global/styles/theme';
import { Avatar} from '../Avatar';


import { styles } from './Style';
export type MemberProps = {
    id: string;
    username: string;
    avatarUrl: string;
    status: string;
}

type Props ={
    data: MemberProps
}
export function  Member({
    data
}: Props){
    const {on, primary}  = theme.colors;
    const isOnline = data.status === 'online';
    return(
        <View style = { styles.container }>
            <Avatar urlImage ={data.avatarUrl}/>
            <View>
                <Text style = { styles.title }>
                    {data.username}
                </Text>
                <View   style = {styles.status} >
                    <View style = {[
                            styles.bulletStatus,
                            {
                                backgroundColor: isOnline? on : primary
                            }
                        ]}
                        >
                       
                    </View>
                    <Text style = { styles.nameStatus}>
                        { isOnline ? 'Disponível' : 'Ocupado'}
                    </Text>
                    <View style = { styles.bulletStatus}>

                    </View>

                </View>
            </View>
        </View>
    )
}