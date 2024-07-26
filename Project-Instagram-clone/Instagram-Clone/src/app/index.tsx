import { Link, Redirect } from "expo-router";
import { View, Text } from "react-native";

export default function Home(){

    return (
        // this is link work
        // <Link href="/about"> go to About us</Link>
        <View>
        <Redirect href="/(tabs)"/>
        <Text>Hello Welcome to the Next  Generation Ai</Text>
        </View>
    )
}