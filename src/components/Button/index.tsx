import { Container, Label } from "./styles";
import React from "react";

interface ButtonProps {
	label: string;
	icon?: React.ReactNode;
}

export function Button({ label }: ButtonProps) {
	return (
		<Container onPress={() => console.log()}>
			<Label>{label}</Label>
		</Container>
	);
}
