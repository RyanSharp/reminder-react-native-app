import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React, {useRef, useState} from 'react';

import {
  Animated,
  Modal,
  SafeAreaView,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CompleteTaskForm from '../components/complete-form';
import Header from '../components/header';
import AppListItem from '../components/list-item';
import Login from '../components/login';

const items = [
  {
    name: 'Water the fiddle leaf fig',
    dueDate: 1669700000,
  },
  {
    name: 'Clean air filter screen',
  },
  {
    name: 'Clean air filter screen',
  },
  {
    name: 'Clean air filter screen',
  },
  {
    name: 'Clean air filter screen',
  },
  {
    name: 'Clean air filter screen',
  },
  {
    name: 'Clean air filter screen',
  },
  {
    name: 'Clean air filter screen',
  },
  {
    name: 'Clean air filter screen',
  },
  {
    name: 'Clean air filter screen',
  },
  {
    name: 'Clean air filter screen',
  },
  {
    name: 'Clean air filter screen',
  },
  {
    name: 'Clean air filter screen',
  },
];

const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const offset = useRef(new Animated.Value(0)).current;
  const isDarkMode = useColorScheme() === 'dark';
  const [itemIndex, setItemIndex] = useState(-1);

  return (
    <ApolloProvider client={client}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView
          style={{
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
            flex: 1,
          }}>
          <Header animatedValue={offset} title="Task Master" />

          <ScrollView contentContainerStyle={{paddingTop: 220}}>
            {items.map((item, index) => (
              <AppListItem
                key={`list-item-${index}`}
                name={item.name}
                dueDate={item.dueDate}
                completeTrigger={() => setItemIndex(index)}
              />
            ))}
          </ScrollView>

          <Login />
          <CompleteTaskForm
            item={itemIndex >= 0 ? items[itemIndex] : undefined}
            closeModal={() => setItemIndex(-1)}
          />
        </SafeAreaView>
      </GestureHandlerRootView>
    </ApolloProvider>
  );
};

export default App;
