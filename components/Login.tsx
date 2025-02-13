import {StyleSheet, Text, TextInput, View} from 'react-native'
import React, { useState } from 'react'
import {Octicons} from '@expo/vector-icons'
import Ripple from 'react-native-material-ripple'
import {TouchableOpacity} from 'react-native'


export default function Login()
{
    const [username, set_Username] = useState('')
    const [password, set_Password] = useState('')
    const [isLoading, setIsLoading] = useState(false)


   return (
    <View style ={styles.container}>
        <View style={styles.formInputWrapper}>
            <Octicons name="person" size={20} color="#0005" />
            <TextInput 
            cursorColor={'#000'} 
            style={styles.input}
            value={username}
            onChangeText={username => set_Username(username)} 
            placeholder='Enter Username' />
            </View>

             <View style={styles.formInputWrapper}>
            <Octicons name="shield-lock" size={20} color="#0005" />
            <TextInput 
            cursorColor={'#000'} 
            style={styles.input}
            value={password}
            onChangeText={password => set_Password(password)} 
            secureTextEntry={true}
            placeholder='Enter Password' />
            </View>  

            <Ripple
                rippleColor="rgb(0, 0, 0)"
                rippleOpacity={0.05}
                rippleDuration={300}
                rippleCentered={true}
                rippleFades={false}
                rippleContainerBorderRadius={20}
                style= {styles.login}
                >

                <Text style={styles.buttonText}>Sign In</Text>
            </Ripple>
            <View style={styles.auth_question}>
                <Text style={styles.question_text}>Account does not exist</Text>
                <Ripple
                rippleColor="rgb(0, 0, 0)"
                rippleOpacity={0.05}
                rippleDuration={300}
                rippleCentered={true}
                rippleFades={false}
                rippleContainerBorderRadius={20}
                style= {[styles.login, styles.signup_button]}
                >

                <Text style={[styles.buttonText, styles.signup_button]}>Create Account</Text>
            </Ripple>
            </View>

            <View style={styles.loginIssueWrapper}>
                <Text>Having trouble signing in?</Text>
                <TouchableOpacity>
                    <Text style={styles.contactUs}>Contact Us</Text>
                </TouchableOpacity>
            </View>
    </View>
   ) 
}

const styles = StyleSheet.create({
    container : 
    {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    loginIssueWrapper:
    {
        width: '90%',
        alignItems: 'center',
        marginTop: 20
    },

    contactUs:
    {

    },

    formInputWrapper : 
    {
        width: '90%',
        height: 55,
        backgroundColor: '#f7f9ef',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 0,
        marginBottom: 10 

    },

    input:
    {
        width:'90%',
        height: '100%',
        marginLeft: 10,
    
    },

    login:
    {
        padding: 15,
        backgroundColor: '#17469F',
        alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    buttonText:
    {
        fontSize: 10,
        color: '#fff'
    },
    auth_question:
    {
        width: '90%',
        marginTop: 20
    },

    question_text:
    {
        fontSize: 16,
        marginRight:5,
        marginTop: 10
    },

    signup_button:
    {
        width: '100%',
        marginTop: 7,
        borderColor: '#17469F',
        backgroundColor: 'fff',
        borderWidth: 1,
        paddingVertical: 10
    },

    signup_button_text:
    {
        color: '#17469F'
    }


})