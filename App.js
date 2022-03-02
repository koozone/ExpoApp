import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import LottoGenerator from './screens/LottoGenerator';
import WatchFace from './screens/WatchFace';
import TodoList from './screens/TodoList';
import JusoFinder from './screens/JusoFinder';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="LottoGenerator" component={LottoGenerator} />
				<Stack.Screen name="WatchFace" component={WatchFace} />
				<Stack.Screen name="TodoList" component={TodoList} />
				<Stack.Screen name="JusoFinder" component={JusoFinder} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
