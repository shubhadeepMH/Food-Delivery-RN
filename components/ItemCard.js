import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function ItemCard(props) {
    // console.log(props.detail);
    return (
        <TouchableOpacity style={tw`m-2 bg-white rounded-md shadow-2 shadow-gray-300`}>
            <Image
                style={tw`h-30 bg-transparent w-60`}
                source={{ uri:props.detail.image}}
            />

            {/* Info */}
            <View style={tw`m-2 gap-1`}>
                <Text style={tw`font-700  `}>{props.detail.name}</Text>
                <View style={tw`flex-row  gap-2`}>
                    <AntDesign name="star" size={24} color="green" />
                    <Text style={tw`font-400 text-sm`}>{props.detail.rating}</Text>
                    <Text style={tw`font-400 text-sm`}>{props.detail.price}</Text>
                </View>
                <View style={tw`flex-row  gap-2`}>
                <EvilIcons name="location" size={24} color="black" />
                <Text>{props.detail.category}</Text>
                </View>
            </View>


        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({})
