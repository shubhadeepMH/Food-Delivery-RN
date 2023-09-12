import { useNavigation, useRoute } from '@react-navigation/native'
import React, { Component, useLayoutEffect ,useEffect} from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import AddDish from '../components/AddDish';
import { useSelector } from 'react-redux';

export default function HotelScreen({ route }) {
    const navigation = useNavigation()
    
    const { image, rating, name, short_description, location, dishes } = route.params
    
        let cartItem=useSelector((state)=>{
            return state.cart
        })
       
       
    
   
    let price=0;
    cartItem.map((item)=>{
       price+=item.price
       
    })
   
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <>
        <ScrollView>
            <StatusBar hidden={false} />
            <View style={tw`relative mt-7`}>
                <Image
                    style={tw`h-45 w-full`}
                    source={{ uri: image }}
                />
                <TouchableOpacity onPress={() => navigation.goBack()} style={tw`absolute bg-green-400 p-2 left-3 rounded-full top-3 active:bg-white`}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <View style={tw`mx-1 bg-white`}>
                    <Text style={tw`font-bold ml-2 text-6 mt-1`}>{name}</Text>
                    <View style={tw`flex-row ml-2  gap-2  items-center`}>
                        <View style={tw`flex-row gap-1 justify-center items-center`}>
                            <AntDesign name="star" size={18} color="green" />
                            <Text>{rating}</Text>
                        </View>
                        <View style={tw`flex-row gap-1 justify-center items-center`}>
                            <EvilIcons name="location" size={18} color="black" />
                            <Text style={tw`text-sm text-purple-500 `}>{location}</Text>
                        </View>

                    </View>

                    <Text style={tw`text-sm `}>Lorem ipsum, dolors it amet consectetur adipisicing elit. Optio molestiae tempore exercitationem sunt nam. Temporibus?</Text>

                    <TouchableOpacity style={tw`border-t my-2 border-gray-300 flex-row justify-between py-4 px-1`}>
                        <AntDesign name="questioncircleo" size={25} color="black" />
                        <Text style={tw`font-bold text-4`}>Have a food alergy</Text>
                        <AntDesign name="right" size={25} color="green" />
                    </TouchableOpacity>
                    <View style={tw``}>
                        <View style={tw`h-14 px-2 justify-center bg-gray-300`}>
                            <Text style={tw`font-bold text-4 `}>Menu</Text>
                        </View>
                        <ScrollView style={tw`pb-20`}>
                            {
                                dishes.map((item, index) => {
                                    {/* console.log(item.name); */ }
                                    return <AddDish key={index} property={item} />
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        </ScrollView>
      { cartItem.length>0 && <TouchableOpacity onPress={()=>navigation.navigate('CheckOutScreen',{
        name,
      })} style={tw`w-[90%] absolute left-5 bottom-2  m-auto h-15 p-3 rounded-md bg-blue-600 flex-row justify-between items-center`}>
                            <Text style={tw`bg-blue-200 w-7 h-7 text-center p-1 rounded-md`}>{cartItem.length}</Text>
                            <Text style={tw`font-bold text-lg ml-8`}>View Cart</Text>
                            <Text style={tw`font-bold`}>${Math.round(price)}</Text>

        </TouchableOpacity>}
        </>
    )

}

const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 4,

    }
})
