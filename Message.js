import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default function Message(props){
    if (props.name === props.msg.name){
        return(
            <View style={[styles.msg_container, styles.user_msg_container]}>
                <Text style={[styles.msg_body, styles.user_msg_body]}>
                    {props.msg.body}
                </Text>
                {/*<Text*/}
                {/*    onLongPress={() => alert(props.msg.name)}*/}
                {/*    style={[styles.msg_name, styles.user_msg_name]}>*/}
                {/*    {props.msg.name.substring(0,2).toUpperCase()}*/}
                {/*</Text>*/}
            </View>
        )
    }else{

        return(
            <View style={styles.msg_container}>
                <Text
                    onLongPress={() => alert(props.msg.name)}
                    style={styles.msg_name}>
                    {props.msg.name.substring(0,2).toUpperCase()}
                </Text>
                <Text style={styles.msg_body}>
                    {props.msg.body}
                </Text>
            </View>
        )
    }
}


const colors = {
    color1:'#D1193E',
    color2:'#EE3E38',
    color3:'#F86E51',
    color4:'#FBA465',
    color5:'#F2C85B',
    color6:'#3A0751',
}

const styles = StyleSheet.create({
    msg_container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    user_msg_container:{
        justifyContent:'flex-end'
    },
    msg_body:{
        backgroundColor:colors.color2,
        borderRadius:20,
        margin:5,
        paddingTop:5,
        paddingBottom:5,
        paddingRight:20,
        paddingLeft:20,
        fontSize:20,
    },
    user_msg_body:{
        backgroundColor:colors.color5
    },
    msg_name:{
        padding:10,
        borderRadius: 100,
        backgroundColor: colors.color1,
        fontWeight:'bold',
    },
    user_msg_name:{
        backgroundColor: colors.color5
    }
});
