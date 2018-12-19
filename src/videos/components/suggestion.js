import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
function Suggestion(props) {
    return(
        <View style={style.container}>
            <View style={style.left}>
                <Image
                    style={style.cover}
                    source={require('../../../assets/logo.png')}
                />
                <View style={style.genre}>
                    <Text style={style.genreText}>
                        Accion
                    </Text>
                </View>
            </View>
            <View style={style.right}>
                <Text style={style.title}>Avengers</Text>
                <Text style={style.year}>2007</Text>
                <Text style={style.rating}>5 Estrellas</Text>
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    genre:{
        position: 'absolute',
        left: 0,
        top:0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    genreText:{
        color:'white',
        fontSize:11,
    },
    cover:{
        height:150,
        width: 100,
        resizeMode: 'contain'
    },
    right:{
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    title:{
        fontSize:18,
        color:'#44546b'
    },
    year:{
        backgroundColor:'#70b124',
        paddingVertical: 4,
        color: 'white',
        fontSize: 11,
        borderRadius:5,
        overflow:'hidden',
        alignSelf: 'flex-start'
    },
    rating:{
        color:'#6b6b6b',
        fontSize:14,
        fontWeight: 'bold'
    },
    left:{

    },
});
export default Suggestion;