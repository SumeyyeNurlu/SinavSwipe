import { StyleSheet } from 'react-native';
import { COLORS, FONTS, RADIUS, SHADOW } from '../theme';




const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },
  headerBack: {
    width: 40, height: 40,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: COLORS.surfaceAlt,
    borderRadius: 20,
  },
  headerBackIcon: { fontSize: 26, color: COLORS.text, lineHeight: 30 },
  headerInfo: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: 15, fontWeight: FONTS.medium, color: COLORS.text },
  headerSub: { fontSize: 12, color: COLORS.textSecondary, marginTop: 2 },
  miniStats: { flexDirection: 'row', gap: 10 },
  miniStat: { fontSize: 13, fontWeight: FONTS.medium },

  hintRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingTop: 12,
  },
  hint: { fontSize: 12, fontWeight: FONTS.light, letterSpacing: 0.3 },

  swiperContainer: { flex: 1 },

  cardWrapper: { width: '100%', height: '100%' },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBack: { backgroundColor: '#FCFCFC' },
  cardBadge: {
    position: 'absolute',
    top: 24,
    left: 28,
    fontSize: 10,
    fontWeight: FONTS.semibold,
    letterSpacing: 1.5,
    color: COLORS.textLight,
  },
  cardQuestion: {
    fontSize: 20,
    fontWeight: FONTS.light,
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: 32,
    letterSpacing: -0.2,
  },
  cardAnswer: {
    fontSize: 17,
    fontWeight: FONTS.light,
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: 28,
  },
  tapHint: {
    position: 'absolute',
    bottom: 24,
    fontSize: 11,
    color: COLORS.textLight,
    letterSpacing: 0.3,
  },

  actions: {
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingTop: 16,
    gap: 16,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: RADIUS.md,
    gap: 8,
  },
  actionReview: { backgroundColor: '#FEF2F2' },
  actionLearned: { backgroundColor: '#F0FFF4' },
  actionIcon: { fontSize: 18 },
  actionLabel: { fontSize: 14, fontWeight: FONTS.medium },

  finishWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  finishEmoji: { fontSize: 60, marginBottom: 20 },
  finishTitle: { fontSize: 30, fontWeight: FONTS.thin, color: COLORS.text, letterSpacing: -0.8 },
  finishSub: { fontSize: 14, color: COLORS.textSecondary, marginTop: 8, marginBottom: 40 },
  statsRow: { flexDirection: 'row', marginBottom: 48 },
  backBtn: {
    backgroundColor: COLORS.text,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: RADIUS.md,
  },
  backBtnText: { color: '#fff', fontSize: 15, fontWeight: FONTS.medium },


badgeWrap: { alignItems: 'center', marginHorizontal: 24 },
  badgeValue: { fontSize: 40, fontWeight: FONTS.thin },
  badgeLabel: { fontSize: 13, color: COLORS.textSecondary, marginTop: 4 },




});



export default styles;