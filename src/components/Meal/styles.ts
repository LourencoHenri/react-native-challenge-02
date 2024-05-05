import styled from "styled-components/native";

export const Container = styled.View`
	flex-direction: row;
	display: flex;
	padding: 16px;
	gap: 8px;

	border: 1px solid ${({ theme }) => theme.colors.gray500};
	border-radius: 8px;
`;

export const Time = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.md};
	color: ${({ theme }) => theme.colors.gray100};
`;

export const Divider = styled.View`
	height: "100%";
	width: 1px;
	background-color: ${({ theme }) => theme.colors.gray400};
`;

export const Description = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.lg};
	color: ${({ theme }) => theme.colors.gray200};

	display: flex;
	flex: 1;
`;

export const Indicator = styled.View`
	align-items: center;
	justify-content: center;
`;

export const Status = styled.View`
	width: 14px;
	height: 14px;
	border-radius: 14px;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.greenMid};
`;

// export const Content = styled.View`
// 	gap: 8px;
// `;

// export const Date = styled.Text`
// 	font-family: ${({ theme }) => theme.fontFamily.bold};
// 	font-size: ${({ theme }) => theme.fontSize.xs};
// 	color: ${({ theme }) => theme.colors.gray100};
// `;

// export const MealsList = styled.View`
// 	gap: 8px;
// `;
