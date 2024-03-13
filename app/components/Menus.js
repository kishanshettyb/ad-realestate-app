import { View, Text, ScrollView } from "react-native";
import React from "react";

const Menus = () => {
	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-5">
			<View className="flex flex-row gap-2">
				<View className="px-5 py-3 bg-blue-600 rounded-lg">
					<Text className="font-bold text-center text-white marker:">Popular</Text>
				</View>
				<View className="px-5 py-3 bg-blue-400 rounded-lg">
					<Text className="font-bold text-center text-white marker:">Rent</Text>
				</View>
				<View className="px-5 py-3 bg-blue-400 rounded-lg">
					<Text className="font-bold text-center text-white marker:">Sell</Text>
				</View>
				<View className="px-5 py-3 bg-blue-400 rounded-lg">
					<Text className="font-bold text-center text-white marker:">Buy</Text>
				</View>
				<View className="px-5 py-3 bg-blue-400 rounded-lg">
					<Text className="font-bold text-center text-white marker:">Properties</Text>
				</View>
				<View className="px-5 py-3 bg-blue-400 rounded-lg">
					<Text className="text-center text-white marker:font-bold">Villa</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Menus;
