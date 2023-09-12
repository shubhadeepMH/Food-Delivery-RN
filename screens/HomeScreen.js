import React, { Component, useLayoutEffect } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeatureSection from '../components/FeatureSection';
import HotelSection from '../components/HotelSection'
import dishesData from '../data/dishes.json'
import resturants from '../data/restaurents.json'

import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation=useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
           headerShown:false,
        })
    },[])
    return (
        <ScrollView>
        <SafeAreaView style={tw`bg-gray-200 h-[100%] mt-7`}>
            <View style={tw`p-4 flex-row  `}>
                <View style={tw`flex-row flex-1`}>
                    <Image
                        style={tw`h-10 w-10 rounded-full `}
                        source={{
                            uri: 'https://scontent.fccu9-3.fna.fbcdn.net/v/t39.30808-6/336376720_657182306176427_3844543285940851821_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c95VIvHmFDkAX_4TIZm&_nc_ht=scontent.fccu9-3.fna&oh=00_AfDXCNYV0MLAE4xeuTbIIFFEFzP388eVkJSkH4rRM46wXQ&oe=64BAB852'
                        }} />

                    <View style={tw`mx-2`}>
                        <Text style={tw`text-xs italic`}>Food on the way</Text>
                        <View style={tw`flex-row `}>
                            <Text style={tw` font-bold`}>Current Location</Text>
                            <Text style={tw`mt-1`}> <AntDesign name="down" size={16} color="green" /></Text>
                        </View>

                    </View>
                </View>
                <AntDesign style={tw`mt-3`} name="user" size={24} color="green" />
            </View>
            {/* Search Bar */}
            <View style={tw`flex-row m-1 `}>
                <View style={tw`flex-row flex-1 bg-gray-400  rounded-md mx-3 px-2 items-center`}>
                    <AntDesign name="search1" size={20} color="black" />
                    <TextInput style={tw`ml-3 text-white`} placeholder='Cousins & Hotels'
                        keyboardType='default'
                       
                    />
                </View>
                <Ionicons style={tw`mx-1`} name="fast-food" size={24} color="green" />
            </View>
            {/* Category Section */}
            <Categories/>
            

            {/* Featured */}
            <FeatureSection data={dishesData} heading={"Offers Near You"}/>
            <HotelSection data={resturants} heading={"Best Resturants For You"}/>
            {/* <FeatureSection/> */}
            
            
           
        </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({})
