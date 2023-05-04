import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity,Appearance} from 'react-native'
import { useState } from 'react'
import {RadioButton} from 'react-native-paper'

const Editar = () =>{

    const [data, setData] = useState('')
    const [dose, setDose] = useState('')
    const [vacina, setVacina] = useState('')
    const [comprovante, setComprovante] = useState('')
    const [proxvacina, setProVacinacao] = useState('')

    return(
        <View style={estilos.main}>
            <View style={estilos.tela}>
                <View style={estilos.data}>
                    <Text style={estilos.textos}>Data nascimento</Text>
                    <TextInput style={estilos.inputs} value={data} onChangeText={setData}/>
                </View>
                <View style={estilos.vacina}>
                    <Text style={estilos.textos}> Vacina</Text>
                    <TextInput style={estilos.inputs} value={vacina} onChangeText={setVacina}/>
                </View>

                <View style={estilos.dose}>
                    <Text style={estilos.textosD}>Dose</Text>
                    <View style={estilos.telaRadio}>
                        <View style={estilos.telaDoses}>
                            <RadioButton
                                value="1a.dose"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={dose === '1a.dose' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('1a.dose')}
                            />
                            <Text style={estilos.textosDoses}>1a. dose</Text>
                        </View>
                        <View style={estilos.telaDoses}>
                            <RadioButton
                                value="2a.dose"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={dose === '2a.dose' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('2a.dose')}
                            />
                            <Text style={estilos.textosDoses}>2a. dose</Text>
                        </View>
                        <View style={estilos.telaDoses}>
                            <RadioButton
                                value="3a.dose"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={dose === '3a.dose' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('3a.dose')}
                            />
                            <Text style={estilos.textosDoses}>3a. dose</Text>
                        </View>
                        <View style={estilos.telaDoses}>
                            <RadioButton
                                value="DoseUnica"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={dose === 'DoseUnica' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('DoseUnica')}
                            />
                            <Text style={estilos.textosDoses}>Dose Unica</Text>
                        </View>
                    </View>
                </View>
                
                <View style={estilos.comprovante}>
                    <Text style={estilos.textos}>Comprovante</Text>
                    <TextInput style={estilos.inputs} value={comprovante} onChangeText={setComprovante}/>
                </View>
                <View style={estilos.proxvacina}>
                    <Text style={estilos.textos}>Proxima vacinação</Text>
                    <TextInput style={estilos.inputs} value={proxvacina} onChangeText={setProVacinacao}/>
                </View>
            </View>
            <View style={estilos.botoes}>
                <View style={estilos.botao}>
                    <TouchableOpacity style={estilos.button01}>
                        <Text style={estilos.button01.text}>Salvar alterações</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.botao}>
                    <TouchableOpacity style={estilos.button02}>
                        <Image style={estilos.lixo} source={require('../imagem/lixeira.png')}/>
                        <Text style={estilos.button02.text}>Excluir</Text>
                    </TouchableOpacity>
                </View>
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
        flex:60,
        paddingTop:90,
        alignItems:'center'
    },
    botoes:{
        flex: 50
    },
    data:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    vacina:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft:61,
        alignItems:'center'
    },
    dose:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight:20,
        paddingLeft:115,
        
    },
    comprovante:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft:25,
        alignItems:'center'
    },
    proxvacina:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingEnd:10,
        alignItems:'center'
    },
    botao:{
        flex:20
    },
    button01:{
        text:{
            color: 'white',
            fontSize: 16,
            marginTop: 5,
            marginBottom: 5
        },
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#37BD6D',
        width: 150,
        height: 35,
        alignSelf: 'center'
    },
    button02:{
        text:{
            color: 'white',
            fontSize: 16,
            resizeMode: 'contain',
            marginRight: 5,
        },
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FD7979',
        width: 100,
        height: 32,
        alignSelf: 'center',
        padding: 5,
        paddingHorizontal: 5,
        elevation: 5,
        
    },
    inputs:{
        borderWidth: 0,
        backgroundColor: 'white',
        width: 225,
        height: 26, 
        margin:5
    },
    textos:{
        color:'white',
        textAlign:'right',  
    },
    lixo:{
        width:15,
        height:17,
        marginRight:5,
    
    },
    telaRadio: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    telaDoses: {
        flexDirection: 'row',
        
        
        alignItems:'center'
    },
    textosD:{
        padding:6,
        color:'white',
    },
    textosDoses:{
        color:'white',
        fontSize:12
    }
})
export default Editar