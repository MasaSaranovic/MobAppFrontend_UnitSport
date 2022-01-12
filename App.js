import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message';

// Redux
import { Provider } from 'react-redux';
import store from './Redux/store';

// Navigators
import Main from './Navigators/Main'

// Screens
import ProductContainer from './Screens/Products/ProductContainer'
import Header from './Shared/Header'

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
}

