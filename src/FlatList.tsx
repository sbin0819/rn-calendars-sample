import React from "react";
import { FlatList as List, StyleSheet } from "react-native";

interface Props<T> {
  data: T[];
  renderItem: ({ item }: { item: T }) => React.ReactElement;
  [x: string]: any;
}
const FlatList = <T extends { id: string; [key: string]: any }>({
  data,
  renderItem,
  ...rest
}: Props<T>) => {
  return (
    <List
      {...rest}
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => "" + item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6
  }
});

export default FlatList;
