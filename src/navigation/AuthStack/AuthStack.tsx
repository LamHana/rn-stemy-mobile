import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '~screens/LoginScreen';
import RegisterScreen from '~screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
}
