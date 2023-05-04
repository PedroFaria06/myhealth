import {StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import {RadioButton} from 'react-native-paper'

const CriarConta = () =>{

    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
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
                    <View style={estilos.telaRadio}>
                    <View style={estilos.telaSexo}>
                            <RadioButton
                                value="Masculino"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={sexo === 'Masculino' ? 'checked' : 'unchecked'}
                                onPress={() => setSexo('Masculino')}
                            />
                            <Text style={estilos.textosSexo}>Masculino</Text>
                        </View>
                        <View style={estilos.telaSexo}>
                            <RadioButton
                                value="Feminino"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={sexo === 'Feminino' ? 'checked' : 'unchecked'}
                                onPress={() => setSexo('Feminino')}
                            />
                            <Text style={estilos.textosSexo}>Feminino</Text>
                        </View>
                    </View>
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
        justifyContent: 'center',
        alignItems:'center', 
        marginRight:20,
        paddingLeft:105,
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
        
    },
    telaRadio: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    telaSexo: {
        flexDirection: 'row',
        alignItems:'center'
    },
    textosSexo:{
        color:'white',
        fontSize:12
    }
})
export default CriarConta