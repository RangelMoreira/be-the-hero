import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'; //informações fixar para o projeto

export default StyleSheet.create({
    container:{
        flex:1,//valor de da tela toda
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight +20,
        
    },

    header:{
        flexDirection: 'row',//por padrão o react alinha pela vertical, um elemento em cima do outro
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText:{
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold:{
        fontWeight: 'bold',
    },

    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color:'#13131a',
        fontWeight: 'bold'
    },
    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList:{
        marginTop: 32,
    },

    Incidents:{
        padding:24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    }, 

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailButtonText:{
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }


});