import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles'
import logo from '../../images/logo.png'
export default function WelcomeScreen(props){
    return (
        <View style={styles.welcome_screen}>
            <View style={styles.part}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.motto}>Start talking to an open source world</Text>
            </View>

            <View style={styles.part}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btn_txt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btn_txt}>SignUp</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.footer}>
                    <Text>View on Github</Text>
                    <Text>About</Text>
                </View>
        </View>
    )
}
