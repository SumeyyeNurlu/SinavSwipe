import { useQuestions } from '../hooks/useQuestions';
import { useRef, useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import styles from '../styles/SwipeScreen.styles';
import { ActivityIndicator, Animated, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, FONTS, SHADOW } from '../theme';
import { calculateNextReview, updateProgress } from '../utils/algorithm';

export default function SwipeScreen({ route, navigation }) 

{  
const insets = useSafeAreaInsets();
const { cards, loading } = useQuestions();
  const { exam, subject, topic } = route.params;
  const swiperRef = useRef(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [finished, setFinished] = useState(false);
  const [stats, setStats] = useState({ learned: 0, review: 0 });
  const flipAnim = useRef(new Animated.Value(0)).current;
 
  const handleFlip = () => 
{
  
  setFlipped(prevFlipped => {
    const newState = !prevFlipped; 
    
   
    const toValue = newState ? 1 : 0; 
    
    Animated.spring(flipAnim, {
      toValue,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();

    return newState; 
  });
  };

  const frontRotate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const backRotate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  // ── Swipe handlers ───────────────────────────────────────────
  const handleSwiped = async (direction, cardIdx) => 
  {
          const card = cards[cardIdx];
          setFlipped(false);
          flipAnim.setValue(0);

     
          setStats((prev) => ({
            ...prev,
            [direction === 'right' ? 'learned' : 'review']: prev[direction === 'right' ? 'learned' : 'review'] + 1,
          }));

          const { nextReviewDate, interval, easeFactor } = calculateNextReview(
            direction === 'right' ? 'right' : 'left',
            card.interval || 1,
            card.easeFactor || 2.5
          );

        
          await updateProgress(user.uid, card.id, { nextReviewDate, interval, easeFactor });
  };

  const handleSwipedAll = () => setFinished(true);

  if (loading) {
    return (
      <View style={[styles.center, { paddingTop: insets.top }]}>
        <ActivityIndicator color={COLORS.text} />
      </View>
    );
  }

  if (finished || cards.length === 0) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.finishWrap}>
          <Text style={styles.finishEmoji}>🎉</Text>
          <Text style={styles.finishTitle}>Tebrikler!</Text>
          <Text style={styles.finishSub}>Tüm kartları tamamladın</Text>

          <View style={styles.statsRow}>
            <StatBadge label="Öğrendim" value={stats.learned} color={COLORS.learned} />
            <StatBadge label="Tekrar" value={stats.review} color={COLORS.review} />
          </View>

          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
  <Text style={styles.backBtnText}>Konulara Dön</Text>
</TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.headerBackIcon}>‹</Text>
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>{topic.label}</Text>
          <Text style={styles.headerSub}>{cardIndex + 1} / {cards.length}</Text>
        </View>
        <View style={styles.miniStats}>
          <Text style={[styles.miniStat, { color: COLORS.learned }]}>✓ {stats.learned}</Text>
          <Text style={[styles.miniStat, { color: COLORS.review }]}>↩ {stats.review}</Text>
        </View>
      </View>

      {/* Hint labels */}
      <View style={styles.hintRow}>
        <Text style={[styles.hint, { color: COLORS.review }]}>← Tekrar</Text>
        <Text style={[styles.hint, { color: COLORS.learned }]}>Öğrendim →</Text>
      </View>

      {/* Swiper */}
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={cards}
          cardIndex={cardIndex}
          onSwipedRight={(i) => handleSwiped('right', i)}
          onSwipedLeft={(i) => handleSwiped('left', i)}
          onSwiped={(i) => setCardIndex(i + 1)}
          onSwipedAll={handleSwipedAll}
          overlayLabels={{
            left: {
              title: 'TEKRAR',
              style: {
                label: { color: COLORS.review, fontSize: 22, fontWeight: FONTS.semibold, borderColor: COLORS.review, borderWidth: 2, padding: 10, borderRadius: 8 },
                wrapper: { flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', marginTop: 30, marginLeft: -30 },
              },
            },
            right: {
              title: 'ÖĞRENDİM',
              style: {
                label: { color: COLORS.learned, fontSize: 22, fontWeight: FONTS.semibold, borderColor: COLORS.learned, borderWidth: 2, padding: 10, borderRadius: 8 },
                wrapper: { flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 30, marginLeft: 30 },
              },
            },
          }}
          backgroundColor="transparent"
          stackSize={3}
          stackSeparation={12}
          cardVerticalMargin={20}
          animateCardOpacity
          
          



          renderCard={(card) => {
            if (!card) return null;
            return (

                         
            <QuestionCard 
              card={card} 
              handleFlip={handleFlip} 
              frontRotate={frontRotate} 
              backRotate={backRotate} 
            />
            
            
            );
          }}




        />
      </View>


      {/* Action buttons */}
      <View style={[styles.actions, { paddingBottom: insets.bottom + 16 }]}>
        <TouchableOpacity
          style={[styles.actionBtn, styles.actionReview]}
          onPress={() => swiperRef.current?.swipeLeft()}
        >
          <Text style={styles.actionIcon}>↩</Text>
          <Text style={[styles.actionLabel, { color: COLORS.review }]}>Tekrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, styles.actionLearned]}
          onPress={() => swiperRef.current?.swipeRight()}
        >
          <Text style={styles.actionIcon}>✓</Text>
          <Text style={[styles.actionLabel, { color: COLORS.learned }]}>Öğrendim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



function StatBadge({ label, value, color }) {
  return (
    <View style={styles.badgeWrap}> 
      <Text style={[styles.badgeValue, { color }]}>{value}</Text>
      <Text style={styles.badgeLabel}>{label}</Text>
    </View>
  );
}

