import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';
import ProfileScreen from '../pages/ProfileScreen';
import CounterScreen from '../pages/CounterScreen';
import StyleScreen from "../pages/StyleSheet";
import Flexbox from "../pages/Flexbox";
import LayoutScreen from "../pages/LayoutScreen";
import LoginScreen from "../pages/LoginScreen";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Counter" component={CounterScreen} />
            <Stack.Screen name="StyleSheet" component={StyleScreen} />
            <Stack.Screen name="Flexbox" component={Flexbox} />
            <Stack.Screen name="Layout" component={LayoutScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}
