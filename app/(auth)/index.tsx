import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

    const [ActiveTab, setActiveTab] = useState('phone number')

    const activeTab = [
        {
            id:'1',
            tab: 'phone number'
        },

        {
            id:'2',
            tab: 'email'
        },
    ]


  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/images/small product logo.png")}
          style={styles.logo}
        />

        <Text style={styles.Title}>Join Chucks Kitchen</Text>
        <Text style={styles.SubTitle}>
          Experience authentic Nigeria homemade meals delivered to your door.
        </Text>
      </View>
      <View>
        {
            activeTab.map((item) => (
                <View
                  style={styles.activeTabCard} 
                  key={item.id}>

                    <Text>{item.tab}</Text>



                </View>
            ))
        }



      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop:40,
    width: 88,
    height: 63,
  },

  Title:{
    fontFamily: 'MontserratSemiBold',
    fontSize:26,
    fontWeight:'600',
    textAlign:'center',
    marginTop:8
  },

  SubTitle:{
    fontFamily:'MontserratMedium',
    color: '#8D8781',
    textAlign:'center',
    fontSize:16,
    marginTop:10
  },
  activeTabCard:{
    marginTop:20,
    flexDirection:'row',
    backgroundColor: '#F5F5F5'
  }
});
