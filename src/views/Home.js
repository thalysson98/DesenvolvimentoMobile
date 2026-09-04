import { View,Text,StyleSheet } from "react-native";
import { Button } from 'react-native-paper';



export default function Home({navigation}) {
  return (
    <View style = {styles.container}>
        <Text style={styles.text}>
            Home
        </Text>
         <Button
            onPress={()=>navigation.navigate('MoviesScreen')} 
            mode="contained">
            Entrar
        </Button>
    </View>
  );
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    text:{
        fontSize:20,
    }
})