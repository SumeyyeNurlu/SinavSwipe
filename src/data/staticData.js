/**
 * data/staticData.js
 * ──────────────────
 * Static JSON data mimicking Firestore documents.
 * Replace fetch functions below with real Firestore calls when ready.
 *
 * Firestore equivalent path:
 *   /exams/kpss/subjects/matematik/topics/kesirler/cards/{id}
 */

// ── Static database ────────────────────────────────────────────────────────

export const EXAMS = [
  { id: 'kpss', label: 'KPSS', icon: '🏛️', color: '#1a1a2e' },
  { id: 'yks',  label: 'YKS',  icon: '🎓', color: '#16213e' },
  { id: 'lgs',  label: 'LGS',  icon: '📐', color: '#0f3460' },
  { id: 'dil',  label: 'DİL',  icon: '🌍', color: '#533483' },
];

export const SUBJECTS = {
  kpss: [
    { id: 'turkce',    label: 'Türkçe',        icon: '📖' },
    { id: 'matematik', label: 'Matematik',      icon: '🔢' },
    { id: 'tarih',     label: 'Tarih',          icon: '📜' },
    { id: 'vatandaslik', label: 'Vatandaşlık',  icon: '🏛️' },
  ],
  yks: [
    { id: 'matematik', label: 'Matematik',  icon: '🔢' },
    { id: 'fizik',     label: 'Fizik',      icon: '⚛️' },
    { id: 'kimya',     label: 'Kimya',      icon: '🧪' },
    { id: 'biyoloji',  label: 'Biyoloji',   icon: '🧬' },
    { id: 'edebiyat',  label: 'Edebiyat',   icon: '✍️' },
  ],
  lgs: [
    { id: 'matematik', label: 'Matematik',  icon: '🔢' },
    { id: 'fen',       label: 'Fen Bilgisi',icon: '🔬' },
    { id: 'turkce',    label: 'Türkçe',     icon: '📖' },
    { id: 'ingilizce', label: 'İngilizce',  icon: '🇬🇧' },
  ],
  dil: [
    { id: 'grammar',   label: 'Grammar',    icon: '📝' },
    { id: 'vocab',     label: 'Vocabulary', icon: '🔤' },
    { id: 'reading',   label: 'Reading',    icon: '📄' },
    { id: 'listening', label: 'Listening',  icon: '🎧' },
  ],
};

export const TOPICS = {
  kpss_turkce: [
    { id: 'paragraf',  label: 'Paragraf',         icon: '¶' },
    { id: 'dilbilgisi',label: 'Dil Bilgisi',      icon: 'Aa' },
    { id: 'anlam',     label: 'Sözcükte Anlam',   icon: '💬' },
  ],
  kpss_matematik: [
    { id: 'kesirler',  label: 'Kesirler',          icon: '½' },
    { id: 'oran',      label: 'Oran - Orantı',     icon: '⚖️' },
    { id: 'denklem',   label: 'Denklemler',        icon: '=' },
  ],
  yks_matematik: [
    { id: 'turev',     label: 'Türev',             icon: "f'" },
    { id: 'integral',  label: 'İntegral',          icon: '∫' },
    { id: 'limit',     label: 'Limit',             icon: '→' },
  ],
  yks_biyoloji: [
    { id: 'hucre',     label: 'Hücre',             icon: '🔵' },
    { id: 'kalitim',   label: 'Kalıtım',           icon: '🧬' },
    { id: 'ekosistem', label: 'Ekosistem',         icon: '🌿' },
  ],
  dil_grammar: [
    { id: 'tenses',    label: 'Tenses',            icon: '⏰' },
    { id: 'modals',    label: 'Modals',            icon: '🔧' },
    { id: 'conditionals', label: 'Conditionals',   icon: '❓' },
  ],
  dil_vocab: [
    { id: 'academic',  label: 'Academic Words',    icon: '🎓' },
    { id: 'idioms',    label: 'Idioms',            icon: '💡' },
    { id: 'collocations', label: 'Collocations',   icon: '🔗' },
  ],
};

export const CARDS = {
  kpss_turkce_paragraf: [
    { id: 'c1', question: 'Paragrafın ana düşüncesi nedir?', answer: 'Yazarın paragraf boyunca vurgulamak istediği temel fikirdir. Genellikle giriş veya sonuç cümlesinde yer alır.', difficulty: 2 },
    { id: 'c2', question: 'Destekleyici fikir ne anlama gelir?', answer: 'Ana düşünceyi açıklayan, örnekleyen veya pekiştiren yardımcı cümlelerdir.', difficulty: 3 },
    { id: 'c3', question: 'Geçiş cümlesi hangi amaçla kullanılır?', answer: 'Paragraflar veya fikirler arasında mantıksal bağ kurmak için kullanılır.', difficulty: 2 },
  ],
  kpss_matematik_kesirler: [
    { id: 'c1', question: '3/4 + 1/2 = ?', answer: '3/4 + 2/4 = 5/4 = 1 ve 1/4', difficulty: 1 },
    { id: 'c2', question: '2/3 × 3/4 = ?', answer: '(2×3)/(3×4) = 6/12 = 1/2', difficulty: 2 },
    { id: 'c3', question: '5/6 ÷ 1/3 = ?', answer: '5/6 × 3/1 = 15/6 = 5/2 = 2.5', difficulty: 3 },
  ],
  dil_grammar_tenses: [
    { id: 'c1', question: 'Present Perfect ne zaman kullanılır?', answer: 'Geçmişte başlayıp bugünle bağlantısı olan eylemler için. "I have lived here for 5 years."', difficulty: 3 },
    { id: 'c2', question: '"Used to" yapısı neyi ifade eder?', answer: 'Geçmişte yapılan ama artık yapılmayan alışkanlıkları. "I used to play tennis."', difficulty: 2 },
    { id: 'c3', question: 'Past Continuous vs Past Simple farkı nedir?', answer: 'Past Continuous devam eden geçmiş eylemi, Past Simple tamamlanmış eylemi gösterir.', difficulty: 4 },
  ],
};

// ── Service functions (Firebase-ready) ────────────────────────────────────

/**
 * Fetch cards for a specific topic.
 *
 * Firebase replacement:
 *   const snapshot = await getDocs(
 *     collection(db, 'exams', examId, 'subjects', subjectId, 'topics', topicId, 'cards')
 *   );
 *   return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
 */
export async function fetchCards(examId, subjectId, topicId) {
  const key = `${examId}_${subjectId}_${topicId}`;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CARDS[key] || []);
    }, 300); // simulate network latency
  });
}


