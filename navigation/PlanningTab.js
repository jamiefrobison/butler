import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FontAwesome5 } from '@expo/vector-icons';

import Budgets from '../screens/tools/Budgets';
import Goals from '../screens/tools/Goals';

const Tab = createMaterialTopTabNavigator();

const PlanningTab = () => (
	<Tab.Navigator
		screenOptions={{
			tabBarStyle: { backgroundColor: '#0A1E2D' },
			tabBarLabelStyle: { fontSize: 15, fontWeight:"600" },
			tabBarItemStyle: { height: 60 },
			tabBarIndicatorStyle: { backgroundColor: 'red' },
			headerShown: false,
			tabBarInactiveTintColor: '#B6C5D4',
			tabBarActiveTintColor: '#69ABE6',
			tabBarIndicatorStyle: { borderColor: 'red', color: 'red' },
		}}
	>
		<Tab.Screen name="Budgets" component={Budgets} />
		<Tab.Screen name="Goals" component={Goals} />
	</Tab.Navigator>
);

export default PlanningTab;
