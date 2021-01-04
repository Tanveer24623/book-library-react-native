import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import categories from '../CategoryList/categories';
import styles from './styles';

const CategoryList = (props) => {

 const background = 'blue';
 const newColor = 'red';  
     return(

          <View style={styles.categoriesList}>
                <FlatList 
                  data={categories}
                  
                  renderItem={({item}) =>                              <View style={styles.listContainer}>
          <View style={styles.bookContainer}>
            <Image style={styles.bookImage} source={item.icon} />
          
          <View style={styles.titles}>
                <Text style={styles.title}>{item.categoryName}</Text>
                <Text style={styles.author}>{item.numOfBooks} books</Text>
         </View>
         </View>
      </View> 
                  
                
                  
      
                  }
                  keyExtractor={(item) => item.id}
                  
                  decelerationRate={'fast'}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
         </View>

     );

}

export default CategoryList ;
