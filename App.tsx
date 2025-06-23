import { Pressable, Text, View } from 'react-native';
import s from "./styles/Home.style"
import Card from './components/Card.component';
import redirectUrl from './utils/redirectUrl';
import { useEffect, useState } from 'react';
import DadosClimaticosType from './types/DadosClimaticos.type';
import dadoClimatico from './database/dadosClimaticos';

function App() {
    const [dado, setDado] = useState<DadosClimaticosType>()

    useEffect(() => {
        setDado(dadoClimatico) // aqui fica a lógica de requisição na api, mas como não precisa eu deixei uma constante 'v'
    }, [dado])

    return (
        <View style={s.container}>
            <Text style={s.title}>Tempo Agora!</Text>
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
            <Pressable style={s.button} onPress={() => redirectUrl("https://www.accuweather.com/pt/br/brazil-weather")}>
                <Text style={s.buttonText}>Mais informações</Text>
            </Pressable>
        </View>
    );
}

export default App