import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
  width: '100%',
  paddingHorizontal: 10,
 },
 texts: {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between'
 },
 name: {
   fontSize:25,
   textTransform: 'capitalize',
 },
 view: {
   color: 'grey',
 },
 description: {
   fontSize:16,
   width: '100%',
   paddingVertical:10,
 }
});

export default styles;