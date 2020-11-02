import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, StatusBar, ImageBackground, Image, Switch, ScrollView } from 'react-native'
import { Container, Content, Button, Footer, } from 'native-base';

import { ProgressCircle } from 'react-native-svg-charts'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import GlobalStyle from '../../src/helper/GlobalStyle'
import { LineChart } from 'react-native-svg-charts'

import { Avatar, Badge, Icon, } from 'react-native-elements'

import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SettingScreen from './Settings'
import Styles from './Settings/Styles';

import { Dimensions, Animated, } from 'react-native';
//import { Button } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

console.disableYellowBox = true;

const data_1 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
const data_2 = [350, 10, 300, 75, -24, -24, 285, 91, 35, 353, -53, 84, 50, -20, 80];

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        domain: 'mmx-ds.cdn.whatsapp.net',
        status: 'Blocked',
        reply: '-0.1ms',
        action: 'Whitelist',
        colorDomain: 1,
        colorStatus: 1,
        colorAction: 2
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        domain: 'www.googleapis.com',
        status: 'Ok',
        reply: '2.8ms',
        action: 'Blacklist',
        colorDomain: 2,
        colorStatus: 2,
        colorAction: 1
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        domain: 'ss-prod-ue1-notif-37.aws.adon',
        status: 'Ok',
        reply: '2.7ms',
        action: 'Blacklist',
        colorDomain: 2,
        colorStatus: 2,
        colorAction: 1
    },
    {
        id: '58694a0f-3da1-481f-bd96-145571e29d72',
        domain: 'adservice.google.com',
        status: 'Blocked',
        reply: '-0.2ms',
        action: 'Whitelist',
        colorDomain: 1,
        colorStatus: 1,
        colorAction: 2
    },
];



