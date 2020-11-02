import {createStackNavigator} from 'react-navigation-stack';
import Settings from '../screens/Settings';
import Login from '../screens/Login';
import NetworkDetailScreen from '../screens/NetworkDetailScreen';

export default createStackNavigator(
  {
    Login:{screen:Login},
    Settings:{screen:Settings},
    NetworkDetailScreen:{screen:NetworkDetailScreen}
    
  },{
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);
