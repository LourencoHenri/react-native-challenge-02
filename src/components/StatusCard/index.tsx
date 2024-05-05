import { Container, Data, Description, Percentage } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function StatusCard() {
	const navigation = useNavigation();

	return (
		<Container onPress={() => navigation.navigate("Statistics" as never)}>
			<Data>
				<Percentage>90,86%</Percentage>
				<Description>das refeições dentro da dieta</Description>
			</Data>
		</Container>
	);
}
