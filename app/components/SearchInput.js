import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const SearchInput = () => {
	return (
		<View className="mt-[50] flex flex-row items-center justify-between border-b-2 border-gray-500">
			<View>
				<Text className="text-7xl font-bold">New York</Text>
			</View>
			<View>
				<Feather name="search" size={34} color="#6b7280" />
			</View>
		</View>
	);
};

export default SearchInput;
