import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";

import {
	NunitoSans_400Regular,
	NunitoSans_700Bold,
	useFonts,
} from "@expo-google-fonts/nunito-sans";

import Navigation from "src/navigation";
import { Loading } from "@components/Loading";
import { StatusBar } from "expo-status-bar";
import { MealsContextProvider } from "src/contexts/mealsContext";

export default function App() {
	const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

	return (
		<SafeAreaProvider style={styles.container}>
			<StatusBar style="dark" />
			<ThemeProvider theme={theme}>
				<MealsContextProvider>
					<View style={styles.container}>
						{fontsLoaded ? <Navigation /> : <Loading />}
					</View>
				</MealsContextProvider>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
