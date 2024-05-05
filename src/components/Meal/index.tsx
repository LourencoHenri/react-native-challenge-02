import {
	Container,
	Time,
	Description,
	Status,
	Indicator,
	Divider,
} from "./styles";

interface MealProps {
	time?: Date;
	description?: string;
	onDiet?: boolean;
}

export function Meal({}: MealProps) {
	return (
		<Container>
			<Time>20:00</Time>
			<Divider />
			<Description>Frango Assado</Description>
			<Indicator>
				<Status />
			</Indicator>
		</Container>
	);
}
