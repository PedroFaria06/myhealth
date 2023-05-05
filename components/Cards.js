import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Cards = (props) => {

    function showEditarVacina() {
        props.navigation.navigate('Editar Vacina')
    }

    return (
        <TouchableOpacity style={styles.container} onPress={showEditarVacina}>
            <Text style={styles.nome}>{props.item.nome}</Text>
            <Text style={styles.dose}>{props.item.dose}</Text>
            <Text style={styles.dataDose}>{props.item.data}</Text>            
            <Image source={require('../imagem/ComprovanteVacina.jpg')} 
            style={{ resizeMode: 'cover', width: 155, height: 80, }} />
            {(props.item.proxima) ?
                <Text style={styles.proximaDose}>Próxima dose em: {props.item.proxima}</Text>
                :
                <Text style={styles.proximaDose}>Não há próxima dose</Text>
            }

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '45%',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        padding: 5,
    },
    nome: {
        textAlign: 'center',
        color: '#3e92c6',
        fontSize: 20
    },
    dose: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#3e92c6',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '60%',
    },
    dataDose: {
        textAlign: 'center',
        color: 'grey'
    },
    proximaDose: {
        textAlign: 'right',
        fontSize: 10,
        color: 'red'
    }
})

export default Cards;

