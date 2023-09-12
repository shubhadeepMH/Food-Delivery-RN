import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HotelScreen from './screens/HotelScreen';
import { Provider } from 'react-redux';
import store from './store/Store'
import CheckOutScreen from './screens/CheckOutScreen';
import Drelivery from './screens/Drelivery';
import DoneScreen from './screens/DoneScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>

      <NavigationContainer>
        <StatusBar hidden={false} />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{}} />
          <Stack.Screen name="Hotel" component={HotelScreen} />
          <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} 
          options={{presentation:'modal',
          headerShown:false,
          }} />
          <Stack.Screen name="DoneScreen" component={DoneScreen} 
          options={{presentation:'modal',
          headerShown:false,
          }}
          />
          <Stack.Screen name="Delivery" component={Drelivery} 
          options={{presentation:'modal',
          headerShown:false,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
