import { View, Text, ScrollView } from "react-native";
import React from "react";

const Menus = () => {
	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-5">
			<View className="flex flex-row gap-2">
				<View className="bg-blue-600 px-5 py-3 rounded-xl">
					<Text className="text-white text-center marker: font-bold">Popular</Text>
				</View>
				<View className="bg-blue-400 px-5 py-3 rounded-xl">
					<Text className="text-white text-center marker: font-bold">Rent</Text>
				</View>
				<View className="bg-blue-400 px-5 py-3 rounded-xl">
					<Text className="text-white text-center marker: font-bold">Sell</Text>
				</View>
				<View className="bg-blue-400 px-5 py-3 rounded-xl">
					<Text className="text-white text-center marker: font-bold">Buy</Text>
				</View>
				<View className="bg-blue-400 px-5 py-3 rounded-xl">
					<Text className="text-white text-center marker: font-bold">Properties</Text>
				</View>
				<View className="bg-blue-400 px-5 py-3 rounded-xl">
					<Text className="text-white  text-center marker:font-bold">Villa</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Menus;
