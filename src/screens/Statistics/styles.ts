import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
`;

export const Header = styled.View`
	background-color: ${({ theme }) => theme.colors.greenLight};
	align-items: center;
	height: 200px;
	justify-content: center;
`;

export const Data = styled.View`
	align-items: center;
	display: flex;
`;

export const Percentage = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.xxl};
	color: ${({ theme }) => theme.colors.gray100};
`;

export const Description = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: ${({ theme }) => theme.colors.gray200};
`;
