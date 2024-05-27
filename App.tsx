import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './Navigation/Stack/authNavigation';
// import HomeNavigation from './Navigation/Stack/homeNavigation';
const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
      {/* <HomeNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
