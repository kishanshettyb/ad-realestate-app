import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Featured = () => {
	const lists = [
		{
			id: "1",
			price: "$1,999",
			title: "Maple Leaf Apartments",
			address: "123 Maple Street, Canada ",
			bed: "2",
			bath: "2",
			image: require("../../assets/properties/img-6.jpeg"),
			ratings: "4.5"
		},
		{
			id: "2",
			price: "$1,300",
			title: "Aurora Heights",
			address: "456 Aurora Avenue, 3L7, Canada",
			bed: "2",
			bath: "1",
			image: require("../../assets/properties/img-7.jpeg"),
			ratings: "4.0"
		},
		{
			id: "3",
			price: "$3,499",
			title: "Lakeside Apartments",
			address: "789 Lakeview Drive, Canada",
			bed: "2",
			bath: "3",
			image: require("../../assets/properties/img-8.jpeg"),
			ratings: "4.9"
		},
		{
			id: "4",
			price: "$6,100",
			title: "Mountain View Manor",
			address: "101 Mountain Road, Calgary ",
			bed: "1",
			bath: "1",
			image: require("../../assets/properties/img-9.jpeg"),
			ratings: "4.3"
		},
		{
			id: "5",
			price: "$3,400",
			title: "Coastal Breeze Apartments",
			address: "234 Oceanfront Avenue, Canada",
			bed: "3",
			bath: "2",
			image: require("../../assets/properties/img-10.jpeg"),
			ratings: "4.5"
		}
	];
	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mb-[50]">
			<View className="flex flex-row gap-4">
				{lists.map(function (item) {
					return (
						<View className=" w-[300] h-[260] bg-gray-50 rounded-2xl" key={item.id}>
							<View className="relative w-[300] h-[170]">
								<ImageBackground className="w-[300] h-[170] rounded-2xl" source={item.image} imageStyle={{ borderRadius: 15 }}></ImageBackground>
								<LinearGradient className="absolute top-0 left-0 w-[300] h-[170]  rounded-2xl " colors={["#00000000", "#00000000", "#00000000", "#000000d1", "#000"]} />
								<View className="absolute  bottom-[20] left-[20] flex flex-row">
									<View className="flex flex-row items-center px-3 py-1 mr-3 border border-white rounded-2xl">
										<Ionicons name="bed-outline" size={15} color="white" />
										<Text className="pl-2 text-xs text-white">{item.bed} Bed </Text>
									</View>
									<View className="flex flex-row items-center px-3 py-1 mr-3 border border-white rounded-2xl">
										<FontAwesome name="bathtub" size={15} color="white" />
										<Text className="pl-2 text-xs text-white">{item.bath} Bath </Text>
									</View>
								</View>
								<View className="shadow w-[24] h-[24] flex items-center justify-center rounded-full bg-white absolute top-[20] left-[20]">
									<Text className="font-xs">
										<AntDesign name="heart" size={12} color="red" />
									</Text>
								</View>
								<View className="shadow w-[24] h-[24] flex items-center justify-center rounded-full bg-white absolute top-[20] right-[20]">
									<Text className="font-xs">
										<Feather name="more-horizontal" size={12} color="black" />
									</Text>
								</View>
							</View>
							<View className="px-3">
								<View className="flex flex-row items-start justify-between">
									<View>
										<Text className="mt-1 text-lg font-semi-bold">{item.title}</Text>
										<Text className="text-xs text-gray-500 font-semi-bold">
											<FontAwesome5 name="map-marker-alt" size={10} color="black" /> {item.address}
										</Text>
									</View>
									<View>
										<Text className="mt-1 text-lg font-semi-bold">{item.price}</Text>
									</View>
								</View>
								<View className="w-[300] ">
									<View className="flex flex-row items-center justify-start mt-3 gap-x-3">
										<View className="bg-black rounded-lg">
											<Text className="px-3 py-2 text-xs text-white">Book Now</Text>
										</View>
										<View>
											<Text className="text-xs text-black">
												4.5 <FontAwesome name="star" size={14} color="orange" />
											</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default Featured;
