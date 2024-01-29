import { AdaptiveForm } from '@aemforms/af-react-renderer';
import React, { useState, useEffect } from 'react';
import { Dimensions, RefreshControl } from 'react-native';
import { ScrollView, Box } from 'native-base';
import mappings from '../utils/mapping';
import Loader from './loader';
import { getFormDefinition } from '../utils/HttpService';

function Form(): React.JSX.Element {

  const [formJson, setFormJson] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { height: heightOfDeviceScreen } = Dimensions.get('window');

  const onRefresh = () => {
    setRefresh(true);
    getJson();
  };

  const getJson = async () => {
    setIsLoaded(true);
    try {
      const res = await getFormDefinition();
      setFormJson(res);
    } catch (err) { } finally {
      setIsLoaded(false);
      setRefresh(false);
    }
  }
  useEffect(() => {
    getJson();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ minHeight: heightOfDeviceScreen }}
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
    >
      <Box h="100%" safeArea bg="white">
        <Loader loading={isLoaded} />
        <Box h="100%" safeArea bg="white" style={{ paddingHorizontal: 10 }}>
          {formJson && <AdaptiveForm
            formJson={formJson as any}
            mappings={mappings}
          />}
        </Box>
      </Box>
    </ScrollView>
  );
}

export default Form;
