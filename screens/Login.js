import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import Navigation from './Navigation'
import Home from './Home'

const Login = (props) =>{
  const [email, setEmail] = useState('')
  const [Senha, setSenha] = useState('')

  const TelaHome = () => {props.navigation.navigate('Home')}
  const TelaCriar = () => {props.navigation.navigate('CriarConta')}
  const TelaEsqueci = () => {props.navigation.navigate('Recuperar')}
  
  return (
    <View style={estilos.main}>
      <ImageBackground
        source={require('../imagem/topo.jpg')}
        resizeMode="cover"
        style={estilos.topo} 
        blurRadius={30}>
          
        {/*Titulo*/}
        <View style={estilos.title}>
          <Image
            style={estilos.tinyLogo}
            source={require('../imagem/agulha.png')}
          />
          <Text style={estilos.titulo}>MyHealth</Text>
        </View>

        <View style={estilos.subtitulo}>
          <Text style={estilos.titulo2}>Controle as suas vacinas e fique seguro</Text>
        </View>
        {/*Login*/}
        <View style={estilos.inputs}>
          <View style={estilos.email}>
            <Text style={estilos.textEmail}>E-mail</Text>
            <TextInput
              style={estilos.textInput}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={estilos.senha}>
            <Text style={estilos.textSenha}>Senha</Text>
            <TextInput
              style={estilos.textInput}
              value={Senha}
              secureTextEntry={true}
              onChangeText={setSenha}
            />
          </View>
        </View>

        <View style={estilos.bt01}>
          <TouchableOpacity style={estilos.button} onPress={TelaHome}>
            <Text style={estilos.button.text}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.bt02}>
          <TouchableOpacity style={estilos.button2} onPress={TelaCriar}>
            <Text style={estilos.button2.text2}>Criar minha conta</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.bt03}>
          <TouchableOpacity onPress={TelaEsqueci}  style={estilos.button3}>
            <Text style={estilos.button3.text3}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const estilos = StyleSheet.create({
  /*TODOS OS FLEX */
  main: {
    flex: 100, 
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 20,
    top: 50
  },
  subtitulo: {
    flex: 20
  },
  inputs: {
    flex: 25
  },
  bt01: {
    flex: 10,
  },
  bt02: {
    flex: 10
  },
  bt03: {
    flex: 10
  },

  topo: {
    flex: 100,
    borderRadius: 15,
    resizeMode: 'cover',
    justifyContent: 'center',
    

  },

  /*TITULO MYHEALTH */
  titulo: {
    fontSize: 48,
    color: '#419ED7'
  },
  /*SUBTITULO (TEXTO) */
  titulo2: {
    fontSize: 33,
    color: '#419ED7',
    textAlign: 'center'
  },

  /*CAIXA DE EMAIL E SENHA */
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: 'white',
    width: 275,
    height: 36
  },

  /*BOTAO ENTRAR */
  button: {
    text: {
      color: 'white',
      fontSize: 24,
      marginTop: 5,
      marginBottom: 5
    },
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#37BD6D',
    width: 110,
    height: 40,
    alignSelf: 'center'
  },

  /*BOTÃO CRIAR MINHA CONTA */
  button2: {
    text2: {
      color: 'white',
      fontSize: 24,
      marginTop: 5,
      marginBottom: 5
    },
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#419ED7',
    width: 220,
    height: 45,
    alignSelf: 'center'
  },

  /*BOTÃO ESQUECI MINHA SENHA */
  button3: {
    text3: {
      color: 'white',
      fontSize: 24,
      marginTop: 5,
      marginBottom: 5
    },
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#B0CCDE',
    width: 250,
    height: 45,
    alignSelf: 'center'
  },

  /*IMAGEM AGULHA */
  tinyLogo: {
    width: 60,
    height: 50
  },

  /*MODIFICAÇÕES NOS INPUTS E TEXTOS */
  email: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  senha: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 15
  },
  textEmail: {
    fontSize: 20,
    color: 'white'
  },
  textSenha: {
    fontSize: 20,
    color: 'white'
  }
})
export default Login
