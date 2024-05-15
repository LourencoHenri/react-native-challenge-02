import { createContext, ReactNode, useState, useReducer } from "react";

export interface MealProps {
	name: string;
	description: string;
	date: string;
	time: string;
	onDiet: boolean | undefined;
}

interface CyclesContextType {
	meals: MealProps[];
	handleCreateMeal: (data: MealProps) => void;
}

export const MealsContext = createContext({} as CyclesContextType);

interface MealsContextProviderProps {
	children: ReactNode;
}

export function MealsContextProvider({ children }: MealsContextProviderProps) {
	const [meals, setMeals] = useState<MealProps[]>([]);

	function handleCreateMeal(meal: MealProps) {
		setMeals([...meals, meal]);
	}

	return (
		<MealsContext.Provider
			value={{
				meals,
				handleCreateMeal,
			}}
		>
			{children}
		</MealsContext.Provider>
	);
}
