import {
	Description,
	Container,
	Indicator,
	Divider,
	Status,
	Time,
} from "./styles";

import { MealProps } from "src/contexts/mealsContext";

export function Meal({ name, description, date, time, onDiet }: MealProps) {
	return (
		<Container>
			<Time>{time}</Time>
			<Divider />
			<Description>{name}</Description>
			<Indicator>{onDiet && <Status onDiet={onDiet} />}</Indicator>
		</Container>
	);
}
