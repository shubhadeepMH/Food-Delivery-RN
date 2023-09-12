import React from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet, Text, View, } from 'react-native';
// import bgImage from "../assets/deliveryBg.jpg"
import delivery from "../assets/delivery.json"
import tw from 'twrnc'
import LottieView from 'lottie-react-native';


const Delivery = ({ navigation }) => {
  setTimeout(()=>{
    navigation.navigate("Home")
  },3000)

  return (<View style={tw`bg-green-400 h-full w-full  mt-7`} >
   

    <View style={tw`justify-center items-center h-[70%] w-full `}>

      <LottieView

        autoPlay
        style={tw`h-[15rem] w-[20rem]  `}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={delivery}
      />
    </View>
    <View style={tw`justify-center items-center w-full mt-2`}>
      <View style={tw`h-[4rem] w-[14rem] justify-center  bg-fuchsia-500 rounded-md  `}>
        <Text style={tw`text-base font-bold text-center p-2`}>Your oder is on The way</Text>
      </View>
    </View>



  </View>)
};



export default Delivery;