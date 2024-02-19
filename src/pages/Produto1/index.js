import {Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Produto1(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Este Tênis foi feito para combinação de roupas no estilo esporte fino, de preferência escuras, sendo um tênis discreto e casual</Text>
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