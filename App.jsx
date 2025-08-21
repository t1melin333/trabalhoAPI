import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tela_ddd from './screens/Tela_DDD';
import Tela_CNPJ from './screens/Tela_CNPJ';
import Tela_CEP from './screens/Tela_CEP';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="DDD">
        <Drawer.Screen name="DDD" component={Tela_ddd} />
        <Drawer.Screen name="CNPJ" component={Tela_CNPJ} />
        <Drawer.Screen name="CEP" component={Tela_CEP} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
