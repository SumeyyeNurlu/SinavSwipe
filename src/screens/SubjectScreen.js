/**
 * SubjectScreen.js — Step 2: Subject Selection
 */
import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SUBJECTS } from '../data/staticData';
import { COLORS, FONTS, RADIUS, SHADOW } from '../theme';

export default function SubjectScreen({ route, navigation }) 

{ 
  const { exam } = route.params; 
  const insets = useSafeAreaInsets();
  const subjects = SUBJECTS[exam.id] || [];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
     <Header onBack={() => navigation.goBack()} label={exam.label} />
      <View style={styles.content}>
        <Text style={styles.title}>Ders Seç</Text>
        <Text style={styles.subtitle}>{exam.label} derslerinden birini seç</Text>

        <FlatList
          data={subjects}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.row, SHADOW.small]}
              onPress={() => navigation.navigate('Topics', { exam: exam, subject: item })}
              activeOpacity={0.7}
            >
              <Text style={styles.rowLabel}>{item.label}</Text>
              <Text style={styles.rowArrow}>›</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ gap: 10, paddingBottom: 40 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 24 },
  title: { fontSize: 28, fontWeight: FONTS.thin, letterSpacing: -0.6, color: COLORS.text, marginBottom: 4 },
  subtitle: { fontSize: 13, color: COLORS.textSecondary, fontWeight: FONTS.light, marginBottom: 28 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  rowLabel: { flex: 1, fontSize: 16, fontWeight: FONTS.regular, color: COLORS.text },
  rowArrow: { fontSize: 22, color: COLORS.textLight },
});


/**
 * TopicScreen.js — Step 3: Topic Selection
 * Exported from the same file for conciseness; split into separate files if preferred.
 */
import { TOPICS } from '../data/staticData';

export function TopicScreen({ route, navigation }) {  
  const { exam, subject } = route.params;
  const insets = useSafeAreaInsets();
  
  const key = `${exam.id}_${subject.id}`;
  const topics = TOPICS[key] || [];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
<Header onBack={() => navigation.goBack()} label={`${exam.label} - ${subject.label}`} />
      <View style={styles.content}>
        <Text style={styles.title}>Konu Seç</Text>
        <Text style={styles.subtitle}>{subject.label} konularından birini seç</Text>

        {topics.length === 0 ? (
          <View style={emptyStyles.wrap}>
            <Text style={emptyStyles.text}>Bu konu için henüz içerik eklenmedi.</Text>
          </View>
        ) : (
          <FlatList
            data={topics}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.row, SHADOW.small]}
               onPress={() => navigation.navigate('Swipe', { 
                          exam: exam, 
                          subject: subject, 
                          topic: item 
                        })}
                activeOpacity={0.7}
              >
                <Text style={styles.rowLabel}>{item.label}</Text>
                <Text style={styles.rowArrow}>›</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ gap: 10, paddingBottom: 40 }}
          />
        )}
      </View>
    </View>
  );
}

const emptyStyles = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 14, color: COLORS.textSecondary, textAlign: 'center' },
});


/**
 * Shared Header component
 */
function Header({ onBack, label }) {
  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={onBack} style={headerStyles.backBtn}>
        <Text style={headerStyles.backIcon}>‹</Text>
      </TouchableOpacity>
      <Text style={headerStyles.label} numberOfLines={1}>{label}</Text>
      <View style={headerStyles.spacer} />
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.surfaceAlt,
    marginRight: 10,
  },
  
  spacer: { width: 40 },
});