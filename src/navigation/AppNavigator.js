import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from '../screens/AuthScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ExamScreen from '../screens/ExamScreen';
import SubjectScreen, { TopicScreen } from '../screens/SubjectScreen'; // TopicScreen'i geri aldık
import SwipeScreen from '../screens/SwipeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
      <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
      
      <Stack.Screen 
        name="Exams" 
        component={ExamScreen} 
        options={({ navigation }) => ({
          title: 'Sınav Seç',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={{ marginRight: 15 }}>
              <Text style={{ color: '#007AFF', fontSize: 16, fontWeight: '600' }}>İstatistik</Text>
            </TouchableOpacity>
          ),
        })}
      />
      
      <Stack.Screen name="Subjects" component={SubjectScreen} />
      {/* İŞTE EKSİK OLAN SATIR: */}
      <Stack.Screen name="Topics" component={TopicScreen} />
      
      <Stack.Screen name="Swipe" component={SwipeScreen} />
     <Stack.Screen 
  name="Dashboard" 
  component={DashboardScreen} 
  options={{ 
    title: 'İstatistiklerim',
    headerBackTitle: 'Geri', // Apple tarzı geri butonu
    headerShadowVisible: false, // O çirkin alt çizgiyi kaldırır, ekranla bütünleşir
  }} 
/>
    </Stack.Navigator>
  );
}