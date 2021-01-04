import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
const ViewAll = (props) => {
  const { name, description } = props;  
     return(

          <View style={styles.container}>
          
            <View style={styles.texts}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.view}>View all</Text>
            </View>
              <Text numberOfLines={1} style={styles.description}>{description}</Text>
         </View>

     );

}

export default ViewAll ;
