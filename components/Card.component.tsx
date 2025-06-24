import { Image, ImageSourcePropType, Text, View } from "react-native";
import DadosClimaticosType from "../types/DadosClimaticos.type";
import { useEffect, useState } from "react";
import cardGeral from "../styles/Card.style"
import cardCondicao from "../styles/CardCondicao"
import cardTemperatura from "../styles/CardTemperatura.style"
import cardUmidade from "../styles/CardUmidade"
import cardVento from "../styles/CardVento"

export default function Card(props: { tipo: string, dado: DadosClimaticosType }) {
    const { tipo, dado } = props
    const [s, setS] = useState<any>(cardGeral)
    const [texto, setTexto] = useState<string>("")
    const [image, setImage] = useState<ImageSourcePropType | undefined>(require("../assets/temperatura.png"))

    useEffect(() => {
        if (tipo === "condicao") {
            setS(cardCondicao)
            setTexto(dado.condicaoGeral)
            setImage(require("../assets/clima.png"))
        } else if (tipo === "temperatura") {
            setS(cardTemperatura)
            setTexto(dado.temperatura.toString()+"°C")
            setImage(require("../assets/temperatura.png"))
        } else if (tipo === "umidade") {
            setS(cardUmidade)
            setTexto(dado.umidade.toString()+"%")
            setImage(require("../assets/umidade.png"))
        } else if (tipo === "vento") {
            setS(cardVento)
            setTexto(dado.velocidadeVento.toString()+" km/h")
            setImage(require("../assets/vento.png"))
        } else {
            setS(cardGeral)
            setTexto("")
            setImage(require("../assets/undefined.png"))
        }
    })

    return (
        <View style={s.container}>
            <Image style={s.imagem} source={image} />
            <Text style={s.texto}>{texto}</Text>
        </View>
    )
}