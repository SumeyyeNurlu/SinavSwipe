import { Animated, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/SwipeScreen.styles'; 
import { COLORS, SHADOW } from '../theme';
const QuestionCard = ({ card, handleFlip, frontRotate, backRotate }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={handleFlip} style={styles.cardWrapper}>
      {/* Front */}
      <Animated.View style={[styles.card, SHADOW.medium, { transform: [{ rotateY: frontRotate }], backfaceVisibility: 'hidden' }]}>
        <Text style={styles.cardBadge}> SORU </Text>
        <Text style={styles.cardQuestion}>{card.questionText}</Text>
        <Text style={styles.tapHint}>Cevabı görmek için dokun</Text>
      </Animated.View>

      {/* Back */}
      <Animated.View style={[styles.card, styles.cardBack, SHADOW.medium, { transform: [{ rotateY: backRotate }], backfaceVisibility: 'hidden' }]}>
        <Text style={[styles.cardBadge, { color: COLORS.textSecondary }]}>CEVAP</Text>
        <Text style={styles.cardAnswer}>{card.options[card.correctAnswer]}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default QuestionCard;