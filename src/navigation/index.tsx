import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";

// Screens
import { Home } from "@screens/Home";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Statistics } from "@screens/Statistics";
import { CreateMeal } from "@screens/CreateMeal";

const Stack = createNativeStackNavigator();

export default function Navigation() {
	const insets = useSafeAreaInsets();

	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						contentStyle: {
							backgroundColor: "#FFFFFF",
						},
						headerShown: false,
					}}
				>
					<Stack.Screen name="CreateMeal" component={CreateMeal} />
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Statistics" component={Statistics} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
