import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Üstteki başlığı sildik, direkt kartlarla başlıyoruz */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>Çözülen Soru</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>%71</Text>
          <Text style={styles.statLabel}>Doğruluk Oranı</Text>
        </View>
      </View>

      <View style={styles.progressCard}>
        <Text style={styles.cardTitle}>Haftalık Gelişim</Text>
        <View style={styles.placeholderGraph}>
          <Text style={styles.placeholderText}>Grafik verileri yükleniyor...</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' }, // Apple'ın standart açık gri arka planı
  statsGrid: { flexDirection: 'row', padding: 15, justifyContent: 'space-between' },
  statCard: {
    backgroundColor: '#fff',
    width: '47%',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    // Daha hafif, modern bir gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  statValue: { fontSize: 26, fontWeight: '700', color: '#007AFF' },
  statLabel: { fontSize: 13, color: '#8E8E93', marginTop: 5, fontWeight: '500' },
  progressCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: { fontSize: 17, fontWeight: '600', marginBottom: 15, color: '#000' },
  placeholderGraph: {
    height: 150,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderStyle: 'dashed'
  },
  placeholderText: { color: '#AEAEB2', fontSize: 14 }
});

export default DashboardScreen;