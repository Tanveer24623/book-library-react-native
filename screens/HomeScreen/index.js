import React from 'react';
import { View, Text } from 'react-native';
import { SearchPanel, BookList, CategoryList, ViewAll } from '../../components';
import styles from './styles';
const HomeScreen = (props) => {
    
     return(
         <View style={styles.listContainer}>
             <View style={styles.searchPanel}>
               <SearchPanel />
             </View>
             <View style={styles.bookListHori}>
               <ViewAll name={'discover new'} description={'Hunt new books before other bookworms do it'} />
               <BookList />
             </View>
             <View style={styles.categoryList}>
             <ViewAll name={'Categories'} />
               <CategoryList />
             </View>
         </View>
          
      /* <SearchPanel />*/
              
     );

}

export default HomeScreen ;
