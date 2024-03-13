import { View, Text } from "react-native";
import React from "react";

const Heading = (props) => {
	return (
		<View className="flex flex-row items-center justify-between my-5 ">
			<View>
				<Text className="text-xl font-semi-bold ">{props.title}</Text>
			</View>
			<View className="p-2 ">
				<Text className="text-xs">View all</Text>
			</View>
		</View>
	);
};

export default Heading;
