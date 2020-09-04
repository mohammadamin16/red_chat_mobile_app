import React, {Component, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput, useColorScheme, ScrollView,
} from 'react-native';
import ReconnectingWebSocket from 'reconnecting-websocket';

import Message from './Message';
import WelcomeScreen from './app/screens/WelcomeScreen';

// const url = 'ws://192.168.1.180:8000/ws/chat'
const url = 'wss://super-nice-chat-app-backend.herokuapp.com/ws/chat'


class App extends Component{
    constructor() {
        super();
        this.ws = new ReconnectingWebSocket(url)
        this.state = {
            status:'Connecting...',
            messages:[],
            input:'',
            name:'',
        }
    }
    create_ws = () => {
        console.log('creating ws...')
        this.ws.onmessage = (e) => {
            const data = JSON.parse(e.data)
            switch (data['type']) {
                case 'old_messages':
                    this.setState({messages:data['messages']})
                    break
                case 'new_message':
                    this.setState(prevState => prevState['messages'].push(data['message']))
                    break
            }
        }
        this.ws.onclose = () => {
            this.setState({status:'Connecting...'})
        }
        this.ws.onopen = () => {
            this.setState({status:'Red Chat'})

        }
    }
    componentDidMount() {
        this.create_ws()
    }

    send = () => {
        if (this.state.input !== '' && this.state.name !== ''){
            this.setState({input:''})
            this.ws.send(JSON.stringify({
                message:{
                    body:this.state.input,
                    name:this.state.name,
                }
            }))
        }
        if (this.state.name === ''){
            alert('sending message without name?\n' +
                'please insert a name first :)')

        }

    }

    render() {
        // return(
        //     <WelcomeScreen />
        // )
        return (
            <View style={styles.welcome_screen}>
                <View style={styles.top_bar}>
                    <Text style={styles.title}>{this.state.status}</Text>
                    <TextInput
                        onChangeText={value => this.setState({name:value})}
                        style={styles.name_input} placeholder={'your name?'} placeholderTextColor={'#cd8f8f'}/>
                </View>
                <View style={styles.content}>
                    <ScrollView style={styles.scroll_view}>
                        {this.state.messages.map(msg => (
                            <Message msg={msg} name={this.state.name} />
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.bottom_bar}>
                    <TextInput
                        onSubmitEditing={this.send}
                        onChangeText={value => this.setState({input:value})}
                        style={styles.message_input}
                        value={this.state.input}
                        placeholder={'type your message here...'}
                    />
                    <TouchableOpacity
                        onLongPress={() => {alert('long press!')}}
                        onPress={this.send}
                        style={styles.send_btn}>
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
    welcome_screen:{
        flex:1,
    },
    top_bar:{
        flexDirection: 'row',
        backgroundColor:colors.color6,
        height:50,
        width: '100%',
        alignItems:'center',
        justifyContent:'space-between',
    },
    content:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.color4,
    },
    title:{
        fontSize:25,
        color:colors.color3,
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginLeft: 10,
    },
    bottom_bar:{
        flexDirection:'row',
        backgroundColor: colors.color6,
        width:'100%',
        height:40,
        justifyContent:'center',
        alignItems: 'center',
        paddingRight:5,
        paddingLeft:5,
    },
    status:{
        color:colors.color2
    },
    message_input:{
        marginLeft:10,
        marginRight:10,
        flex:1,
        height: 30,
        padding: 0,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor:colors.color4,
        borderRadius:100,
        color:'#000',
        textAlign:'right',
    },
    send_btn:{
        backgroundColor:colors.color3,
        padding:5,
        borderRadius: 20,
    },
    name_input:{
        width:'40%',
        marginRight: 10,
        padding:0,
        fontStyle:'italic',
        color:colors.color5,
        textAlign:'right',
    },
    scroll_view:{
        width:'95%'
    }
});

export default App;
