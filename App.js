import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import PathwayPlanScreen from './src/screens/PathwayPlanScreen';
import EditCheckListScreen from './src/screens/EditCheckListScreen';


const Stack = createStackNavigator();

const App = () => {


  const HeaderLeft = ({ navigation }) => {
    // const { setGameState } = useContext(GameContext);
    
    const handleHomePress = () => {
      navigation.navigate('Home');
    };

    return (
      <TouchableOpacity style={{ marginLeft: 15 }} onPress={handleHomePress}>
        <Text style={{ fontSize: 24 }}>🏠</Text>
      </TouchableOpacity>
    );
  };

  const HeaderTitle = ({ route }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>{route?.name}</Text>
    </View>
  );

  const HeaderRight = () => (
    <View style={{ flexDirection: 'row', marginRight: 7 }}>
      <TouchableOpacity style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 20 }}>🌐</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 20 }}>👤</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <NavigationContainer>
      {/* <GameDBProvider>
        <GameProvider> */}
          <Stack.Navigator initialRouteName="Home">            
            
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={({ navigation, route }) => ({ 
                title: 'Home',
                headerLeft: () => <HeaderLeft navigation={navigation} />,
                headerTitle: () => <HeaderTitle route={route} />,
                headerRight: () => <HeaderRight />,
                headerTitleAlign: 'center',
              })} 
            />
            <Stack.Screen 
              name="PathwayPlan" 
              component={PathwayPlanScreen} 
              options={({ navigation, route }) => ({ 
                title: 'Home',
                headerLeft: () => <HeaderLeft navigation={navigation} />,
                headerTitle: () => <HeaderTitle route={route} />,
                headerRight: () => <HeaderRight />,
                headerTitleAlign: 'center',
              })} 
            />     
            <Stack.Screen 
              name="EditCheckList" 
              component={EditCheckListScreen} 
              options={({ navigation, route }) => ({ 
                title: 'Home',
                headerLeft: () => <HeaderLeft navigation={navigation} />,
                headerTitle: () => <HeaderTitle route={route} />,
                headerRight: () => <HeaderRight />,
                headerTitleAlign: 'center',
              })} 
            />               
            
          </Stack.Navigator>
        {/* </GameProvider>
      </GameDBProvider> */}
    </NavigationContainer>
  );
};

export default App;
