import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc'
import ItemCard from './ItemCard';
import dishes from '../data/dishes.json'


export default function FeatureSection(props) {
    // console.log(props.data);
    return (
        <View style={tw`mx-2 text-sm `}>
            <View>
                <View style={tw`flex-row justify-between `}>
                    <Text style={tw`font-bold text-purple-400`}>{props.heading} </Text>
                    <AntDesign name="arrowright" size={24} color="green" />
                </View>
                <Text style={tw`text-sm font-bold`}>Mouth Watering Dishes Is Ready 🤷‍♂️🤷‍♂️ </Text>
            </View>
            <ScrollView 
            horizontal={true}
            style={tw``}
            showsHorizontalScrollIndicator={false}
            >
            {props.data.map((item,index)=>{
                return <ItemCard key={index} detail={item}/>
            })}
           
            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({})
