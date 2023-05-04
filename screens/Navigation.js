import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Editar from "./Editar";
import { Header } from "react-native/Libraries/NewAppScreen";
import CriarConta from "./CriarConta";
import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import Recuperar from "./Recuperar";
import Criar from "./NovaVacina";
import NovaVacina from "./NovaVacina";
import ProximaVacina from "./ProximaVacina";
import Home from "./Home";

const Stack = createStackNavigator();

const Titulo = () => {
    return(
        <View style={estilos.vtitle} >
            {/* /<Image/> */}
            <Text style={estilos.ttitle}>Nova Conta</Text>
        </View>
    );
}

const Cards = () => {
    return(
        <View style={estilos.vtitle} >
            {/* /<Image/> */}
            <Text style={estilos.ttitle}>Minhas vacinas</Text>
        </View>
    );
}

const Esqueci = () => {
    return(
        <View style={estilos.vtitle} >
            <Image
            style={estilos.tinyLogo}
            source={require('../imagem/agulha.png')}
          />
            <Text style={estilos.ttitle}>MyHealth</Text>
        </View>
    );
}
const Mudei = () => {
    return(
        <View style={estilos.vtitle} >
            {/* /<Image/> */}
            <Text style={estilos.ttitle}>Editar vacina</Text>
        </View>
    );
}

const Nova = () => {
    return(
        <View style={estilos.vtitle} >
            {/* /<Image/> */}
            <Text style={estilos.ttitle}>Nova vacina</Text>
        </View>
    );
}

const Proxima = () => {
    return(
        <View style={estilos.vtitle} >
            {/* /<Image/> */}
            <Text style={estilos.ttitle}>Proxima vacina</Text>
        </View>
    );
}


const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Editar" component={Editar} 
                options={{headerStyle:{backgroundColor:'#C1E7E3'}, headerTitle:()=> <Mudei/> }}/>
            
                
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>

                <Stack.Screen name="Home" component={Home} 
                options={{headerStyle:{backgroundColor:'#C1E7E3'}, headerTitle:()=> <Cards />}}/>
                
                <Stack.Screen name="CriarConta" component={CriarConta} 
                options={{headerStyle:{backgroundColor:'#C1E7E3'}, headerTitle:()=> <Titulo />}}/>
                
                <Stack.Screen name="Recuperar" component={Recuperar} 
                options={{headerStyle:{backgroundColor:'#C1E7E3'}, headerTitle:()=> <Esqueci/>, headerLeft:null }}/>

                
          
                <Stack.Screen name="NovaVacina" component={NovaVacina} 
                options={{headerStyle:{backgroundColor:'#C1E7E3'}, headerTitle:()=> <Nova/> }}/>
                

                <Stack.Screen name="ProximaVacina" component={ProximaVacina} 
                options={{headerStyle:{backgroundColor:'#C1E7E3'}, headerTitle:()=> <Proxima/> }}/>
                

            </Stack.Navigator>
        </NavigationContainer>
    )
}
const estilos = StyleSheet.create({
    vtitle:{
        flexDirection:'row',
        alignItems:'center',
    }, 
    ttitle:{
        color:'#419ED7',
        fontSize:30
    }, 
    tinyLogo: {
        width: 30,
        height: 30
      }
})
export default Navigation