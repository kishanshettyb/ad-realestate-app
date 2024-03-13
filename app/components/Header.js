import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
	return (
		<View className="d-flex flex-row justify-between items-center">
			<View>
				<Text>Welcome back 👋</Text>
				<Text className="text-xl font-bold">Hugh Jackman</Text>
			</View>
			<View>
				<Image className="w-[50] h-[50] rounded-full" source={require("../../assets/profile.jpeg")} />
			</View>
		</View>
	);
};

export default Header;
