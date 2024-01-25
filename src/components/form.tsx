import { AdaptiveForm } from '@aemforms/af-react-renderer';
import React from 'react';
import { Dimensions } from 'react-native';
import { ScrollView, Box } from 'native-base';
import mappings from '../utils/mapping';
import json from '../form-definitions/demo.form.json';

function Form(): React.JSX.Element {
  const { height: heightOfDeviceScreen } = Dimensions.get('window');

  return (
    <ScrollView
      contentContainerStyle={{ minHeight: heightOfDeviceScreen }}
      style={{ flex: 1 }}
    >
      <Box h="100%" safeArea bg="white" style={{ paddingHorizontal: 10 }}>
        <AdaptiveForm
          formJson={json as any}
          mappings={mappings}
        />
      </Box>
    </ScrollView>
  );
}

export default Form;
