import React from 'react';
import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#12201e',
        },
        animation: 'fade',
      }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="truth" />
      <Stack.Screen name="promise" />
      <Stack.Screen name="bond" />
      <Stack.Screen name="proof" />
      <Stack.Screen name="success" />
    </Stack>
  );
}
