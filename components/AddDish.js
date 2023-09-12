import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/Slices/CartSlice';


export default function AddDish(props) {
    const { image, price, name } = props.property
    const dispath=useDispatch()
    // console.log(name);
    const [isPressed, setIsPressed] = useState(false)
    const [quantity,setQuantity]=useState();
    let totalDishes=useSelector((state)=>{
       return state.cart
    })
   let dish=totalDishes.filter((item)=>name==item.name)
   
    // console.log(dish.length);
    
   


    return (
        <TouchableOpacity onPress={() => setIsPressed(!isPressed)} style={tw`flex-row w-[80%] justify-between gap-4 p-2`}>
            <View>
                <Text style={tw`font-bold text-4 text-green-600`}>{name}
                </Text>
                <Text style={tw`text-xs`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius eum tempora ipsa animi quam.
                </Text>

                <Text style={tw`mt-1 text-xs opacity-80 font-bold text-gray-800`}>INR {price}</Text>
              { isPressed && <View style={tw`flex-row mt-1 gap-2 items-center font-bold`}>
                    
                    <TouchableOpacity onPress={()=>dispath(removeFromCart(name))}>
                        <AntDesign  name="minuscircle" size={26} color={dish.length>0?"green":"gray"} />
                    </TouchableOpacity>
                    <Text style={tw`font-bold text-5`}>{dish.length}</Text>
                    <TouchableOpacity onPress={()=>dispath(addToCart(props.property))}>
                        <AntDesign name="pluscircle" size={26} color="green" />
                    </TouchableOpacity>
                   
                </View>}
            </View>
            <View>
                <Image
                    style={tw`h-13 w-17`}
                    source={{
                        uri: image
                    }}
                />
            </View>



        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({})
