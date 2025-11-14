import React from 'react';
import { Stack } from 'expo-router';

export default function SessionLayout() {
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
      <Stack.Screen name="mindful-entry" />
      <Stack.Screen name="subject-input" />
      <Stack.Screen name="two-minute-start" />
      <Stack.Screen name="active-session" />
      <Stack.Screen name="continue-or-stop" />
      <Stack.Screen name="reflection" />
      <Stack.Screen name="reset-ritual" />
    </Stack>
  );
}
