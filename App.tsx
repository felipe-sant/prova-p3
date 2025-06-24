import { Pressable, Text, View } from 'react-native';
import s from "./styles/Home.style"
import Card from './components/Card.component';
import redirectUrl from './utils/redirectUrl';
import { useEffect, useState } from 'react';
import DadosClimaticosType from './types/DadosClimaticos.type';
import dadoClimatico from './database/dadosClimaticos';
import { Picker } from '@react-native-picker/picker';

function App() {
    const [dado, setDado] = useState<DadosClimaticosType>()
    const [selectedCity, setSelectedCity] = useState("SP")

    useEffect(() => {
        setDado(dadoClimatico[0]) // aqui fica a lógica de requisição na api, mas como não precisa eu deixei uma constante 'v'
    }, [])

    function handleCity(itemValue: any) {
        setSelectedCity(itemValue)
        const selectedDado = dadoClimatico.filter((item) => item.sigla === itemValue)[0]
        setDado(selectedDado)
    }

    return (
        <View style={s.container}>
            <Text style={s.title}>Tempo Agora!</Text>
            <View style={s.selectBox}>
                <Picker
                    selectedValue={selectedCity}
                    onValueChange={(itemValue) => handleCity(itemValue)}
                    style={s.select}
                >
                    {dadoClimatico.map((dado, index) => <Picker.Item key={index} label={dado.cidade} value={dado.sigla} />)}
                </Picker>
            </View>
            <View style={s.cards}>
                {dado ? (
                    <>
                        <Card dado={dado} tipo="temperatura" />
                        <Card dado={dado} tipo="umidade" />
                        <Card dado={dado} tipo="vento" />
                        <Card dado={dado} tipo="condicao" />
                    </>
                ) : (
                    <>
                        <Text>Dados não encontrados :/</Text>
                    </>
                )}
            </View>
            <Pressable style={s.button} onPress={() => console.log(dado)}>
                <Text style={s.buttonText}>Mais informações</Text>
            </Pressable>
        </View>
    );
}

export default App