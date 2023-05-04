import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import { useState } from 'react'

const Recuperar = () =>{
    
    const [visible, setVisible] = useState(true);
    const [email, setEmail] = useState('')

    return(
        <View style={estilos.main}>
            <View style={estilos.inputs}>
                <View style={estilos.email}></View>
                <Text style={estilos.textEmail}>E-mail</Text>
                <TextInput style={estilos.textInput} value={email} onChangeText={setEmail}/>
            </View>
            <View style={estilos.button}>
                <TouchableOpacity style={estilos.botao}>
                    <Text style={estilos.botao.texto}>Recuperar senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const estilos = StyleSheet.create({
    main:{
        flex:100, 
        backgroundColor:'#ADD4D0'
    }, 
   
    email:{
        flexDirection:'row',
        justifyContent: 'center',

    },
    inputs:{
        flex: 70,
        backgroundColor:'#ADD4D0',
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row'
    },
    textEmail:{
        fontSize: 16,
        color: 'white',
        paddingEnd: 5
    }, 
    textInput:{
        backgroundColor: 'white',
        width: 275,
        height: 36
    },
    tinyLogo: {
        width: 50,
        height: 50
    },
    titulo: {
        fontSize: 38,
        color: '#419ED7'
    },
    botao:{
        texto:{
            color: 'white',
            fontSize: 19,
            marginTop: 5,
            marginBottom: 5
        },
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#37BD6D',
        width: 170,
        height: 40,
        alignSelf: 'center'
    }, 
    button:{
        flex:20
    }
})
export default Recuperar