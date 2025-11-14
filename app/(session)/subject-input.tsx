import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Input } from '@components/common/Input';
import { Theme } from '@constants/theme';

export default function SubjectInputScreen() {
  const [subject, setSubject] = useState('');

  const handleContinue = () => {
    if (!subject.trim()) {
      Alert.alert('Subject Required', 'Please enter what you want to study.');
      return;
    }

    router.push({
      pathname: '/(session)/two-minute-start',
      params: { subject: subject.trim() },
    });
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headline}>Add a new subject</Text>
          </View>

          {/* Input */}
          <View style={styles.inputContainer}>
            <Input
              placeholder="e.g., Quantum Physics"
              value={subject}
              onChangeText={setSubject}
              autoFocus
              returnKeyType="done"
              onSubmitEditing={handleContinue}
              style={styles.input}
            />
          </View>
        </View>

        {/* CTA Button */}
        <View style={styles.footer}>
          <Button
            title="Add Subject"
            onPress={handleContinue}
            disabled={!subject.trim()}
          />
        </View>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing['4xl'],
    paddingBottom: Theme.spacing.xl,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginBottom: Theme.spacing.xl,
  },
  headline: {
    fontSize: Theme.fontSizes['3xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    fontSize: Theme.fontSizes.lg,
    textAlign: 'center',
  },
  footer: {
    paddingTop: Theme.spacing.lg,
  },
});
