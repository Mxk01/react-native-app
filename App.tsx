import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './screens/Home';
import Navigation from './navigation/Navigation';


function App(): JSX.Element {
  return (
    <>   
      <View style={{ flex: 1 }}> 
      {/* bar with battery,clock,etc */}
      {/* <StatusBar  backgroundColor="transparent"/>   */}
     <Navigation/>
      </View>
    </>
  );
}

export default App;
