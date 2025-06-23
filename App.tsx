import { StatusBar } from 'expo-status-bar';
import { Button, Linking, Pressable, Text, View } from 'react-native';
import s from "./styles/Home.style"
import Card from './components/Card.component';
import redirectUrl from './utils/redirectUrl';

function App() {
    return (
        <View style={s.container}>
            <Text style={s.title}>Tempo Agora!</Text>
            <View style={s.cards}>
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
            <Pressable style={s.button} onPress={() => redirectUrl("https://www.accuweather.com/pt/br/brazil-weather")}>
                <Text style={s.buttonText}>Mais informações</Text>
            </Pressable>
        </View>
    );
}

export default App