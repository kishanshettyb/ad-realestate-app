import { View, Text, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Properties = () => {
	return (
		<View>
			<View className="relative w-full">
				<Image className="rounded-lg w-full h-[200]" source={require("../../assets/properties/img-1.jpeg")} />
				<View className="absolute shadow-sm border-2 border-gray-50 ml-4 mt-4 bg-white rounded-2xl px-4 py-2">
					<Text>
						4.5 <FontAwesome name="star" size={14} color="orange" />
					</Text>
				</View>
				<View className="bg-gray-200 p-5 rounded-3xl absolute w-full -bottom-10">
					<Text className="text-gray-600">2400 sqft</Text>
					<Text className="text-2xl font-bold">
						$2,999<Text className="text-sm font-normal text-gray-600">/month</Text>
					</Text>
				</View>
				<View className="bg-black rounded-full w-[40] h-[40] flex items-center justify-center absolute bottom-6 right-6 shadow">
					<Feather name="bookmark" size={24} color="white" />
				</View>
			</View>
		</View>
	);
};

export default Properties;
