import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
const BookItem = (props) => {
 

  const { picture, name, company } = props.book;

    const rand = {uri: picture} 
  return(
     <View style={styles.listContainer}>
          <View style={styles.bookContainer}>
            <Image style={styles.bookImage} source={rand} />
          <View style={styles.titles}>
                <Text style={styles.author}>{name}</Text>
                <Text style={styles.title}>{company}</Text>
         </View>
         </View>
      </View> 
      );
      
  }
export default BookItem;