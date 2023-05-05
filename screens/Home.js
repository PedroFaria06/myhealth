import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity, Appearance, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Cards from '../components/Cards';

const Home = (props) => {
    const navigation = useNavigation();

    const Nova = () => {
        navigation.navigate('Nova vacina')
    };
    const goToEditar = () => {
        props.navigation.push('Editar vacina')
    }


    const listaVacinas = [
        {
            id: 1,
            nome: 'BCG',
            data: '11/06/2022',
            dose: 'Dose única',
            proxima: ''
        },
        {
            id: 2,
            nome: 'Febre Amarela',
            data: '11/10/2022',
            dose: '1a. dose',
            proxima: '11/10/2023'
        },
        {
            id: 3,
            nome: 'Hepatite B',
            data: '11/08/2022',
            dose: '1a. dose',
            proxima: '11/10/2022'
        },
        {
            id: 4,
            nome: 'Poliomelite',
            data: '11/08/2022',
            dose: '1a. dose',
            proxima: '11/10/2022'
        },
        
    ]

    console.log(listaVacinas);

    return (
        <View style={estilos.main}>

            <View style={estilos.areaContainer}>
                <View style={estilos.pesquisaContainer}>
                    <View >
                        <Image source={require('../imagem/lupa.png')} style={estilos.vaccineIcon} />
                    </View>
                    <TextInput
                        style={estilos.searchInput}
                        placeholder="PESQUISAR VACINA..."
                        placeholderTextColor="#8B8B8B"
                        clearButtonMode="while-editing"
                        returnKeyType="search"
                        onSubmitEditing={() => console.log('Pesquisa iniciada')}
                    />
                </View>
            </View>

            <View style={estilos.aCard}>
            <FlatList data={listaVacinas} renderItem={({ item }) => <Cards item={item} navigation={props.navigation} />} keyExtractor={item => item.id} numColumns={2} />
            </View>

            <View style={estilos.click}>
                <TouchableOpacity style={[estilos.button, { backgroundColor: '#37BD6D' }]} onPress={Nova}>
                    <Text style={estilos.buttonText}>Nova vacina</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};




const estilos = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ADD4D0',
    },
    areaContainer: {
        paddingBottom: 20,
        paddingTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    pesquisaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        height: 25,
        width: '90%',
        paddingHorizontal: 10,

    },

    searchInput: {
        padding: 3,
        marginLeft: 5,
        fontSize: 14,
        fontFamily: 'AveriaLibre-Bold',
        paddingLeft: 1,
    },
    vaccineIcon: {
        width: 18,
        height: 18,
        tintColor: 'grey',
    },

    aCard: {
        flex: 7,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    card: {
        width: '45%',
        margin: 5,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 5,
    },

    imgVac: {
        resizeMode: 'cover',
        width: 150,
        height: 80,
    },
    cardContainer: {
        text: {
            color: 'white',
            fontSize: 12,
            fontFamily: 'AveriaLibre-Bold'
        },
        height: 15,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#419ED7',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Bold',
    },

    click: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 3,
        padding: 7,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Bold',
    }
});
export default Home;