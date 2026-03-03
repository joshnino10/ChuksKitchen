import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

export default function PhoneNumber() {
  const [number, setNumber] = useState('');

  const router = useRouter()

  const verifyNumber = ()=> {
    if(!number)
    router.replace('/(auth)/verifynumber')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Mobile Number</Text>

      <View style={styles.inputContainer}>
       
        <Text style={styles.countryCode}>+234</Text>

    
        <View style={styles.divider} />

        <TextInput
          style={styles.input}
          placeholder="Enter your mobile number"
          keyboardType="phone-pad"
          value={number}
          onChangeText={setNumber}
          maxLength={10} 
        />
      </View> 

   <View style={styles.buttonContainer}>
      <CustomButton
        onPress={verifyNumber}
        style={{borderRadius:20,}}
       title='Verify Phone Number'/>
   </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    marginVertical: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 51,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#F6F6F6',
  },

  countryCode: {
    fontSize: 16,
    color: '#555',
  },

  divider: {
    width: 1,        
    height: '60%',     
    backgroundColor: '#ccc',
    marginHorizontal: 8, 
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer:{
    marginTop:30
  }
});