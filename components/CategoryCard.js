import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import tw from 'twrnc'

export default function CategoryCard (props) {
 
    return (
      <View style={tw`mx-2 justify-center`}>
        <Image
        style={tw`h-16 rounded-sm w-25  relative`}
         source={{uri:props.detail.image}}/>
         <Text style={tw`text-xs text-black absolute bottom-1 rounded-md shadow-md shadow-white font-bold text-center m-auto `}>{props.detail.name}</Text>
      </View>
    )
  }


const styles = StyleSheet.create({})
