import {SafeAreaView,Text, StyleSheet, Button} from 'react-native'
import {useNavigation} from '@react-navigation/native'


export default function Home(){
    
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Somos a Adidas</Text>
            <Text style={styles.text2}>Os melhores produtos você encontra aqui em nossa loja</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize:25
    },
    text2:{
        fontSize:15
    }
  });