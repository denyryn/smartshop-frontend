import { Image, Text, useWindowDimensions, View } from "react-native";

interface ProductItem {
  imageUrl: string;
  title: string;
  description: string;
}

export default function ProductList({ item }: { item: ProductItem }) {
  const { width } = useWindowDimensions();
  const imageSize = width; // or any other calculation

  return (
    <View style={{ width }}>
      <Image
        source={{ uri: item.imageUrl }}
        style={{ width: imageSize, height: imageSize }}
      />
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
}
