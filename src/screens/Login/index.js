import React, { Component } from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image, ScrollView, Switch } from 'react-native';
import { Container, Content, Icon, Button } from 'native-base';
import GlobalStyle from '../../helper/GlobalStyle';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    _goForLogin = () => {

        this.props.navigation.navigate('NetworkDetailScreen');
    }




    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
                {/* <StatusBar translucent={false} backgroundColor="blue" barStyle="dark-content" color="black" /> */}
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="black" translucent={true} />





                {/* <View style={{ flex: 1, marginTop: 30, }}> */}
                {/* <View style={{ flex: 1, marginTop: 10, alignItems: 'center', }}> */}
                <Image
                    source={require('../../../assets/images/HeaderText.png')}
                    style={{
                        height: 30, alignSelf: 'center', marginTop: 30,
                        //height:'50%',
                        width: 122,

                    }}

                />



                {/* </View> */}


                <View style={{ height: 792 * .3, width: 882 * .3, alignSelf: 'center', marginTop: 5 }}>
                    <ImageBackground
                        source={require('../../../assets/images/cloud.png')}
                        style={{ height: 792 * .3, width: 882 * .3, alignSelf: 'center' }}
                    >
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../../assets/images/fullOctopus.png')}
                        style={{ height: 212, width: 162, alignSelf: 'center', position: 'absolute' }}
                    >
                    </ImageBackground>
                </View>




                <TextField style={{fontSize:16}}
                    label='Login'
                    fontSize={16}
                    textColor='white'
                    tintColor='rgb(101,209,189)'
                    baseColor='rgb(56,55,56)'
                    value={this.state.email}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onFocus={this.onFocus}
                    onChangeText={this.onChangeText}

                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <TextField style={{fontSize:16}}
                            label='Password'
                            fontSize={16}
                            textColor='white'
                            tintColor='rgb(101,209,189)'
                            baseColor='rgb(56,55,56)'
                            secureTextEntry
                            value={this.state.password}
                            onFocus={this.onFocus}
                            onChangeText={this.onChangeText}


                        />
                    </View>


                    {/* <View style={{position:'absolute',flexDirection:'row',backgroundColor:'red',}}>
                        <View style={{flex:1}}></View>
                    <Image
                        source={require('../../../assets/images/eye.png')}
                        style={{
                            height: 20, 
                            //height:'50%',
                            width: 30,

                        }}

                    />
                    </View> */}
                </View>


                <Text style={{ justifyContent: 'center', alignSelf: 'center', padding: 30, color: 'rgb(101,209,189)' }}>Forgot Your Password?</Text>



                <View style={{ flex: 1, }}>
                    <View style={{ flex: 1 }}></View>
                    <TouchableOpacity onPress={() => this._goForLogin()} >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#50DEC4', '#50A1E0']}
                            style={{ padding: 15 }}>
                            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 20, color: 'white' }}>Log In</Text>
                        </LinearGradient>
                    </TouchableOpacity>



                </View>







            </View>
        )
    }
}