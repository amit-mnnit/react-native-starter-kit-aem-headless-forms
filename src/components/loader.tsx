import React from 'react';
import { Box, Spinner, Heading } from 'native-base';


const loaderStyles: any = {
  loader: {
    justifyContent: 'center',
    zIndex: 999,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    opacity: 0.9,
  },
  spinner: {
    zIndex: 1000,
  },
  heading: {
    color: 'primary.500',
    fontSize: 'md',
  },
}

type LOADER = {
  loading: boolean
}

const Loader = (props: LOADER) => {
  if (!props.loading) return null;
  return (
    <Box style={loaderStyles.loader}>
      <Spinner
        style={loaderStyles.spinner}
        size="lg"
        accessibilityLabel="Loading posts"
      />
      <Heading {...loaderStyles.heading}>Loading</Heading>
    </Box>
  );
};

export default Loader;
