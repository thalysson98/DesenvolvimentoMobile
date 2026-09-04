import { useEffect, useState } from "react";
import { View,Text,StyleSheet,FlatList} from "react-native";
import { Card} from "react-native-paper";
import { Button,ActivityIndicator  } from "react-native";

export default function Movies() {
    const [data,setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = async () => {
        try{
            const response = await fetch ('https://reactnative.dev/movies.json')
            const json =  await response.json()
            setData(json.movies)

        }catch (error){
            console.error(error)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(() =>{
        getMovies()
    },[])

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

    return (
        <View style = {styles.container}>
            <Text>
                Lista de filmes
            </Text>
            
                    
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Text>{item.title} - {item.releaseYear} </Text>
                                </Card.Content>
                            </Card>
                        }
                    />
                
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    card:{
        marginBottom: 5

    }
})