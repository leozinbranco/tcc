import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import axios from 'axios';
import { api_token } from '../../constants/token.json';
import Style from './style'


/**
 * Essa é a Home Page do App.
 * @param {React Navigation} navigation atributo de navegação do app
 * @returns {JSX} Homescreen do Aplicativo
 */
export default function Home({ navigation }) {

    const [animalsData, setAnimalsData] = useState([])

    //console.log(api_token);
    //alert(api_token);
    useEffect(() => {
        getAnimals();
        //alert("oii")
    }, [])

    const getAnimals = async () => {

        try {           //   https://api-tcc-simon.herokuapp.com/animals?limit=2
            await axios.get('https://api-tcc-simon.herokuapp.com/animals', {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    alert(JSON.stringify(response.data));
                    setAnimalsData(response.data)
                })
                .catch((e) => {
                    alert("Ocorreu um erro !" + e.response.data.message);


                })

        } catch (e) {
            alert(e);
        }
    }


    return (
        <SafeAreaView >
            <ScrollView >
                <Text style={Style.header}>
                    Home
                </Text>

                <Text style={Style.title}>
                    Animais disponiveis para apadrinhamento
                </Text>

                <FlatList
                    style={{ width: '100%' }}
                    horizontal={true}
                    data={animalsData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Apadrinhar', { item })}>
                            <AnimalCard data={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()}
                    ListFooterComponent={<ButtomCard onPress={() => navigation.navigate('Apadrinhar')} />}
                />


                <Text style={Style.title}>
                    Disponiveis para adoção
                </Text>
                <FlatList
                    style={{ width: '100%' }}
                    horizontal={true}
                    data={animalsData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Apadrinhar', { item })}>
                            <AnimalCard data={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()}
                    ListFooterComponent={<ButtomCard onPress={() => navigation.navigate('Apadrinhar')} />}
                />

                <Text style={Style.title}>
                    Ongs disponiveis
                </Text>
                <FlatList
                    style={{ width: '100%' }}
                    horizontal={true}
                    data={animalsData}
                    renderItem={({ item }) => (
                        <OngCard data={item} />
                    )}
                    keyExtractor={item => item.id.toString()}
                />

            </ScrollView>

            <StatusBar />
        </SafeAreaView >
    );
}

function AnimalCard({ data, onPress }) {
    return (
        <View style={Style.card}>
            <Image style={Style.petImage}
                source={require('../../../assets/gato.png')}
            />

            <Text>
                {`${data.name}`}
            </Text>
        </View>
    )
}

function OngCard({ data }) {
    return (
        <View style={Style.card}>

            <Image style={Style.ongImage}
                source={require('../../../assets/gato.png')}
            />

            <Text>
                {`${data.name}`}
            </Text>
        </View>
    )
}

function ButtomCard({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={Style.card}>
                <Image style={Style.petImage}

                />

                <Text>
                    Ver mais
                </Text>
            </View>
        </TouchableOpacity>

    )
}