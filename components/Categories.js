import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'
import tw from 'twrnc'
import categories from '../data/category.json'

export default function Categories () {

    return (
      <View>
      <ScrollView
      horizontal
      style={tw`m-3`}
      >
      {categories.map((item,index)=>{
        return <CategoryCard key={index} detail={item}/>
      })}
        
        
      </ScrollView>
      </View>
    )
  
}

const styles = StyleSheet.create({})