export default class NetworkDetailScreen extends Component {
    constructor() {
        super();
        this.state = {
            switch1Value: true,
            mySetting: false,
        }
        this.animatedValue = new Animated.Value(viewportHeight - 140);
    }

    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: !value })
    }

    _goForLogin = () => {
        const mySetting = !this.state.mySetting
        //
        this.setState({ mySetting: mySetting })
        //
        if ((mySetting == true)) {
            this.callToast()
        } else {
            this.closeToast()
        }
    }


    callToast() {
        Animated.timing(
            this.animatedValue,
            {
                toValue: 0,
                duration: 350
            }).start();
    }

    closeToast() {
        Animated.timing(
            this.animatedValue,
            {
                toValue: viewportHeight - 140,
                duration: 350
            }).start();
    }

    render() {

        const mySetting = this.state.mySetting

        return (
            <View style={GlobalStyle.container}>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="black" translucent={true} />

                <this.TopHeader />

                <this.NetworkDetail />


                <Animated.View style={{ transform: [{ translateY: this.animatedValue }], height: viewportHeight - 140, paddingBottom: 70, position: 'absolute', left: 0, bottom: 0, right: 0, justifyContent: 'center' }}>
                    <SettingScreen />
                </Animated.View>

                <this.MyFooter />



                <Image
                    source={require('../../assets/images/HalfOctopus.png')}
                    style={{
                        height: 175.5,
                        width: 80.1,
                        position: 'absolute',
                        alignSelf: 'flex-end'
                    }}
                />


            </View>
        )
    }

    MySetting = () => {
        return (
            <Text>My Setting</Text>
        )
    }

    Item = ({ item }) => {

        return (
            <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                <Text
                    numberOfLines={1}
                    style={[styles.itemDefault, styles.itemDomain, (item.colorDomain == 2 ? styles.itemGreen : styles.itemRed)]}
                >
                    {item.domain}
                </Text>
                <Text numberOfLines={1}
                    style={[styles.itemDefault, styles.itemStatus, (item.colorStatus == 2 ? styles.itemGreen : styles.itemRed)]}
                >{item.status}</Text>

                <Text numberOfLines={1}
                    style={[styles.itemDefault, styles.itemReply]}
                >{item.reply}</Text>
                {/* <Text numberOfLines={1} style={{ width: 60 }}>{item.action}</Text> */}
                <Badge
                    textStyle={[styles.itemDefault, styles.itemStatus, (item.colorAction == 2 ? styles.itemGreen : styles.itemRed)]}
                    badgeStyle={[styles.badgeDefault, (item.colorAction == 2 ? styles.badgeGreen : styles.badgeRed)]} value={item.action}
                />
            </View>
        );
    }

    Header = () => {
        return (
            <View style={{ flexDirection: 'row', padding: 15 }}>
                <Text numberOfLines={1} style={[styles.itemBold, styles.itemDomain]}>Domain</Text>
                <Text numberOfLines={1} style={[styles.itemBold, styles.itemStatus]}>Status</Text>
                <Text numberOfLines={1} style={[styles.itemBold, styles.itemReply]}>Reply</Text>
                <Text numberOfLines={1} style={[styles.itemBold, styles.itemAction]}>Action</Text>
            </View>
        );
    }

    NetworkDetail = () => {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', height: 100, paddingLeft: 15, paddingRight: 15, marginTop: 20 }}>
                        <View style={{ backgroundColor: 'red', flex: 1, }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#51dfc4', '#51a0e2']} style={styles.linearGradient}>
                                <View style={{ alignSelf: 'center' }} >
                                    <Image style={{ height: 24, width: 20, alignSelf: 'center', }}
                                        source={require('../../assets/images/Combined.png')}
                                    />
                                    <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>
                                        {this.state.switch1Value ? '1,671' : '0'}
                                    </Text>
                                    <Text style={{ fontSize: 11, alignSelf: 'center', color: 'rgba(255,255,255,.7)' }}>
                                        Total Queries
                                </Text>
                                    <Text style={{ fontSize: 11, alignSelf: 'center', color: 'rgb(255,255,255)' }}>
                                        (35 clients)
                                </Text>
                                </View>
                            </LinearGradient>
                        </View>
                        <View style={{ backgroundColor: 'green', flex: 1, }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#c26ad5', '#3727b0']} style={styles.linearGradient}>

                                <Image style={{ height: 22, width: 20, alignSelf: 'center', }}
                                    source={require('../../assets/images/Shield.png')}

                                />



                                <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', fontWeight: 'bold', }}>
                                    {this.state.switch1Value ? '127' : '0'}
                                </Text>
                                <Text style={{ fontSize: 11, alignSelf: 'center', color: 'white', color: 'rgba(255,255,255,.7)' }}>
                                    Queries Blocked
                    </Text>
                                <Text style={{ fontSize: 11, alignSelf: 'center', color: 'rgb(216,216,216)' }}>

                                </Text>
                            </LinearGradient>
                        </View>
                        <View style={{ backgroundColor: 'blue', flex: 1 }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#b350de', '#e05259']} style={styles.linearGradient}>

                                <Image style={{ height: 20, width: 20, alignSelf: 'center', }}
                                    source={require('../../assets/images/Pie.png')}

                                />
                                <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>
                                    {this.state.switch1Value ? '7.6%' : '0%'}
                                </Text>
                                <Text style={{ fontSize: 11, alignSelf: 'center', color: 'white', color: 'rgba(255,255,255,.7)' }}>
                                    Percent Blocked
                    </Text>
                                <Text style={{ fontSize: 13, alignSelf: 'center', color: 'white' }}></Text>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 10 }}>
                        <View style={{ flex: 1, }}>

                            <View>
                                <ProgressCircle
                                    style={{ height: 60 }}
                                    progress={0.13}
                                    progressColor={'rgb(80, 226, 194)'}
                                    backgroundColor={'rgb(233, 234, 234)'}
                                    strokeWidth={3}
                                />
                                <View style={{ height: 60, position: "absolute", flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                    <View style={{ flex: 1 }}></View>
                                    <Text style={{
                                        alignSelf: "center",
                                        backgroundColor: "1D2737",
                                        fontSize: 16,
                                    }}>19%</Text>
                                    <View style={{ flex: 1 }}></View>
                                </View>

                            </View>
                            <Text style={{ alignSelf: 'center', fontSize: 11, marginTop: 10, color: 'rgb(113,119,129)' }}>CPU</Text>
                        </View>


                        <View style={{ flex: 1 }}>

                            <View>
                                <ProgressCircle
                                    style={{ height: 60 }}
                                    progress={0.4}
                                    progressColor={'rgb(226,80,80)'}
                                    backgroundColor={'rgb(233, 234, 234)'}
                                    strokeWidth={3}
                                />
                                <View style={{ height: 60, position: "absolute", flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                    <View style={{ flex: 1 }}></View>
                                    <Text style={{

                                        alignSelf: "center",
                                        backgroundColor: "1D2737",
                                        fontSize: 16,
                                    }}>41%</Text>
                                    <View style={{ flex: 1 }}></View>
                                </View>
                            </View>
                            <Text style={{ alignSelf: 'center', fontSize: 11, marginTop: 10, color: 'rgb(113,119,129)' }}>Memory</Text>
                        </View>



                        <View style={{ flex: 1 }}>
                            <View>
                                <ProgressCircle
                                    style={{ height: 60 }}
                                    progress={0.10}
                                    progressColor={'rgb(80, 156, 226)'}
                                    backgroundColor={'rgb(233, 234, 234)'}
                                    strokeWidth={3}
                                />
                                <View style={{ height: 60, position: "absolute", flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                    <View style={{ flex: 1 }}></View>
                                    <Text style={{

                                        alignSelf: "center",
                                        backgroundColor: "1D2737",
                                        fontSize: 16,
                                    }}>4%</Text>
                                    <View style={{ flex: 1 }}></View>
                                </View>
                            </View>
                            <Text style={{ alignSelf: 'center', fontSize: 11, marginTop: 10, color: 'rgb(113,119,129)' }}>Disk</Text>
                        </View>


                        <View style={{ alignItems: 'center', alignSelf: 'center', marginRight: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Badge status="success" badgeStyle={{ backgroundColor: '#50E3C2' }} />
                                <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 12, color: 'rgb(29,39,55)' }}>Network</Text>
                            </View>

                            <View style={{ width: 90, marginTop: 5, marginBottom: 5 }}>
                                <Badge
                                    textStyle={{ color: 'black', fontSize: 12 }}
                                    badgeStyle={{ borderRadius: 16, height: 30, width: 95, paddingLeft: 12, backgroundColor: '#F3F4F5', }}
                                    value="24.2 KB/s" />

                                <View style={{ height: '100%', width: 20 * .8, position: 'absolute', flexDirection: 'column' }}>
                                    <View style={{ flex: 1 }}></View>
                                    <Image style={{ height: 12, width: 10, marginLeft: 6 }}
                                        source={require('../../assets/images/network_uparrow.png')}
                                    />
                                    <View style={{ flex: 1 }}></View>
                                </View>
                            </View>

                            <View style={{ width: 90 }}>
                                <Badge
                                    textStyle={{ color: 'black', fontSize: 12 }}
                                    badgeStyle={{ borderRadius: 16, height: 30, width: 95, paddingRight: 12, backgroundColor: '#F3F4F5', }}
                                    value="24.2 KB/s" />

                                <View style={{ height: '100%', width: '100%', position: 'absolute', flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}></View>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ flex: 1 }}></View>
                                        <Image style={{ height: 12, width: 10, marginRight: 5 }}
                                            source={require('../../assets/images/network_downarrow.png')}
                                        />
                                        <View style={{ flex: 1 }}></View>
                                    </View>
                                </View>
                            </View>
                            {/* <Badge
                                textStyle={{ color: 'black', fontSize: 12 }}
                                badgeStyle={{ borderRadius: 16, height: 30, width: 90, margin: 0, backgroundColor: 'rgb(243,244,245)' }}
                                value="33. KB/s"
                            /> */}


                            {/* <Icon name='md-arrow-up' style={{position:'absolute',left:4,top:20,height:22,width:19,marginLeft:3}}/>
 <Icon name='md-arrow-down' style={{position:'absolute',right:5,top:62,height:25,width:19,marginLeft:3}}/> */}
                        </View>



                    </View>

                    <this.renderSeparator />

                    <View style={{ height: 100 }}>

                        {this.state.switch1Value === true &&
                            <View style={{ height: 100, alignItems: 'center' }}>
                                <LineChart
                                    style={{ height: 100, width: 400 }}
                                    data={data_1}
                                    curve={shape.curveNatural}
                                    svg={{ stroke: 'rgb(80, 227, 194)' }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                >

                                </LineChart>

                            </View>
                        }
                        {this.state.switch1Value === true &&
                            <View style={{ height: 100, width: 400, position: 'absolute', alignSelf: 'center' }}>
                                <LineChart
                                    style={{ height: 100 }}
                                    data={data_2}
                                    curve={shape.curveNatural}
                                    svg={{ stroke: 'rgb(226, 80, 80)' }}
                                    contentInset={{ top: 20, bottom: 20 }}
                                >

                                </LineChart>
                            </View>
                        }


                    </View>



                    <this.renderSeparator />
                    <this.Header />
                    <this.renderSeparator />

                    <FlatList
                        data={this.state.switch1Value ? DATA : null}
                        renderItem={({ item }) => <this.Item item={item} />}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={this.renderSeparator}
                    />


                </View>
            </ScrollView>

        )
    }

    MyFooter = () => {
        return (
            <View style={{ backgroundColor: 'red' }}>

                {/* <Image
                    source={require('../../assets/images/Footer.png')}
                    style={{ height: 100 }}

                /> */}

                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#50DEC4', '#50A1E0']}
                    style={{ padding: 15, height: 80 }}>
                </LinearGradient>


                <View style={{ position: 'absolute', height: '100%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>

                    <Text style={(this.state.switch1Value == true ? styles.buttonGrey : styles.buttonWhite)} >OFF </Text><Text />


                    {this.state.switch1Value === true &&
                        <Button style={{ backgroundColor: 'transparent', padding: 10, elevation: 0, }} onPress={() => { this.toggleSwitch1(this.state.switch1Value) }}>
                            <Image
                                source={require('../../assets/images/switch_blue.png')}
                                style={{ height: 25.2, width: 43.2 }}
                            />
                        </Button>
                    }
                    {this.state.switch1Value === false &&

                        <Button style={{ backgroundColor: 'transparent', padding: 10, elevation: 0, }} onPress={() => { this.toggleSwitch1(this.state.switch1Value) }}>
                            <Image
                                source={require('../../assets/images/switch_inactive.png')}
                                style={{ height: 20, width: 40 }}
                            />
                        </Button>
                    }

                    <Text style={(this.state.switch1Value == true ? styles.buttonWhite : styles.buttonGrey)} >ON </Text><Text />


                </View>
            </View>
        )
    }

    TopHeader = () => {
        const mySetting = this.state.mySetting
        return (

            <View style={{}}>
                <View>
                    <ImageBackground
                        source={require('../../assets/images/LinearHeader.png')}
                        style={GlobalStyle.headerBackground}
                    >
                        <View style={{ padding: 5, flexDirection: 'row', borderRadius: 20, backgroundColor: 'rgb(74,74,74)', bottom: 20, position: 'absolute', left: 10, }}>
                            <Text style={{ color: 'rgb(216,216,216)', fontSize: 14 }}> Usage </Text>
                            <Text style={{ color: 'white', fontSize: 14, paddingRight: 5 }}>$2.44</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../../assets/images/HeaderText.png')}
                                style={GlobalStyle.headerText}
                            />
                        </View>
                        {/**Setting Button Start */}
                        <View style={{ flexDirection: 'row', position: 'absolute', alignItems: 'center', height: '80%' }}>

                            <Button onPress={() => this._goForLogin()} style={{ backgroundColor: 'transparent', paddingLeft: 20, paddingRight: 10 }}>

                                {mySetting === false &&
                                    <Image
                                        source={require('../../assets/images/Mask.png')}
                                        style={{ height: 20, width: 20, paddingLeft: 10 }}
                                    />
                                }
                                {mySetting === true &&
                                    <Image
                                        source={require('../../assets/images/settings.png')}
                                        style={{ height: 17.55, width: 21.6, paddingLeft: 10 }}
                                    />
                                }

                                <Image
                                    source={require('../../assets/images/dropdown.png')}
                                    style={{ height: 7.5, width: 13.5, marginLeft: 10 }}
                                />
                            </Button>
                            <View style={{ flex: 1 }}></View>
                            {/* <Image
                                source={require('../../assets/images/HalfOctopus.png')}
                                style={GlobalStyle.headerLogo}
                            /> */}
                        </View>
                        {/**Setting Button End */}

                    </ImageBackground>
                </View>
            </View>
        )
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    marginLeft: 15,
                    marginRight: 15,
                    height: 1,
                    backgroundColor: "rgb(233,234,234)",
                }}
            />
        );
    }
}

// Later on in your styles..
var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 0,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 10,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    itemGreen: {
        color: 'rgb(68,199,170)'
    },
    itemRed: {
        color: 'rgb(200,69,69)'
    },
    itemDefault: {
        fontSize: 12,
        //color: 'black'
        color: 'rgb(113,119,129)'
    },
    itemDomain: {
        flex: 1,
        marginRight: 5
    },
    itemStatus: {
        width: 60,
    },
    itemReply: {
        marginLeft: 10, marginRight: 10, width: 50
    },
    itemAction: {
        width: 90
    },
    itemBold: {
        fontWeight: 'bold'
    },

    badgeDefault: {
        borderRadius: 16, height: 25, width: 90,
    },
    badgeRed: {
        borderWidth: 1,
        borderColor: 'rgba(222,83,83,.3)',
        backgroundColor: 'rgba(222,83,83,.1)'
    }, badgeGreen: {
        borderWidth: 1,
        borderColor: 'rgba(80,227,194,.3)',
        backgroundColor: 'rgba(80,227,194,.1)'
    },
    buttonWhite: {
        color: 'rgb(255,255,255)',
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonGrey: {
        color: 'grey',
        //fontWeight:'bold',
        fontSize: 16
    }
});