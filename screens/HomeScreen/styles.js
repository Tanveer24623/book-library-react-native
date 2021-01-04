import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 listContainer:{
  width: '100%',
  height: '100%',
 },
 searchPanel:{
  width:'100%',
  alignItems: 'center',
  marginTop:50,
  marginBottom:20
 },
 bookListHori:{
  backgroundColor: '#ffffff',
  marginVertical:10,
  borderTopLeftRadius:20,
  borderBottomLeftRadius:20,
  marginLeft:20,
  paddingVertical:20,
  paddingLeft:20,
  shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.5,
   shadowRadius: 20,
  elevation:20,
  },
 categoryList:{
   backgroundColor: 'lightblue',
   marginVertical: 20,
   marginLeft:20,
   borderBottomLeftRadius:20,
   borderTopLeftRadius:20,
 }
});

export default styles;