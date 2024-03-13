import { ScrollView, StyleSheet, Text, View } from "react-native";
import CarouselCard from "./components/CarouselCard";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Menus from "./components/Menus";
import Properties from "./components/Properties";
import SearchInput from "./components/SearchInput";

export default function Page() {
	return (
		<ScrollView className="flex-1 p-4 bg-gray-100">
			<Header />
			<SearchInput />
			<Menus />
			<Heading title="Popular Properties 🔥" />
			<CarouselCard />
			<Heading title="Featured" />
			<Featured />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24
	},
	main: {
		flex: 1,
		justifyContent: "center",
		maxWidth: 960,
		marginHorizontal: "auto"
	},
	title: {
		fontSize: 64,
		fontWeight: "bold"
	},
	subtitle: {
		fontSize: 36,
		color: "#38434D"
	}
});
