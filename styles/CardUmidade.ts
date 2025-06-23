import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#489FB5',
        width: 150,
        height: 150,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imagem: {
        position: 'absolute',
        top: 20,
        left: 10,
        width: 50,
        height: 50,
    },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E2F0F3',
        textAlign: 'center',
    }
});

export default styles;