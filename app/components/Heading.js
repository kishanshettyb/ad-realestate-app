import { View, Text } from "react-native";
import React from "react";

const Heading = (props) => {
	return (
		<View className="flex flex-row justify-between items-center my-5 ">
			<View>
				<Text className="font-bold text-lg  ">{props.title}</Text>
			</View>
			<View className="p-2 rounded-lg bg-gray-50">
				<Text>View all</Text>
			</View>
		</View>
	);
};

export default Heading;
