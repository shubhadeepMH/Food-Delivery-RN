import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc'
import HotelCard from '../components/HotelCard'



export default function FeatureSection(props) {
    // console.log(props.data);
    return (
        <View style={tw`mx-2 text-sm `}>
            <View>
                <View style={tw`flex-row justify-between `}>
                    <Text style={tw`font-bold text-purple-400`}>{props.heading}</Text>
                    <AntDesign name="arrowright" size={24} color="green" />
                </View>
                <Text style={tw`text-sm font-bold `}>Countries Top Class Hotels On Service For You </Text>
            </View>
            <ScrollView 
            horizontal={true}
            style={tw``}
            showsHorizontalScrollIndicator={false}
            >
            {props.data.map((item,index)=>{
                return <HotelCard key={index} detail={item}/>
            })}
           
            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({})
