import { Container, Title, Header, Content, Date, MealsList } from "./styles";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { MealsContext } from "src/contexts/mealsContext";

export function Meals() {
	const { meals } = useContext(MealsContext);

	const navigation = useNavigation();

	console.log(meals);

	return (
		<Container>
			<Header>
				<Title>Refeições</Title>
				<Button
					label="Nova Refeição"
					onPress={() => navigation.navigate("CreateMeal" as never)}
					disabled={false}
				/>
			</Header>

			<Content>
				<Date>05.05.2024</Date>

				<MealsList>
					{meals.map((meal) => (
						<Meal
							key={`${meal.name}${meal.date}`}
							name={meal.name}
							description={meal.description}
							date={meal.date}
							time={meal.time}
							onDiet={meal.onDiet}
						/>
					))}
				</MealsList>
			</Content>
		</Container>
	);
}
