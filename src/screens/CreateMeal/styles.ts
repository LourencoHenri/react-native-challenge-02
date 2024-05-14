import { ViewStyle } from "react-native";
import styled from "styled-components/native";

import { TextInputMask } from "react-native-masked-text";

interface ButtonIndicatorProps {
	color?: string;
	style?: ViewStyle;
}

interface ButtonIndicatorProps {
	selected?: boolean;
}

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.gray500};
	flex: 1;
`;

export const Header = styled.View`
	background-color: ${({ theme }) => theme.colors.gray500};
	justify-content: center;
	align-items: center;
	padding: 32px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.lg};
	color: ${({ theme }) => theme.colors.gray100};
	text-align: center;
`;

export const Content = styled.View`
	background-color: ${({ theme }) => theme.colors.white};
	flex-direction: column;
	border-radius: 20px;
	padding: 24px;
	display: flex;
	gap: 16px;
	flex: 1;
`;

export const Form = styled.View`
	justify-content: space-between;
	flex: 1;
`;

export const FormContent = styled.View`
	gap: 20px;
`;

//

export const Input = styled.View`
	gap: 8px;
`;

export const InputSubset = styled.View`
	gap: 8px;
	flex: 1;
`;

export const FormSubset = styled.View`
	flex-direction: row;
	display: flex;
	width: 100%;
	gap: 16px;
`;

export const DietFormSubset = styled.View`
	flex-direction: row;
	gap: 16px;
`;

export const FormSubsetContent = styled.View`
	flex-direction: row;
	display: flex;
	width: 100%;
	gap: 16px;
`;

export const FormSubsetLabel = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.md};
	color: ${({ theme }) => theme.colors.gray100};
`;

export const DietButton = styled.Pressable`
	background-color: ${({ theme }) => theme.colors.gray600};
	border: 1px solid transparent;
	align-items: center;
	border-radius: 8px;
	padding: 16px;
	flex: 1;
`;

export const ButtonContent = styled.View`
	justify-content: center;
	flex-direction: row;
	align-items: center;
	display: flex;
	gap: 8px;
`;

export const ButtonText = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.md};
	color: ${({ theme }) => theme.colors.gray100};
`;

export const ButtonIndicator = styled.View<ButtonIndicatorProps>`
	background-color: ${({ color, theme }) =>
		color === "green" ? theme.colors.greenDark : theme.colors.redDark};
	border-radius: 8px;
	height: 8px;
	width: 8px;
`;

//

export const InputLabel = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.md};
	color: ${({ theme }) => theme.colors.gray100};
`;

export const ErrorText = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: ${({ theme }) => theme.colors.redDark};
`;

export const TextArea = styled.TextInput`
	border: 1px solid ${({ theme }) => theme.colors.gray500};
	font-size: ${({ theme }) => theme.fontSize.md};
	color: ${({ theme }) => theme.colors.gray100};
	border-radius: 8px;
	padding: 16px;
`;

export const MaskedTextArea = styled(TextInputMask)`
	border: 1px solid ${({ theme }) => theme.colors.gray500};
	font-size: ${({ theme }) => theme.fontSize.md};
	color: ${({ theme }) => theme.colors.gray100};
	border-radius: 8px;
	padding: 16px;
`;
