import {FlatList} from "react-native";
import posts from "~/assets/data/posts.json";
import PostListItem from "~/src/components/PostListItem";




export default function FeedScreen() {

    return (

        <FlatList 
            data={posts}
            contentContainerStyle={{gap: 20}}
            renderItem={({ item }) => <PostListItem post={item}/>}
            showsVerticalScrollIndicator={false}
        />
    )

}