import { View, Text, StyleSheet } from 'react-native';
import type { CountResult } from '@/types';

type Props = { data: CountResult[] };

export const CountResultList = ({ data }: Props) => {
  if (!data.length)
    return (
      <View style={styles.emptyView}>
        <Text>No Data</Text>
      </View>
    );

  return (
    <View>
      <View style={styles.row}>
        <View style={styles.rankCol} />
        <View style={styles.valueCol} />
        <View style={styles.countCol}>
          <Text style={styles.countText}>Count</Text>
        </View>
      </View>

      {data.map((row) => (
        <View key={row.value} style={styles.row}>
          <View style={styles.rankCol}>
            <Text style={styles.colText}>{row.rank}</Text>
          </View>
          <View style={styles.valueCol}>
            <Text style={styles.colText}>{row.value}</Text>
          </View>
          <View style={styles.countCol}>
            <Text style={styles.countText}>{row.count}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyView: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  rankCol: {
    width: 40,
  },
  valueCol: {
    flex: 2,
  },
  countCol: {
    flex: 1,
  },
  colText: {
    fontSize: 16,
  },
  countText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
