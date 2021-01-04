
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 listContainer:{
  flex: 1,
 },
 bookContainer: {
   width:130,
   height:150,
   backgroundColor: '#fff',
   margin:10,
   borderRadius:10,
   elevation:10,
   alignItems: 'center',
   justifyContent: 'center',
 },
 bookImage:{
   /*width: 120,
   height:150,*/
   tintColor: 'red',
   width: 30,
   height: 30,
   /*borderRadius: 10,*/
 },
 titles:{
   marginTop:10,
   width:'100%',
   alignItems: 'center'
 },
 author: {
   fontSize:16,
   color: 'red',
 },
 title: {
   color:'red',
   marginTop: 5,
   fontSize:18,
   fontWeight: '700'
 }
});

export default styles;