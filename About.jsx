import { Text } from "react-native"

const About  = ({route})=>{
    const {name,age} = route.params
    return (
        <Text> This is {name}</Text>
    )
}

export default About