import React from 'react';
import {
    View,
    Text,
    Image,
    StatusBar
} from 'react-native';
import { Background} from '../../components/Background';


import { styles } from './Styles'
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';


export function SignIn() {

    const navigation = useNavigation();
    function handleSignIn(){
        navigation.navigate('Home')

    }
    return (
        <Background>
            <View style ={ styles.container}>
                <Image source ={IllustrationImg} style ={styles.image} resizeMode='stretch'/>
                <View style = {styles.content}>
                    <Text style = {styles.title}>
                    Conecte-se{'\n'}
                    e organize suas{'\n'}
                    jogatinas{'\n'}
                    </Text>
                    <Text style ={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favorito com seus amigos {'\n'}
                    </Text>
                    <ButtonIcon
                    title = "Entrar com Discord"
                    activeOpacity = {0.7}
                    onPress ={handleSignIn}
                    />
                </View>
            </View>
     </Background>
    );
  }