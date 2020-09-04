import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    welcome_screen:{
        flex:1,
        backgroundColor:'#FFE0E0',
        alignItems:'center',
    },
    logo:{
        width:200,
        height:200,
        marginTop: 20
    },
    motto:{
        fontSize:20,
        fontFamily:'Roboto',
        marginTop:40,
    },
    btn:{
        backgroundColor:'#E27878',
        width:'70%',
        height:44,
        borderRadius:30,
        justifyContent:'center',
        margin:20,
    },
    btn_txt:{
        textAlign:'center',
        fontFamily: 'Roboto'
    },
    part:{
        flex:1,
        width:'100%',
        alignItems:'center',
    },
    footer:{
        flexDirection:'row',
        // backgroundColor:'red',
        width:'100%',
        justifyContent:'space-between',
        padding:10,
    }
})
