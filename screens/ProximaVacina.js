import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity,Appearance} from 'react-native'
import { useState } from 'react'

const ProximaVacina = () =>{

    return(
        <View style={estilos.main}>
            <View style={estilos.tela}>
                <View style={estilos.caixa01}>
                    <Text style={estilos.texto01}>BCG</Text>
                    <Text style={estilos.texto02}>20/09/2026</Text>
                </View>
                <View style={estilos.caixa02}>
                    <Text style={estilos.texto01}>DTpa</Text>
                    <Text style={estilos.texto02}>20/09/2024</Text>
                </View>
                <View style={estilos.caixa03}>
                    <Text style={estilos.texto01}>Sarampo</Text>
                    <Text style={estilos.texto02}>03/04/2026</Text>
                </View>
            </View>
            <View style={estilos.botoes}>
                <View style={estilos.botao}>
                    <TouchableOpacity style={estilos.button}>
                        <Text style={estilos.button.text}>Nova vacina</Text>
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
        paddingTop:20
    },
    botoes:{
        flex: 20
    },
    botao:{
        flex:20
    },
    button:{
        text:{
            color: 'white',
            fontSize: 16,
            marginTop: 5,
            marginBottom: 5
        },
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#37BD6D',
        width: 120,
        height:35,
        alignSelf: 'center'
    },
    caixa01:{
        backgroundColor:'white',
        borderRadius: 10,
        margin:10,
        paddingBottom:5
    },
    caixa02:{
        backgroundColor:'white',
        borderRadius: 10,
        margin:10,
        paddingBottom:5
    },
    caixa03:{
        backgroundColor:'white',
        borderRadius: 10,
        margin:10,
        paddingBottom:5
    },
    texto01:{
        color:'#3F92C5',
        fontSize:22,
        paddingLeft:15
    },
    texto02:{
        color:'gray',
        fontSize: 14,
        paddingLeft:15

    }
})
export default ProximaVacina