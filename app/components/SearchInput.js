import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const SearchInput = () => {
	return (
		<View className="mt-[30] flex flex-row items-center justify-between border-b border-gray-400">
			<View>
				<Text className="font-bold text-7xl">New York</Text>
			</View>
			<View>
				<Feather name="search" size={34} color="#6b7280" />
			</View>
		</View>
	);
};

export default SearchInput;
