import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   searchContainer: {
     width: '90%',
     height: 35,
     alignItems: 'center',
     justifyContent: 'space-between',
     backgroundColor: 'white',
     flexDirection: 'row',
     borderRadius: 20,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 5 
     
   },
   searchIcon:{
     paddingHorizontal:10,
   },
   searchInput:{
     flex:1,
    /* fontSize: '20',*/
     color: 'grey'
   },
   filterIcon:{
     paddingHorizontal:10,
   }
});

export default styles;