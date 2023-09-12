import React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';

export default function CheckOutScreen({ route, navigation }) {
  const { name } = route.params
  let dishData = useSelector((state) => {
    return state.cart
  })
  let groupData = []
  let subTotal=0
  let deliveryFee=Math.round(Math.random()*20);
  dishData.map((item) => {
    subTotal+=item.price
    let index = groupData.findIndex((obj) => {
      return obj.name == item.name
    })
    if (index != -1) {
      groupData[index].count += 1;
    } else {
      groupData.push({ name: item.name, count: 1, price: item.price, image: item.image })
    }
  })
  // console.log(groupData);

  return (
    <SafeAreaView style={tw`mt-7 h-full rounded-md   bg-gray-300`}>
      <View style={tw`flex-row gap-5 justify-between bg-white p-3 items-center  `} >
        <View style={tw`text-center`}>
          <View style={tw`ml-35`}>
            <Text style={tw`font-bold text-lg text-center`}>Basket</Text>
            <Text style={tw`text-center`}>{name}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()} style={tw``}><Entypo name="circle-with-cross" size={30} color="green" /></TouchableOpacity>
      </View>
      <View style={tw`flex-row items-center justify-between px-3 bg-white h-20 border-b border-green-300 m-2`}>
        <View style={tw`flex-row gap-2 items-center `}>
          <Image
            style={tw`h-10 w-10 rounded-full`}
            source={{
              uri: 'https://scontent.fccu9-1.fna.fbcdn.net/v/t39.30808-6/323446131_910466939989987_1244323823406279756_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=56tuXsTt6F0AX9E3sRW&_nc_ht=scontent.fccu9-1.fna&oh=00_AfDFqj-MUfh3KG12ziwvy5_dE6jRSAMfv20NMec4OmD07Q&oe=64ED4812'
            }}

          />
          <Text style={tw`font-bold `}>Deliver In 50-75 min</Text>
        </View>
        <Text style={tw`text-blue-500 font-bold`}>Change</Text>
      </View>
      <ScrollView style={tw`mt-3 bg-white   `}>

        {groupData.map((item,index) => {
          return (<View key={index} style={tw`flex-row shadow-2  shadow-black py-6 px-4 gap-3 justify-around items-center border-violet-200 border-b`}>
            <Text style={tw`w-12 `}>{item.count} <Entypo name="cross" size={15} color="black" /></Text>
            <View style={tw`flex-row items-center  w-65   gap-2 pr-15`}>
              <Image
                source={{ uri: item.image }}
                style={tw`h-11 w-11 rounded-full`}
              />
              <Text>{item.name}</Text>
            </View>

            <Text>{item.price}</Text>
          </View>)
        })}

      </ScrollView>
      <View style={tw` bg-white  w-full px-7 py-8 my-3`}>
        <View style={tw`flex-row justify-between py-2 items-center`}>
          <Text>Subtotal</Text>
          <Text>{Math.round(subTotal)} <Text style={tw`font-bold text-[1rem]`} >$</Text></Text>
        </View>
        <View style={tw`flex-row justify-around justify-between py-2 items-center`}>
          <Text>Delivery Fee</Text>
          <Text>{deliveryFee} <Text style={tw`font-bold text-[1rem]`} >$</Text></Text>
        </View>
        <View style={tw`flex-row justify-between py-2 items-center`}>
          <Text>Order Total</Text>
          <Text>{Math.round(deliveryFee+subTotal)} <Text style={tw`font-bold text-[1rem]`} >$</Text></Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Delivery")} style={tw`bg-violet-600 px-3 py-4 rounded-md shadow-md items-center `}>
          <Text style={tw`font-bold text-white`}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )

}
