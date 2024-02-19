import { SafeAreaView, Text, StyleSheet, Button, TextInput, View, Alert } from 'react-native'
import { StackActions, useNavigation, useRoute } from '@react-navigation/native'



export default function Contato() {

    const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Nome</Text>
                <TextInput placeholder='Nome' style={styles.styleInput}></TextInput>
            </View>
            <View>
                <Text>E-mail</Text>
                <TextInput placeholder='E-mail' style={styles.styleInput}></TextInput>
            </View>
            <View>
                <Text>Assunto</Text>
                <TextInput placeholder='Digite aqui...' style={styles.styleInput2}></TextInput>
            </View>
            <Button title='Enviar' onPress={() => Alert.alert('Enviado com Sucesso', "Seus dados foram enviados à nossa central, em breve retornaremos, Obrigado")}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    styleInput: {
        borderRadius: 10,
        backgroundColor: 'white',
        width: 230,
        height: 38,
        fontSize: 15,
        padding: 10

    },
    styleInput2: {
        borderRadius: 10,
        backgroundColor: 'white',
        width: 230,
        height: 100,
        fontSize: 15,
        

    }
});
    