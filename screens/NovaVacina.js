import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity,Appearance} from 'react-native'
import { useState } from 'react'
import {RadioButton} from 'react-native-paper'

const NovaVacina = () =>{

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
                            <Text style={estilos.textosDoses}>Dose única</Text>
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
                    <TouchableOpacity style={estilos.button}>
                        <Text style={estilos.button.text}>Cadastrar</Text>
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
        flex: 20
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
        width: 225,
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
export default NovaVacina