import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    FlatList
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { ListDivider } from '../../components/ListDivider'
import { Member, MemberProps } from '../../components/Member'
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon} from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { styles } from './Style';

import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';

export function AppointmentDetails(){
    const members: MemberProps[] = [
        {
            id: '1',
            username: 'rodrigo',
            status: 'online',
            avatarUrl: 'https://avatars.githubusercontent.com/u/49030804?v=4',
        },
        {
            id: '2',
            username: 'Lucas',
            status: 'offline',
            avatarUrl: 'https://avatars.githubusercontent.com/u/62555057?s=60&v=4',

        }
    ];
    return(
        <Background>
            <Header
                title= "Detalhes"
                action = {
                    <BorderlessButton>
                        <Fontisto 
                            name='share'
                            size = {24}
                            color = { theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground
                source = {BannerImg}
                style  = {styles.banner}
            >
            <View style = {styles.bannerContent}>
                <Text style = {styles.title}>
                    Lendários
                </Text>
                <Text style = {styles.subTitle}>
                    É hoje que vamos chegar ao challenger sem perder uma partida da mb10
                </Text>
            </View>
            </ImageBackground>
            <ListHeader
                title="Jogadores"
                subtitle= "Total 3"
            />
            <FlatList
                data = {members}
                keyExtractor = { item => item.id}
                renderItem = { ({ item }) => (<Member data = {item}/>) }
                ItemSeparatorComponent = {() => <ListDivider/> }
                style = { styles.members }
            />
            <View style = {styles.footer}>
                <ButtonIcon title = 'entrar na partida'/>
            </View>
        </Background>
    )
}