import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const FriendRecommand = () => {
    const HumanName = '미이'
    const DogInfo = '미유 7세 믹스 5kg'

    const navigation = useNavigation()
    return (
        <>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',}}>
             <TouchableWithoutFeedback onPress={()=>{navigation.push('FriendProfile')}}>
                <View style={Styles.requestContainer}>
                    <Image 
                        source={require('../assets/icons/Ellipse.png')}
                        resizeMode="contain"
                        style={{
                            width: 70,
                            height: 70,
                        }}
                    />
                    <View style={Styles.requestTextBox}>
                        <Text style={{...Styles.requestText, fontSize: 20, marginTop: -15,}}>{HumanName}</Text>
                        <Text style={{...Styles.requestText, fontSize: 16, marginTop: 3,}}>{DogInfo}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
                <TouchableOpacity>
                    <View style={{marginTop:-20,...Styles.RequestBtn}}>
                        <Text style={{color:"#FF772F",}}>친구 신청</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default FriendRecommand

const Styles = StyleSheet.create({
    requestContainer: {
        flexDirection:'row',
        alignItems: 'center',
        paddingBottom: 20,
    },
    requestTextBox: {
        marginLeft: 10,
    },
    requestText: {
        color: '#282828'
    },
    RequestBtn:{
        paddingVertical:3,
        paddingHorizontal: 9,
        borderColor: '#FF772F',
        borderWidth: 1,
        borderRadius: 15
    }
})