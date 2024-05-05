import { Text, View, Image } from "react-native";
import { Container, ProfileImage } from "./styles";
import Logo from "@assets/svg/logo";

export function Header() {
	return (
		<Container>
			<Logo />
			<ProfileImage
				style={{
					width: 40,
					height: 40,
					borderRadius: 40,
					borderWidth: 2,
				}}
				source={{
					uri: "https://avatars.githubusercontent.com/u/99770500?v=4",
				}}
			/>
		</Container>
	);
}
