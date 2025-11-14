import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GradientBackground } from '@components/common/GradientBackground';
import { Card } from '@components/common/Card';
import { Theme } from '@constants/theme';
import { APP_CONFIG } from '@constants/config';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const handleResetOnboarding = async () => {
    Alert.alert(
      'Reset Onboarding',
      'This will log you out and show the onboarding again. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.removeItem(APP_CONFIG.STORAGE_KEYS.ONBOARDING_COMPLETED);
            router.replace('/(onboarding)/welcome');
          },
        },
      ]
    );
  };

  const handlePremium = () => {
    router.push('/premium');
  };

  const handleCommunity = () => {
    router.push('/community');
  };

  const SettingRow = ({
    icon,
    title,
    subtitle,
    onPress,
  }: {
    icon: string;
    title: string;
    subtitle?: string;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.settingRow} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.settingIcon}>
        <Ionicons name={icon as any} size={24} color={Theme.colors.primary} />
      </View>
      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>{title}</Text>
        {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
      </View>
      <Ionicons name="chevron-forward" size={20} color={Theme.colors.textMuted} />
    </TouchableOpacity>
  );

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Settings</Text>
          </View>

          {/* Account Section */}
          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>
            <SettingRow
              icon="person-circle-outline"
              title="Profile"
              subtitle="View your profile"
              onPress={() => Alert.alert('Profile', 'Coming soon')}
            />
            <SettingRow
              icon="star-outline"
              title="Upgrade to Premium"
              subtitle="Unlock advanced features"
              onPress={handlePremium}
            />
          </Card>

          {/* App Section */}
          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>App</Text>
            <SettingRow
              icon="notifications-outline"
              title="Notifications"
              subtitle="Manage reminders"
              onPress={() => Alert.alert('Notifications', 'Coming soon')}
            />
            <SettingRow
              icon="color-palette-outline"
              title="Theme"
              subtitle="Dark mode"
              onPress={() => Alert.alert('Theme', 'Coming soon')}
            />
            <SettingRow
              icon="volume-medium-outline"
              title="Sound & Haptics"
              subtitle="Feedback settings"
              onPress={() => Alert.alert('Sound & Haptics', 'Coming soon')}
            />
          </Card>

          {/* Community Section */}
          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>Community</Text>
            <SettingRow
              icon="people-outline"
              title="Community Roll Call"
              subtitle="Connect with others"
              onPress={handleCommunity}
            />
            <SettingRow
              icon="share-social-outline"
              title="Share StudyFlow"
              subtitle="Invite friends"
              onPress={() => Alert.alert('Share', 'Coming soon')}
            />
          </Card>

          {/* Support Section */}
          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>Support</Text>
            <SettingRow
              icon="help-circle-outline"
              title="Help & FAQ"
              onPress={() => Alert.alert('Help', 'Coming soon')}
            />
            <SettingRow
              icon="document-text-outline"
              title="Privacy Policy"
              onPress={() => Alert.alert('Privacy', 'Coming soon')}
            />
            <SettingRow
              icon="refresh-outline"
              title="Reset Onboarding"
              onPress={handleResetOnboarding}
            />
          </Card>

          {/* Version */}
          <Text style={styles.version}>StudyFlow v1.0.0</Text>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing['3xl'],
    paddingBottom: Theme.spacing.xl,
  },
  header: {
    marginBottom: Theme.spacing.xl,
  },
  headerTitle: {
    fontSize: Theme.fontSizes['3xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
  },
  section: {
    marginBottom: Theme.spacing.md,
  },
  sectionTitle: {
    fontSize: Theme.fontSizes.sm,
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: Theme.spacing.md,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Theme.spacing.md,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(125, 227, 211, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Theme.spacing.md,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: Theme.fontSizes.base,
    fontWeight: Theme.fontWeights.medium,
    color: Theme.colors.textPrimary,
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: Theme.fontSizes.xs,
    color: Theme.colors.textTertiary,
  },
  version: {
    fontSize: Theme.fontSizes.xs,
    color: Theme.colors.textMuted,
    textAlign: 'center',
    marginTop: Theme.spacing.xl,
  },
});
