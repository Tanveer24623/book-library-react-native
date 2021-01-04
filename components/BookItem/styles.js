import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 listContainer:{
   flex:1,
 },
 bookContainer: {
   width:150,
   alignItems: 'center',
   justifyContent: 'flexStart',
 },
 bookImage:{
   width: 120,
   height:150,
   borderRadius: 10,
 },
 titles:{
   marginTop:10,
   width:'100%',
   alignItems: 'center'
 },
 author: {
   fontSize:16,
   color: 'grey',
 },
 title: {
   marginTop: 5,
   fontSize:18,
   fontWeight: '500'
 }
});

export default styles;