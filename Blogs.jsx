import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"

const Blogs = ()=>{
    const blogs = [
        {
            id : 1, 
            title : "blog 1"
        },
        {
            id : 2, 
            title : "blog 2"
        },
        {
            id : 3, 
            title : "blog 3"
        },
        {
            id : 4, 
            title : "blog 4"
        },
        {
            id : 5, 
            title : "blog 5"
        },
        {
            id : 6, 
            title : "blog 6"
        },
        {
            id : 7, 
            title : "blog 7"
        },
        {
            id : 8, 
            title : "blog 8"
        },
        {
            id : 9, 
            title : "blog 5"
        },
        {
            id : 10, 
            title : "blog 6"
        },
        {
            id : 11, 
            title : "blog 7"
        },
        {
            id : 12, 
            title : "blog 8"
        }
    ]
    return (
        <View>
            {/* {
                blogs.map((blog)=>{
                    return (
                       <ScrollView style={styles.blogs}> 
                         <Text style={{fontSize : 24,textAlign : 'center',color : 'white'}}> {blog.title}</Text>
                         </ScrollView>
                    )
                })
            } */}
            <FlatList data={blogs} renderItem={({item})=>(
                 <View style={styles.blogs}> 
                 <Text style={{fontSize : 24,textAlign : 'center',color : 'white'}}>{item.title}</Text>
                 </View>
    )}/>
        </View>
    )
}


export default Blogs 

const styles = StyleSheet.create({
   blogs : {
    backgroundColor : 'blue',
    padding : 20,
    marginVertical : 10,
    marginHorizontal : 17
   }
})