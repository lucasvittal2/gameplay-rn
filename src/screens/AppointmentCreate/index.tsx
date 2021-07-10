import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform
   
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';


import { Member, MemberProps } from '../../components/Member'
import { CategorySelect } from '../../components/CategorySelect';

import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { SmallInput } from '../../components/SmallInput';
import { GuildIcon } from '../../components/GuildIcon'
import { Header } from '../../components/Header';
import { TextArea } from '../../components/TextArea'
import { styles } from './Style';
import { theme } from '../../global/styles/theme';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Appointment';
;

type Props = {

}
export function AppointmentCreate(){

    const [ category, setCategory] = useState('');
    const [ openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>();
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

    function handleOpenGuilds(){
        setOpenGuildsModal(true);
    }
    function handleGuildSelect(guildSelected: GuildProps){
        setOpenGuildsModal(false);
        setGuild(guildSelected);
        console.log(guildSelected);
    }
    return(
        <KeyboardAvoidingView
        style = { styles.container}
        behavior = { Platform.OS === 'ios' ? 'padding':'height'}
        >
            <ScrollView>
                <Header
                    title= "Agendar Partida"
                />
                <Text
                style = {[styles.label, {
                    marginLeft:24,
                    marginTop: 36,
                    marginBottom: 18
                    }]
                }
                    >
                    Categoria
                </Text>
                <CategorySelect
                    hasCheckBox
                    setCategory = {setCategory}
                    categorySelected  = {category}
                />
                <View style = {styles.form}>
                    <RectButton onPress = {handleOpenGuilds}>
                        <View style = { styles.select}>
                        {
                               guild?.icon? <GuildIcon/>:
                            <View
                                style = {styles.image}
                            />
                        }
                            <View style = {styles.selectBody}>
                                <Text style = { styles.label}>
                                    {guild?.name? guild.name:'Selecione um servidor'}
                                </Text>
                            </View>
                            <Feather
                            name="chevron-right"
                            color = {theme.colors.heading}
                            size = { 24 }
                            />
                        </View>
                    </RectButton>
                
                <View style = {styles.field}>
                    <View>
                        <Text style ={ styles.label}>
                            Dia e Mês
                        </Text>
                            <View style = {styles.column}>
                                <SmallInput
                                    maxLength = {2}
                                />
                                <Text   style = { styles.divider}>
                                    /
                                </Text>
                                <SmallInput
                                    maxLength = {2}
                                />
                            </View>
                        </View>

                        <View>
                        <Text style ={ styles.label}>
                            Dia e Mês
                        </Text>
                            <View style = {styles.column}>
                                <SmallInput
                                    maxLength = {2}
                                />
                                <Text   style = { styles.divider}>
                                    :
                                </Text>
                                <SmallInput
                                    maxLength = {2}
                                />
                            </View>
                        </View>
                    </View>
                    
                    
                    <View style ={ [styles.field, { marginBottom: 12}]}>
                        <Text style = {styles.label}>
                            Descrição
                        </Text>
                        <Text style = {styles.caracteresLimit}>
                            Max 100 caracteres
                        </Text>
                    </View>
                    <TextArea
                        multiline
                        maxLength = { 100 }
                        numberOfLines = { 5 }
                        autoCorrect = { false }/>
                    <View style = {styles.footer}>
                        <Button
                            title= "Agendar"
                        />
                    </View>
                </View>
            </ScrollView>
            <ModalView visible = {openGuildsModal}>
                <Guilds handleGuildSelect = {handleGuildSelect}/>
            </ModalView>
        </KeyboardAvoidingView>
    )
}