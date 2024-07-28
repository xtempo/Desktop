import { Text, View, Image , } from "react-native";
import {Ionicons, Feather, AntDesign} from '@expo/vector-icons';


export default function PostListItem({ post }){

   

    return (

        <View className="bg-white">
            {/* Header of our post */}
            <View 
            className="p-3 space-x-1 flex-row items-center gap-1">
                <Image 
                source={{ uri: post.user.image_url}}  className=" w-12 aspect-square rounded-full"/>

                <Text className="font-semibold " > {post.user.username} </Text>
            </View>

            {/* image or post of that profile */}
            <Image
                source={{ uri: post.image_url }}
                className=" w-full aspect-[4/3] " />


            {/* icons like heart, comment, share */}
            <View className="flex-row gap-3 p-3">
                 <AntDesign  name="hearto" size={20}/>
                 <Ionicons name="chatbubble-outline" size={20} />
                 <Feather name="send" size={20}/>

                 <Feather name="bookmark" size={20} className="ml-auto"/>

            </View>
        </View>
    );
}