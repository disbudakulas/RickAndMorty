import React from 'react';

//Third Party
import { createStackNavigator } from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';

//Pages
import { Home, Episodes, Character } from '@pages/index';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
	const Stack = createStackNavigator();

	return (
		<>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#22272d' } }}>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Episodes" component={Episodes} />
					<Stack.Screen name="Character" component={Character} />
				</Stack.Navigator>
			</NavigationContainer>
			<FlashMessage />
		</>
	);
};

export default App;
