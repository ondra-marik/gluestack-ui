import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        mb: '$2',
      },
    },
  },
  {}
);
