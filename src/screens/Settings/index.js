
import React, { Component } from 'react';
import { View, Text, StatusBar, ImageBackground, Image, ScrollView, Switch } from 'react-native';
import { Container, Content, Icon, Button, Right } from 'native-base';
import GlobalStyle from '../../helper/GlobalStyle';
import styles from './Styles';

export default class Settings extends Component {

    constructor() {
        super();
        this.state = {
            switch1Value: false,
            switch2Value: false,
            switch3Value: true,
            switch4Value: true,
            switch5Value: true,
            switch6Value: false,

        }
    }
    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: !value })
    }
    toggleSwitch2 = (value) => {
        this.setState({ switch2Value: !value })
    }
    toggleSwitch3 = (value) => {
        this.setState({ switch3Value: !value })
    }
    toggleSwitch4 = (value) => {
        this.setState({ switch4Value: !value })
    }
    toggleSwitch5 = (value) => {
        this.setState({ switch5Value: !value })
    }
    toggleSwitch6 = (value) => {
        this.setState({ switch6Value: !value })
    }





    seprator = () => {
        return (
            <View

                style={{ height: 1, backgroundColor: 'black' }}

            />
        )
    }

    _goForLoginScreen = () => {

        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <Container style={GlobalStyle.container}>
                {/* <StatusBar translucent={false} backgroundColor="blue" barStyle="dark-content" color="black" /> */}
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="black" translucent={true} />


                <ScrollView>

                    <Content>

                        <View style={GlobalStyle.contentContainer}>


                            {/**Setting Container Start */}
                            <View style={{ flex: 1, padding: 25, }}>




                                <Text style={styles.title}>ACCOUNT</Text>
                                <View style={{ height: 1, backgroundColor: 'rgb(233,234,234)', marginTop: 10, }}></View>
                                {/* <Text>{this.seprator}</Text> */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                                    <Text style={{ color: 'rgb(29,39,55)', fontSize: 14, flex: 1, fontWeight: '400' }}>philip.summers@gmail.com  </Text>

                                    <Button onPress={() => this._goForLoginScreen()} style={{ flexDirection: 'row-reverse', height: 35, backgroundColor: 'transparent', width: 80, elevation: 0, }}>
                                        <Text style={{ color: 'rgb(60,200,170)', fontSize: 13, }}>Log Out</Text>
                                    </Button>

                                </View>
                                <View style={{ height: 1, backgroundColor: 'rgb(233,234,234)', marginBottom: 30 }}></View>







                                <Text style={styles.title}>SETTINGS</Text>
                                {/* <Text>{this.seprator}</Text> */}
                                <View style={{ height: 1, backgroundColor: 'rgb(233,234,234)', marginTop: 10, }}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                                    <Text style={styles.subtitles}>Add Mobile Client</Text>
                                    <Text style={{ color: 'rgb(113,119,129)', fontSize: 11, marginEnd: 10 }}>Get QR Code</Text>
                                    <Image style={{ height: 20, width: 20 }}
                                        source={require('../../../assets/images/QR.png')}
                                    //  style={GlobalStyle.footerText}
                                    />
                                </View>

                                <View style={{ height: 1, backgroundColor: 'rgb(233,234,234)', }}></View>

                                <View style={{ flexDirection: 'row', alignItem: 'center', paddingBottom: 15, paddingTop: 15 }}>
                                    <Text style={styles.subtitles}>Automatic Updates</Text>
                                    {/* <Switch style={styles.switchStyle}
                                        onValueChange={this.toggleSwitch1}
                                        value={this.state.switch1Value}
                                    /> */}
                                    {this.state.switch1Value === true &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch1(this.state.switch1Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_blue.png')}
                                                style={{ width: 144 * .3, height: 84 * .3 }}
                                            />
                                        </Button>
                                    }
                                    {this.state.switch1Value === false &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch1(this.state.switch1Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_inactive.png')}
                                                style={{ width: 40, height: 20 }}
                                            />
                                        </Button>
                                    }
                                </View>
                                <View style={{ height: 1, backgroundColor: 'rgb(233,234,234)', }}></View>

                                <View style={{ flexDirection: 'row', alignItem: 'center', paddingTop: 15, paddingBottom: 15 }}>
                                    <Text style={styles.subtitles}>Authorize with digital Ocean</Text>


                                    {/* <Button style={{marginLeft:300,height:35,width:80,backgroundColor:'transparent',marginTop:-20}}><Text style={{color:'grey',fontSize:17}}>Log Out</Text></Button> */}
                                    {/* <Switch style={styles.switchStyle}
                                        onValueChange={this.toggleSwitch2}
                                        value={this.state.switch2Value}
                                    /> */}

                                    {this.state.switch2Value === true &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch2(this.state.switch2Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_blue.png')}
                                                style={{ height: 25.2, width: 43.2 }}
                                            />
                                        </Button>
                                    }
                                    {this.state.switch2Value === false &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch2(this.state.switch2Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_inactive.png')}
                                                style={{ height: 20, width: 40 }}
                                            />
                                        </Button>
                                    }



                                </View>
                                <View style={{ height: 1, backgroundColor: 'rgb(233,234,234)', marginBottom: 30 }}></View>

                                <Text style={styles.title}>BLOCKED APPS</Text>
                                <View style={{ height: 1, backgroundColor: 'rgb(233,234,234)', marginTop: 10, }}></View>


                                {/* <Text>{this.seprator}</Text> */}
                                <View style={{ flexDirection: 'row', alignItem: 'center', paddingTop: 15, paddingBottom: 15 }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: 'rgb(29,39,55)', fontSize: 14, }}>Automatically Block</Text>

                                        <Text style={{ color: 'rgb(113,119,129)', fontSize: 11, flex: 1 }}>Block apps with known,unpatched vulnerabilities</Text>
                                    </View>
                                    {/* <Switch style={styles.switchStyle}
                                        onValueChange={this.toggleSwitch3}
                                        value={this.state.switch3Value}
                                    /> */}

                                    {this.state.switch3Value === true &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch3(this.state.switch3Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_purple.png')}
                                                style={{ height: 21, width: 42 }}
                                            />
                                        </Button>
                                    }
                                    {this.state.switch3Value === false &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch3(this.state.switch3Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_inactive.png')}
                                                style={{ height: 20, width: 40 }}
                                            />
                                        </Button>
                                    }



                                </View>
                                {/* <Text style={{ color: 'black',  fontSize: 12, }}>Block apps with known,unpatched vulnerabilities</Text> */}

                                <View style={{ height: 1, backgroundColor: 'rgb(233,234,234)', }}></View>

                                <View style={{ flexDirection: 'row', alignItem: 'center', paddingBottom: 15, paddingTop: 15 }}>
                                    <Text style={styles.subtitles}>Facebook</Text>

                                    {/* <Switch style={styles.switchStyle}
                                        onValueChange={this.toggleSwitch4}
                                        value={this.state.switch4Value}
                                    /> */}
                                    {this.state.switch4Value === true &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch4(this.state.switch4Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_blue.png')}
                                                style={{ height: 25.2, width: 43.2 }}
                                            />
                                        </Button>
                                    }
                                    {this.state.switch4Value === false &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch4(this.state.switch4Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_inactive.png')}
                                                style={{ height: 20, width: 40 }}
                                            />
                                        </Button>
                                    }


                                </View>

                                <View style={{ height: 1, backgroundColor: 'rgb(233,234,234)', }}></View>

                                <View style={{ flexDirection: 'row', alignItem: 'center', paddingTop: 15, paddingBottom: 15 }}>
                                    <Text style={styles.subtitles}>Instagram</Text>
                                    {/* <Switch style={styles.switchStyle}
                                        onValueChange={this.toggleSwitch5}
                                        value={this.state.switch5Value}
                                    /> */}

                                    {this.state.switch5Value === true &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch5(this.state.switch5Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_blue.png')}
                                                style={{ height: 25.2, width: 43.2 }}
                                            />
                                        </Button>
                                    }
                                    {this.state.switch5Value === false &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch5(this.state.switch5Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_inactive.png')}
                                                style={{ height: 20, width: 40 }}
                                            />
                                        </Button>
                                    }


                                </View>



                                <View style={{ height: 1, backgroundColor: 'rgb(233,234,234)', }}></View>

                                <View style={{ flexDirection: 'row', alignItem: 'center', paddingBottom: 15, paddingTop: 15 }}>
                                    <Text style={styles.subtitles}>Whatsapp</Text>


                                    {/* <Switch style={styles.switchStyle}
                                        onValueChange={this.toggleSwitch6}
                                        value={this.state.switch6Value}
                                    /> */}


                                    {this.state.switch6Value === true &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch6(this.state.switch6Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_blue.png')}
                                                style={{ height: 25.2, width: 43.2 }}
                                            />
                                        </Button>
                                    }
                                    {this.state.switch6Value === false &&
                                        <Button style={{ backgroundColor: 'transparent', elevation: 0, height: 20 }} onPress={() => { this.toggleSwitch6(this.state.switch6Value) }}>
                                            <Image
                                                source={require('../../../assets/images/switch_inactive.png')}
                                                style={{ height: 20, width: 40 }}
                                            />
                                        </Button>
                                    }


                                </View>

                                <View style={{ height: 1, backgroundColor: 'rgb(233,234,234)', }}></View>

                                <View style={{ flexDirection: 'row-reverse', marginTop: 10,  }}>
                                    <Button style={{ backgroundColor: 'transparent', elevation: 0, }}>
                                        <Text style={{ color: 'rgb(60,200,170)', fontSize: 13, }}>Add App</Text>
                                    </Button>
                                </View>
                            </View>
                            {/**Setting Container End */}

                        </View>
                    </Content>
                </ScrollView>
            </Container>




        )
    }


}