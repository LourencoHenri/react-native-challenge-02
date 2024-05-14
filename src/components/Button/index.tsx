import { Container, Label } from "./styles";
import React from "react";

interface ButtonProps {
	label: string;
	disabled: boolean;
	icon?: React.ReactNode;
	onPress?: () => void;
}

export function Button({ label, disabled, onPress }: ButtonProps) {
	return (
		<Container onPress={() => console.log()} disabled={disabled}>
			<Label>{label}</Label>
		</Container>
	);
}
