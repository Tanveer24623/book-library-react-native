import React, {useState} from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';
import styles from './styles';
import { Ionicons, Entypo } from '@expo/vector-icons';
import SearchModal from '../SearchModal';

const SearchPanel = (props) => {

const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <View style={styles.modalContainer}>
    <SearchModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
    
    <View style={styles.searchContainer}>
   
    <Ionicons name="ios-search" size={20} color="grey" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        underlineColorAndroid="transparent"
        placeholder="Search"
        placeholderTextColor="grey"
        autoCapitalize="none"
      />
      <TouchableHighlight
        onPress={ () => {
            setModalVisible(true)
        }}
      >
      <Entypo name="sound-mix" size={20} color="grey" style={styles.filterIcon} />
      </TouchableHighlight>
    </View>
    </>
  );
};

export default SearchPanel;
