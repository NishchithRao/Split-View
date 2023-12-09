import {SafeAreaView, StatusBar} from 'react-native';

import Gmail from './templates/Gmail';
import {Icon} from 'react-native-paper';
import Post from './templates/Post';
import React from 'react';
import {SplitPane} from 'split-view';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <SplitPane
        left={<Icon size={20} color="white" source="account-circle" />}
        right={<Icon size={20} color="white" source="auto-fix" />}
        startScreen={<Post />}
        endScreen={<Gmail />}
        enabled
      />
    </SafeAreaView>
  );
};

export default App;
