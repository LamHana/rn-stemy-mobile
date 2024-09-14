import { Pressable, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MoonStar } from '~components/icons';
import { cn } from '~lib/utils';
import LoginScreen from '~screens/LoginScreen';
import RegisterScreen from '~screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerRight: () => (
            <Pressable className='web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2'>
              {({ pressed }) => (
                <View
                  className={cn(
                    'flex-1 aspect-square pt-0.5 justify-center items-start web:px-5',
                    pressed && 'opacity-70',
                  )}
                >
                  <MoonStar className='text-foreground' size={23} strokeWidth={1.25} />
                </View>
              )}
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  );
}
