import { SafeAreaView, Text, StyleSheet, Button, TextInput, View, Image, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'



export default function Produtos() {

    const tenis1 = require("../../assets/casualTenis.png");
    const tenis2 = require("../../assets/sportFino.png");
    const tenis3 = require("../../assets/sportTenis.png");

    const navigation = useNavigation();
    const route = useRoute();
    const navegaContato = () => {
        navigation.navigate('Contato')
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>Nossos melhores produtos</Text>
                </View>
                <View style={{ padding: 10, margin:30 }}>
                    <Text style={styles.title2}>Tênis casual preto</Text>
                    <Image source={tenis1} style={{ width: 250, height: 200, borderRadius: 10 }}></Image>
                </View>
                <View style={{ padding: 10, margin:30 }}>
                    <Text style={styles.title2}>Tênis casual claro</Text>
                    <Image source={tenis2} style={{ width: 250, height: 200, borderRadius: 10 }}></Image>
                </View>
                <View style={{ padding: 10, margin:30 }}>
                    <Text style={styles.title2}>Tênis esporte branco Feminino</Text>
                    <Image source={tenis3} style={{ width: 250, height: 200, borderRadius: 10 }}></Image>
                </View>
            </SafeAreaView>
        </ScrollView>

    )
}


// export default function Sobre({route}){

//     // const navigation = useNavigation();

//     return(
//         <SafeAreaView style={styles.container}>
//             <Text>Tela Sobre</Text>
//             <TextInput value={route.params?.nome}></TextInput>
//             <TextInput value={route.params?.email}></TextInput>
//         </SafeAreaView>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        textAlign: 'center'
    },
    title2: {
        fontSize: 16,
        textAlign: 'center'
    }
});