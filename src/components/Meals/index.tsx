import { Container, Title, Header, Content, Date, MealsList } from "./styles";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";

export function Meals() {
	return (
		<Container>
			<Header>
				<Title>Refeições</Title>
				<Button label="Nova Refeição" />
			</Header>

			<Content>
				<Date>05.05.2024</Date>

				<MealsList>
					<Meal />
					<Meal />
					<Meal />
					<Meal />
				</MealsList>
			</Content>
		</Container>
	);
}
