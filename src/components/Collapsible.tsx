import { type PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

type Props = PropsWithChildren & { title: string; defaultOpen?: boolean };

export function Collapsible({ children, title, defaultOpen }: Props) {
  const [isOpen, setIsOpen] = useState(!!defaultOpen);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsOpen((value) => !value)}
        style={styles.heading}
      >
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={16}
          color={Colors.primary}
        />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    paddingVertical: 8,
    paddingLeft: 24,
    paddingRight: 16,
  },
});
