import React from 'react';
import { View, Text, FlatList } from 'react-native';
import books from '../BookList/books';
import BookItem from '../BookItem';

const BookList = (props) => {
 
     return(

          <View>
                <FlatList 
                  data={books}
                  
                  renderItem={({item}) => <BookItem book={item} />}
                  keyExtractor={(item) => item._id}
                  decelerationRate={'fast'}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
         </View>

     );

}

export default BookList ;
