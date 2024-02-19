import {Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Produtos(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Tela detalhes do usuário</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:5
    }
})