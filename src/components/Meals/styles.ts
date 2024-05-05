import styled from "styled-components/native";

export const Container = styled.View`
	gap: 32px;
`;

export const Header = styled.View`
	gap: 8px;
`;

export const Title = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.md};
	color: ${({ theme }) => theme.colors.gray100};
`;

export const Content = styled.View`
	gap: 8px;
`;

export const Date = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.lg};
	color: ${({ theme }) => theme.colors.gray200};
`;

export const MealsList = styled.View`
	gap: 8px;
`;
