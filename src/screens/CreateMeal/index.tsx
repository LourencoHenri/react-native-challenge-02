import {
	ButtonIndicator,
	DietFormSubset,
	MaskedTextArea,
	ButtonContent,
	InputSubset,
	FormContent,
	ButtonText,
	DietButton,
	FormSubset,
	InputLabel,
	Container,
	TextArea,
	Content,
	Header,
	Input,
	Title,
	Form,
	ErrorText,
} from "./styles";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button } from "@components/Button";
import { isValid, parse } from "date-fns";
import theme from "@theme/index";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

interface MealFormProps {
	name: string;
	description: string;
	date: string;
	time: string;
	onDiet: boolean | null;
}

export function CreateMeal() {
	const insets = useSafeAreaInsets();

	const [onDiet, setOnDiet] = useState<boolean | null>(true);

	const mealFormSchema = Yup.object().shape({
		name: Yup.string()
			.min(2, "Nome muito curto!")
			.max(50)
			.required("Obrigatório!"),
		description: Yup.string()
			.min(2, "Descrição muito curta!")
			.max(50)
			.required("Obrigatório!"),
		date: Yup.string()
			.transform((value, originalValue) => {
				if (originalValue) {
					const parsedDate = parse(originalValue, "dd/MM/yyyy", new Date());
					return isValid(parsedDate)
						? parsedDate.toISOString().split("T")[0]
						: value;
				}
				return value;
			})
			.required("Obrigatório!"),
		time: Yup.string()
			.required("Obrigatório!")
			.matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, "Hora inválida!"),
		onDiet: Yup.boolean().required(),
	});

	const initialMealForm: MealFormProps = {
		name: "Macarrão",
		description: "Macarrão com molho de tomate",
		date: "13/05/2024",
		time: "21:45",
		onDiet: onDiet,
	};

	//

	const handleOnDiet = (state: boolean | null) => {
		console.log(state);
		setOnDiet(state);
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<Container
				style={{
					marginBottom: insets.bottom,
				}}
			>
				<Header
					style={{
						marginTop: insets.top,
					}}
				>
					<Title>Nova refeição</Title>
				</Header>

				<Content>
					<Formik
						initialValues={initialMealForm}
						onSubmit={(values) => console.log(values)}
						validationSchema={mealFormSchema}
					>
						{({
							handleChange,
							handleBlur,
							handleSubmit,
							values,
							errors,
							touched,
						}) => (
							<Form>
								<FormContent>
									<Input>
										<InputLabel>Nome</InputLabel>
										<TextArea
											onChangeText={handleChange("name")}
											onBlur={handleBlur("name")}
											value={values.name}
											maxLength={50}
										/>
										<ErrorText>
											{errors.name && touched.name ? errors.name : null}
										</ErrorText>
									</Input>
									<Input>
										<InputLabel>Descrição</InputLabel>
										<TextArea
											onChangeText={handleChange("description")}
											onBlur={handleBlur("description")}
											value={values.description}
											numberOfLines={8}
											maxLength={50}
											multiline
											style={{
												height: 120,
											}}
										/>
										<ErrorText>
											{errors.description && touched.description
												? errors.description
												: null}
										</ErrorText>
									</Input>

									<FormSubset>
										<InputSubset>
											<InputLabel>Data</InputLabel>

											<MaskedTextArea
												onChangeText={handleChange("date")}
												options={{ format: "DD/MM/YYYY" }}
												onBlur={handleBlur("date")}
												value={values.date}
												type={"datetime"}
												maxLength={10}
											/>
											<ErrorText>
												{errors.date && touched.date ? errors.date : null}
											</ErrorText>
										</InputSubset>
										<InputSubset>
											<InputLabel>Hora</InputLabel>

											<MaskedTextArea
												onChangeText={handleChange("time")}
												options={{ format: "HH:mm" }}
												onBlur={handleBlur("time")}
												value={values.time}
												type={"datetime"}
												maxLength={5}
											/>
											<ErrorText>
												{errors.time && touched.time ? errors.time : null}
											</ErrorText>
										</InputSubset>
									</FormSubset>

									<Input>
										<InputLabel>Está dentro da dieta?</InputLabel>
										<DietFormSubset>
											<DietButton
												onPress={() => {
													handleOnDiet(true);
													handleChange("onDiet");
												}}
												style={
													onDiet === true
														? {
																backgroundColor: theme.colors.greenLight,
																borderWidth: 1,
																borderColor: theme.colors.greenDark,
														  }
														: {}
												}
											>
												<ButtonContent>
													<ButtonIndicator color="green" />
													<ButtonText>Sim</ButtonText>
												</ButtonContent>
											</DietButton>

											<DietButton
												onPress={() => handleOnDiet(false)}
												style={
													onDiet === false
														? {
																backgroundColor: theme.colors.redLight,
																borderWidth: 1,
																borderColor: theme.colors.redDark,
														  }
														: {}
												}
											>
												<ButtonContent>
													<ButtonIndicator color="red" />
													<ButtonText>Não</ButtonText>
												</ButtonContent>
											</DietButton>
										</DietFormSubset>
									</Input>
								</FormContent>

								<Button
									label="Cadastrar refeição"
									disabled={!errors ? true : false}
									onPress={() => console.log()}
								/>
							</Form>
						)}
					</Formik>
				</Content>
			</Container>
		</TouchableWithoutFeedback>
	);
}
