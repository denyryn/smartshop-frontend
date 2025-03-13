import { ThemedView } from "@/components/ThemedView";
import { FlatList, View } from "react-native";
import ProductList from "./ProductList";

// New dummy data for carousel items
const slides = [
  {
    id: "1",
    title: "Item 1",
    description: "Description for item 1",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: "2",
    title: "Item 2",
    description: "Description for item 2",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: "3",
    title: "Item 3",
    description: "Description for item 3",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: "4",
    title: "Item 4",
    description: "Description for item 4",
    imageUrl: "https://picsum.photos/200",
  },
];

export default function ProductCarousel() {
  return (
    <View>
      <FlatList
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductList item={item} />}
      />
    </View>
  );
}
