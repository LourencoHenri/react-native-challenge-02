import styled from "styled-components/native";

export const Container = styled.Pressable`
	background-color: ${({ theme }) => theme.colors.gray200};
	align-items: center;
	border-radius: 8px;
	padding: 16px;
`;

export const Label = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.md};
	color: ${({ theme }) => theme.colors.white};
`;
