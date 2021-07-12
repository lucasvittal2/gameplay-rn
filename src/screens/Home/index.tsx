import React, { useState} from 'react';
import {
    View, Text, FlatList
} from 'react-native';
import { styles } from './styles';

import { Profile} from '../../components/Profile';
import { ListDivider } from '../../components/ListDivider';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader} from '../../components/ListHeader';
import {Appointment} from '../../components/Appointment';
import { Background} from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { AppointmentDetails } from '../AppointmentDetails';


export function Home(){
    const [ category, setCategory] = useState('');
    const apointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06  às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'


        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06  às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'


        }
    ];
    const navigation = useNavigation();

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }
    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate')
    }
    return(
        <Background>
                <View style = {styles.header}>
                    <Profile/>
                    <ButtonAdd
                        onPress={ handleAppointmentCreate}
                    />

                </View>
                
                <View>
                    <CategorySelect
                    categorySelected = {category}
                    setCategory = {handleCategorySelect}
                    hasCheckBox ={ false}
                    
                    />
                </View>
                    <ListHeader
                    
                    title="Partidas Agendadas"
                    subtitle = "Total: 6"
                    />
                    <FlatList
                        data = {apointments}
                        keyExtractor = {item => item.id}
                        renderItem = {({item}) =>
                        ( 
                        <Appointment
                        data ={item}
                        onPress ={ handleAppointmentDetails }
                        />
                        )
                        }
                        style = {styles.matches}
                        showsVerticalScrollIndicator = {false}
                        ItemSeparatorComponent = {() => <ListDivider/> }
                        contentContainerStyle = {{paddingBottom: 69}}
                    />
        </Background>
    );
}