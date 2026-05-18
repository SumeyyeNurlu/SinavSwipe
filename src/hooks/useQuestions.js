import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // firebaseConfig dosyanın nerede olduğuna dikkat et!

export const useQuestions = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'questions'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCards(data);
      } catch (error) {
        console.error("Veri çekerken hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return { cards, loading };
};