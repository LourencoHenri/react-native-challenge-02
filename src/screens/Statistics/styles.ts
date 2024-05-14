import styled from "styled-components/native";

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.greenLight};

	flex: 1;
`;

export const Header = styled.View`
	background-color: ${({ theme }) => theme.colors.greenLight};
	align-items: center;
	height: 200px;
	justify-content: center;
`;

export const Info = styled.View`
	align-items: center;
	padding: 16px;
	gap: 4px;
`;

export const Percentage = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.xxl};
	color: ${({ theme }) => theme.colors.gray100};
	text-align: center;
`;

export const Description = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: ${({ theme }) => theme.colors.gray200};
	text-align: center;
`;

//

export const Content = styled.View`
	background-color: ${({ theme }) => theme.colors.white};
	flex: 1;
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	border-radius: 20px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: ${({ theme }) => theme.colors.gray100};
	text-align: center;
`;

export const Data = styled.View`
	gap: 12px;
`;

export const Card = styled.View`
	background-color: ${({ theme }) => theme.colors.gray600};
	border-radius: 8px;
`;

export const Statistic = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.xxl};
	color: ${({ theme }) => theme.colors.gray100};
	text-align: center;
`;

export const DietInfo = styled.View`
	gap: 16px;
	justify-content: space-between;
	display: flex;
	flex-direction: row;
`;

export const Success = styled(Card)`
	background-color: ${({ theme }) => theme.colors.greenLight};
	border-radius: 8px;
	flex: 1;
`;

export const Fail = styled(Card)`
	background-color: ${({ theme }) => theme.colors.redLight};
	border-radius: 8px;
	flex: 1;
`;
