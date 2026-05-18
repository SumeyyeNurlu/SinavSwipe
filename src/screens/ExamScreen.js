
import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EXAMS } from '../data/staticData';
import { COLORS, FONTS, RADIUS, SHADOW } from '../theme';

export default function ExamScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header - Burayı tek satıra indirdik, sadeleşti */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Merhaba 👋</Text>
          <Text style={styles.email}>sumeyye@sakarya.edu.tr</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.replace('Auth')} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Çıkış</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Sınav Seç</Text>
        <Text style={styles.subtitle}>Hangi sınava çalışıyorsun?</Text>

        <View style={styles.grid}>
          {EXAMS.map((exam) => (
            <TouchableOpacity 
              key={exam.id} 
              style={styles.examRow} 
              onPress={() => navigation.navigate('Subjects', { exam: exam })}
            >
              <Text style={styles.examText}>{exam.label}</Text>
              {/* Oku buraya ekledik ki sağ taraf boş kalmasın, şık dursun */}
              <Text style={{ color: '#CCC', fontSize: 18 }}>{'>'}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  greeting: { fontSize: 15, fontWeight: FONTS.regular, color: COLORS.text },
  email: { fontSize: 12, color: COLORS.textSecondary, marginTop: 2 },
  logoutBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.surfaceAlt,
    borderRadius: RADIUS.sm,
  },
  logoutText: { fontSize: 13, fontWeight: FONTS.medium, color: COLORS.textSecondary },
  content: { padding: 24 },
  title: {
    fontSize: 30,
    fontWeight: FONTS.thin,
    letterSpacing: -0.8,
    color: COLORS.text,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: FONTS.light,
    color: COLORS.textSecondary,
    marginBottom: 32,
  },
  grid: {
    
    gap: 16,
  },
  examRow: {
    width: '100%',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: 20,
    flexDirection: 'row',        // Yazıyı ve oku yan yana dizmek için
    alignItems: 'center',        // Dikeyde ortala
    justifyContent: 'space-between', // Yazı sola, ok sağa
    ...SHADOW.small,
  },
  examIcon: { fontSize: 36, marginBottom: 12 },
 examText: {
    fontSize: 17,
    fontWeight: FONTS.semibold,
    color: COLORS.text,
    letterSpacing: 0.5,
  },
  examAccent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    borderBottomLeftRadius: RADIUS.lg,
    borderBottomRightRadius: RADIUS.lg,
  },
});