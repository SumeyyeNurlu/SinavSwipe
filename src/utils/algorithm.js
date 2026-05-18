import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


export function calculateNextReview(direction, currentInterval = 1, easeFactor = 2.5) {
  let newInterval;
  let newEaseFactor = easeFactor;

  if (direction === 'right') {
    // Card answered correctly — increase interval
    if (currentInterval === 1) newInterval = 3;
    else if (currentInterval === 3) newInterval = 7;
    else newInterval = Math.round(currentInterval * newEaseFactor);
    newEaseFactor = Math.max(1.3, newEaseFactor + 0.1);
  } else {
    // Card needs review — reset to short interval
    newInterval = 1;
    newEaseFactor = Math.max(1.3, newEaseFactor - 0.2);
  }

  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + newInterval);

  return { nextReviewDate, interval: newInterval, easeFactor: newEaseFactor };
}

/**
 * Update a user's progress in Firestore
 */
export async function updateProgress(userId, cardId, progressData) {
  try {
    // Belge referansı: users > userId > progress > cardId
    const progressRef = doc(db, 'users', userId, 'progress', cardId);
    
    // Veriyi yazıyoruz (merge: true ile sadece değişenleri günceller)
    await setDoc(progressRef, {
      ...progressData,
      lastReviewed: new Date()
    }, { merge: true });
    
    console.log("✅ Firebase güncellemesi başarılı!");
  } catch (error) {
    console.error("❌ Firebase güncelleme hatası:", error);
  }
}