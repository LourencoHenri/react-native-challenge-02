import { View } from "react-native";
import {
	Container,
	Header,
	Info,
	Percentage,
	Description,
	Content,
	Card,
	DietInfo,
	Title,
	Statistic,
	Data,
	Success,
	Fail,
} from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Statistics() {
	const insets = useSafeAreaInsets();

	return (
		<Container>
			<Header
				style={{
					paddingTop: insets.top,
				}}
			>
				<Percentage>90,86%</Percentage>
				<Description>das refeições dentro da dieta</Description>
			</Header>

			<Content>
				<Title>Estatísticas gerais</Title>

				<Data>
					<Card>
						<Info>
							<Statistic>99</Statistic>
							<Description>
								melhor sequência de pratos dentro da dieta
							</Description>
						</Info>
					</Card>

					<Card>
						<Info>
							<Statistic>99</Statistic>
							<Description>refeições registradas</Description>
						</Info>
					</Card>

					<DietInfo>
						<Success>
							<Info>
								<Statistic>99</Statistic>
								<Description>refeições dentro da dieta</Description>
							</Info>
						</Success>
						<Fail>
							<Info>
								<Statistic>10</Statistic>
								<Description>refeições fora da dieta</Description>
							</Info>
						</Fail>
					</DietInfo>
				</Data>
			</Content>
		</Container>
	);
}
