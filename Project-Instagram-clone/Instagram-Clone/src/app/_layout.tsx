import { Slot , Stack, Tabs } from "expo-router"
import { Text } from "react-native"
import "../../global.css"
export default function RootLayout(){
    return <Stack screenOptions={{headerShown: false}} />
}