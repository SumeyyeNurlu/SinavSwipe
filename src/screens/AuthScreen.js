
import { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView, Platform,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, FONTS, RADIUS, SHADOW } from '../theme';

export default function AuthScreen({ navigation })

{
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Eksik bilgi', 'Lütfen e-posta ve şifrenizi girin.');
      return;
    }
    setLoading(true);

    // ── TODO: Replace with Firebase Auth ──────────────────────
    // if (mode === 'login') {
    //   const cred = await signInWithEmailAndPassword(auth, email, password);
    //   onLogin(cred.user);
    // } else {
    //   const cred = await createUserWithEmailAndPassword(auth, email, password);
    //   onLogin(cred.user);
    // }
    // ──────────────────────────────────────────────────────────

    
    setTimeout(() => {
      setLoading(false);
      navigation.replace('Exams');
    }, 800);
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: insets.top }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inner}>
        {/* Brand */}
        <View style={styles.brand}>
          <Text style={styles.brandTitle}>SınavSwipe</Text>
          <Text style={styles.brandSub}>Swipe to learn. Swipe to succeed.</Text>
        </View>

        {/* Card */}
        <View style={[styles.card, SHADOW.medium]}>
          {/* Tab switcher */}
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, mode === 'login' && styles.tabActive]}
              onPress={() => setMode('login')}
            >
              <Text style={[styles.tabText, mode === 'login' && styles.tabTextActive]}>
                Giriş Yap
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, mode === 'register' && styles.tabActive]}
              onPress={() => setMode('register')}
            >
              <Text style={[styles.tabText, mode === 'register' && styles.tabTextActive]}>
                Kayıt Ol
              </Text>
            </TouchableOpacity>
          </View>

          {/* Inputs */}
          <TextInput
            style={styles.input}
            placeholder="E-posta"
            placeholderTextColor={COLORS.textLight}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            placeholderTextColor={COLORS.textLight}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Submit */}
          <TouchableOpacity
            style={[styles.button, loading && styles.buttonLoading]}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? '...' : mode === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  brand: {
    marginBottom: 40,
    alignItems: 'center',
  },
  brandTitle: {
    fontSize: 34,
    fontWeight: FONTS.thin,
    letterSpacing: -1,
    color: COLORS.text,
  },
  brandSub: {
    fontSize: 13,
    fontWeight: FONTS.light,
    color: COLORS.textSecondary,
    marginTop: 6,
    letterSpacing: 0.2,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: 24,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 24,
    backgroundColor: COLORS.surfaceAlt,
    borderRadius: RADIUS.sm,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: RADIUS.sm - 2,
  },
  tabActive: {
    backgroundColor: COLORS.surface,
    ...SHADOW.small,
  },
  tabText: {
    fontSize: 13,
    fontWeight: FONTS.medium,
    color: COLORS.textSecondary,
  },
  tabTextActive: {
    color: COLORS.text,
  },
  input: {
    backgroundColor: COLORS.surfaceAlt,
    borderRadius: RADIUS.sm,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    fontWeight: FONTS.light,
    color: COLORS.text,
    marginBottom: 12,
  },
  button: {
    backgroundColor: COLORS.text,
    borderRadius: RADIUS.sm,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonLoading: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: FONTS.medium,
    letterSpacing: 0.3,
  },
});