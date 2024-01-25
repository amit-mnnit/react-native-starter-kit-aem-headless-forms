/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Themes } from '@aemforms/af-react-native';
import Form from './src/components/form';


function App(): React.JSX.Element {

  return (
    <NativeBaseProvider theme={Themes.primary}>
      <Form />
    </NativeBaseProvider>
  )
}

export default App;
