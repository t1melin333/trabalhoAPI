import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tela_DDD from './screens/Tela_DDD';
import Tela_CNPJ from './screens/Tela_CNPJ';
import Tela_CEP from './screens/Tela_CEP';
import Tela_Feriado  from './screens/Tela_Feriado';
import Tela_ISBN from './screens/Tela_ISBN';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="DDD">
        <Drawer.Screen name="DDD" component={Tela_DDD} />
        <Drawer.Screen name="CNPJ" component={Tela_CNPJ} />
        <Drawer.Screen name="CEP" component={Tela_CEP} />
        <Drawer.Screen name='Feriados Nacionais' component={Tela_Feriado}/>
         <Drawer.Screen name='ISBN' component={Tela_ISBN}/>
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
