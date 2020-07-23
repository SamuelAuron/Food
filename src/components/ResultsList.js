import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultList = ({ tittle, results }) => {
  return(
    <View>
      <Text style={styles.title}>{tittle}</Text>
      <FlatList 
        horizontal
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({item}) => {
          return <Text>{item.name}</Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultList;