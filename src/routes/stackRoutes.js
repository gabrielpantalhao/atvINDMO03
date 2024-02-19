import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            
            <Stack.Screen
                name="Produtos"
                component={Produtos}
            />
        </Stack.Navigator>
    )
}