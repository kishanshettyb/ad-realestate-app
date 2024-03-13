import * as React from "react";
import { View, SafeAreaView, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Carousel from "react-native-snap-carousel";
import Properties from "./Properties";

export default class CarouselCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0,
			carouselItems: [
				{
					id: "1",
					price: "$2,999",
					sqft: "2400",
					type: "/month",
					image: require("../../assets/properties/img-1.jpeg"),
					ratings: "4.5"
				},
				{
					id: "2",
					price: "$1,500",
					sqft: "2000",
					type: "/month",
					image: require("../../assets/properties/img-2.jpeg"),
					ratings: "4.0"
				},
				{
					id: "3",
					price: "$5,499",
					sqft: "3000",
					type: "/month",
					image: require("../../assets/properties/img-3.jpeg"),
					ratings: "4.9"
				},
				{
					id: "4",
					price: "$2,100",
					sqft: "1500",
					type: "/month",
					image: require("../../assets/properties/img-4.jpeg"),
					ratings: "4.3"
				},
				{
					id: "5",
					price: "$3,400",
					sqft: "2,900",
					type: "/month",
					image: require("../../assets/properties/img-5.jpeg"),
					ratings: "4.5"
				}
			]
		};
	}

	_renderItem({ item, index }) {
		return (
			<View>
				<View className="relative w-full">
					<Image className="rounded-lg w-full h-[200]" source={item.image} />
					<View className="absolute shadow-sm border-2 border-gray-50 ml-4 mt-4 bg-white rounded-2xl px-4 py-2">
						<Text>
							{item.ratings} <FontAwesome name="star" size={18} color="orange" />
						</Text>
					</View>
					<View className="bg-gray-200 p-5 rounded-3xl absolute w-full -bottom-10">
						<Text className="text-gray-600">{item.sqft} sqft</Text>
						<Text className="text-2xl font-bold">
							{item.price}
							<Text className="text-sm font-normal text-gray-600">{item.type}</Text>
						</Text>
					</View>
					<View className="bg-black rounded-full w-[40] h-[40] flex items-center justify-center absolute bottom-6 right-6 shadow">
						<Feather name="bookmark" size={24} color="white" />
					</View>
				</View>
			</View>
		);
	}

	render() {
		return (
			<SafeAreaView className="flex-1 h-[240] w-full justify-center">
				<View className="flex-1 flex-row">
					<Carousel
						layout={"stack"}
						layoutCardOffset={`50`}
						ref={(ref) => (this.carousel = ref)}
						data={this.state.carouselItems}
						sliderWidth={300}
						itemWidth={300}
						renderItem={this._renderItem}
						onSnapToItem={(index) => this.setState({ activeIndex: index })}
					/>
				</View>
			</SafeAreaView>
		);
	}
}
