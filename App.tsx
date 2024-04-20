/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, SafeAreaView, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';

const FirstRoute = () => (
  <View flex={1}>
    <View style={{height: 150, backgroundColor: '#ff4081'}} />
    <View style={{height: 150, backgroundColor: '#004455'}} />
    <View style={{height: 150, backgroundColor: '#898989'}} />
    <View style={{height: 150, backgroundColor: '#402264'}} />
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

function App(): React.JSX.Element {
  const layout = useWindowDimensions();

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const [show, setShow] = useState(false);

  return (
    <SafeAreaView flex={1}>
      <Button onPress={() => setShow(current => !current)} title="toggle" />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
      {show && (
        <View style={{height: 200, width: 200, backgroundColor: 'black'}} />
      )}
    </SafeAreaView>
  );
}

export default App;
