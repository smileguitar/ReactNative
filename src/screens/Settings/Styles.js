import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    // contentTitle:{
    //     fontSize:30,
    //     marginVertical:5
    // },
    // forgotText:{
    //     fontSize:20,
    //     color:Colors.tintColor,
    //     marginVertical:5 
    // },
    // modalTitle:{ 
    //     fontSize:26,
    //     color:Colors.white,
    //     fontWeight:'bold',
    //     marginBottom:10 
    // },
    // modalSubTitle:{ 
    //     fontSize:20,
    //     color:Colors.white,
    //     fontWeight:'bold' 
    // },

    title: {
        // color:'#979797',
        //color:'rgb(98,98,98)' ,
        color: 'rgb(113,119,129)',

        marginTop: 12,
        fontWeight: 'bold',
    },
    subtitles: {        
        color: 'rgb(29,39,55)',
        //paddingTop:20,
        fontSize: 14, flex: 1
    },
    switchStyle: {
        // marginLeft:320,
        backgroundColor: 'transparent',
        // marginTop:-20
    },

    footerSwitch: {
        marginLeft: 180,
        height: 35,
        width: 80,
        backgroundColor: 'transparent',
        marginTop: -80
    }
});