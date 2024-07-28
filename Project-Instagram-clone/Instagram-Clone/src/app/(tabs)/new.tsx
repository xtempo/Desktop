
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { useState } from "react";


export default function CreatePost() {

    const [caption, setCaption] = useState('')

    return (
        <View className="p-3 items-center flex-1">
            {/* Image picker from the user */}
            <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
                className="w-60 aspect-[3/4] rounded-lg shadow-md m-4"
            />

            {/* add the change post button */}
            <Text onPress={() => { }} className="text-blue-500 font-semibold m-5">Change</Text>



            {/* TextInput for the caption from the user */}
            <TextInput
                value={caption}
                onChangeText={(newValue) => setCaption(newValue)}
                placeholder="What is on your mind?"
                className="bg-blue-500 m-3 w-full h-16 p-3 rounded-lg" />


            {/* Button for sending the caption */}

            <View className="mt-auto w-full">
                <Pressable className="bg-blue-500 items-center w-full h-10 p-3 rounded-md">
                    <Text className="text-white font-semibold">Share</Text>
                </Pressable>
            </View>

        </View>

    )
}