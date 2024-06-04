import { Text, TouchableHighlight, StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window")

export default props => {

    const estilosBotao = [estilos.botao]
    if (props.dobro) estilosBotao.push(estilos.botaoDuplo)
    if (props.triplo) estilosBotao.push(estilos.botaoTriplo)
    if (props.operacao) estilosBotao.push(estilos.botaoOperacao)

    return(
        <TouchableHighlight>
            <Text style={estilosBotao}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    botao: {
        fontSize: 40,
        width: width / 4,
        height: width / 4,
        padding: 10,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888",
        backgroundColor: "#f0f0f0"
    },
    botaoDuplo: {
        width: width/4 * 2
    },
    botaoTriplo: {
        width: width/4 * 3
    },
    botaoOperacao: {
        backgroundColor: "#E53B0D"
    }
})