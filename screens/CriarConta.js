import {StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import { useState } from 'react'

const CriarConta = () =>{

    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [repetir, setRepetirSenha] = useState('')

    return(
        <View style={estilos.main}> 
            <View style={estilos.tela}>
                <View style={estilos.nome}>
                    <Text style={estilos.textos}>Nome completo</Text>
                    <TextInput style={estilos.inputs} value={nome} onChangeText={setNome}/>
                </View>
                <View style={estilos.sexo}>
                    <Text style={estilos.textos}>Sexo</Text>
                </View>
                <View style={estilos.data}>
                    <Text style={estilos.textos}>Data nascimento</Text>
                    <TextInput style={estilos.inputs} value={data} onChangeText={setData}/>
                </View>
                <View style={estilos.email}>
                    <Text style={estilos.textos}>E-mail</Text>
                    <TextInput style={estilos.inputs} value={email} onChangeText={setEmail}/>
                </View>
                <View style={estilos.senha}>
                    <Text style={estilos.textos}>Senha</Text>
                    <TextInput style={estilos.inputs} value={senha} secureTextEntry={true} onChangeText={setSenha}/>
                </View>
                <View style={estilos.rsenha}>
                    <Text style={estilos.textos}>Repetir senha</Text>
                    <TextInput style={estilos.inputs}value={repetir} secureTextEntry={true} onChangeText={setRepetirSenha}/>
                </View>
            </View>
            <View style={estilos.botao}>
                <TouchableOpacity style={estilos.button}>
                    <Text style={estilos.button.text}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const estilos = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#ADD4D0'
    },
    tela:{
        flex:80,
        paddingTop:90
    },
    nome:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    sexo:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    data:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    email:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft:70
    },
    senha:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft:70
    },
    rsenha:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft:25
    },
    botao:{
        flex:20
    },
    button:{
        text:{
            color: 'white',
            fontSize: 20,
            marginTop: 5,
            marginBottom: 5
        },
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#37BD6D',
        width: 140,
        height: 40,
        alignSelf: 'center'
    },
    inputs:{
        borderWidth: 0,
        backgroundColor: 'white',
        width: 255,
        height: 26, 
        margin:5
    },
    textos:{
        color:'white',
        
    }
})
export default CriarConta