import React, {useContext} from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    Alert
} from 'react-native';
import { Background} from '../../components/Background';


import { styles } from './Styles'
import {  useAuth } from '../../hooks/auth';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';



export function SignIn() {

    
    const {user, signIn} = useAuth();
    console.log(user);
    async function handleSignIn(){
       try{
            await signIn();
       }catch(error){
            Alert.alert(error);
       }
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