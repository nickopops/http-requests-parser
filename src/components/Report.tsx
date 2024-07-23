import { analyzeLogFileString } from '@/utils/analyzeLogFileString';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Collapsible } from './Collapsible';
import { CountResultList } from './CountResultList';

type Props = { fileString: string; resetUpload: () => void };

export const Report = ({ fileString, resetUpload }: Props) => {
  const [result] = useState(() => analyzeLogFileString(fileString));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Report</Text>

          <Button title="New Upload" onPress={resetUpload} />
        </View>

        <View style={styles.body}>
          <Collapsible defaultOpen title="The number of unique IP addresses">
            <Text style={styles.bodyText}>{result.uniqueIPCount}</Text>
          </Collapsible>

          <Collapsible defaultOpen title="The top 3 most active IP addresses">
            <CountResultList data={result.top3IPs} />
          </Collapsible>

          <Collapsible
            defaultOpen
            title="The top 3 most visited URLs (base URL path)"
          >
            <CountResultList data={result.top3BaseUrlPaths} />
          </Collapsible>

          <Collapsible title="The top 3 most visited URLs (URL path)">
            <CountResultList data={result.top3UrlPaths} />
          </Collapsible>

          <Collapsible title="The top 3 most visited URLs (full URL)">
            <CountResultList data={result.top3FullUrls} />
          </Collapsible>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  body: {
    padding: 16,
    gap: 16,
  },
  bodyText: {
    fontSize: 16,
  },
});
