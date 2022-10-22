import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Jadwal = [
  {
    id: '1',
    asal: 'Bandung',
    tujuan: 'Jakarta',
    maskapai: 'Lion Air',
    waktu : '17 Maret 2023, 18:00',

  },
  {
    id: '2',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu : '18 Maret 2023, 18:00',
  },
  {
    id: '3',
    asal: 'Jakarta',
    tujuan: 'Medan',
    maskapai: 'Sriwijaya Air',
    waktu : '19 Maret 2023, 18:00',
  },
  {
    id: '4',
    asal: 'Medan',
    tujuan: 'Jakarta',
    maskapai: 'AirAsia',
    waktu : '20 Maret 2023, 18:00',
  },
  {
    id: '5',
    asal: 'Raden Intan II',
    tujuan: 'Jakarta',
    maskapai: 'Batik Air',
    waktu : '21 Maret 2023, 18:00',
  },
  {
    id: '6',
    asal: 'Jakarta',
    tujuan: 'Raden Intan II',
    maskapai: 'Batik Air',
    waktu : '22 Maret 2023, 18:00',
  },
  {
    id: '7',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu : '23 Maret 2023, 18:00',
  },
  {
    id: '8',
    asal: 'Halim Perdana',
    tujuan: 'Kualan Namu',
    maskapai: 'Wins Air',
    waktu : '24 Maret 2023, 18:00',
  },
  {
    id: '9',
    asal: 'Silangit',
    tujuan: 'Kuala Nama',
    maskapai: 'Lion Air',
    waktu : '25 Maret 2023, 18:00',
  },

];


const Penerbangan = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanasal}>{item.asal}   -   {item.tujuan}</Text>
    <View style={styles.waktupesawat}>
      <Entypo name="aircraft" size={24} color="black" />
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.texttanggal}>{item.waktu}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <FontAwesome name="user" size={24} color="black" />
          </View>
          <Text style={styles.heading2}>Hasil Pencarian Penerbangan</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={Jadwal}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
      <Text style={styles.copyright}>Copyright Marchell Manurung - 120140208</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90D7FF',
  },
  header:{
    width:'100%',
    backgroundColor: '#90D7FF',
    padding:20,
    
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  heading2: {
    color: 'black',
    textAlign: 'center',
    top : 20,
  },
  top: {
    top : 20,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  Image: {
    width:10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:-80,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
  copyright: {
    color : '#797575',
    fontWeight: 'bold',
    marginBottom: 20,
    padding:20,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Penerbangan;