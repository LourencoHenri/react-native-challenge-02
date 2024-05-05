import { Header } from "@components/Header";
import { Container } from "./styles";
import { StatusCard } from "@components/StatusCard";
import { Meals } from "@components/Meals";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Home() {
	const insets = useSafeAreaInsets();

	return (
		<Container
			style={{
				marginTop: insets.top,
			}}
		>
			<Header />
			<StatusCard />
			<Meals />
		</Container>
	);
}
