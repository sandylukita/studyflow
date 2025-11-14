import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { GradientBackground } from '@components/common/GradientBackground';
import { Button } from '@components/common/Button';
import { Card } from '@components/common/Card';
import { Theme } from '@constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function ShareScreen() {
  const handleClose = () => {
    router.back();
  };

  const handleShare = (platform: string) => {
    Alert.alert('Coming Soon', `${platform} sharing will be available soon!`);
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        {/* Close Button */}
        <View style={styles.header}>
          <Ionicons
            name="close"
            size={28}
            color={Theme.colors.textPrimary}
            onPress={handleClose}
          />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.icon}>
            <Ionicons name="share-social" size={48} color={Theme.colors.primary} />
          </View>

          <Text style={styles.title}>Share Your Calm</Text>
          <Text style={styles.subtitle}>
            Invite friends to find their flow with StudyFlow
          </Text>

          {/* Share Preview Card */}
          <Card style={styles.previewCard}>
            <Text style={styles.previewTitle}>StudyFlow helped me study without burning out</Text>
            <Text style={styles.previewSubtitle}>
              2-minute starts, no pressure. Just calm progress.
            </Text>
          </Card>

          {/* Share Buttons */}
          <View style={styles.shareButtons}>
            <Button
              title="Share on Twitter"
              onPress={() => handleShare('Twitter')}
              style={styles.shareButton}
            />
            <Button
              title="Share on Instagram"
              onPress={() => handleShare('Instagram')}
              variant="secondary"
              style={styles.shareButton}
            />
            <Button
              title="Copy Link"
              onPress={() => handleShare('Copy')}
              variant="secondary"
              style={styles.shareButton}
            />
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Every share helps more students find their calm
          </Text>
        </View>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.xl,
    paddingBottom: Theme.spacing.xl,
  },
  header: {
    alignItems: 'flex-end',
    marginBottom: Theme.spacing.lg,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(125, 227, 211, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.xl,
  },
  title: {
    fontSize: Theme.fontSizes['3xl'],
    fontWeight: Theme.fontWeights.bold,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: Theme.spacing.sm,
  },
  subtitle: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.textTertiary,
    textAlign: 'center',
    marginBottom: Theme.spacing.xl,
  },
  previewCard: {
    width: '100%',
    marginBottom: Theme.spacing.xl,
  },
  previewTitle: {
    fontSize: Theme.fontSizes.lg,
    fontWeight: Theme.fontWeights.semibold,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing.sm,
  },
  previewSubtitle: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
  shareButtons: {
    width: '100%',
    gap: Theme.spacing.md,
  },
  shareButton: {
    width: '100%',
  },
  footer: {
    alignItems: 'center',
    paddingTop: Theme.spacing.lg,
  },
  footerText: {
    fontSize: Theme.fontSizes.xs,
    color: Theme.colors.textMuted,
    textAlign: 'center',
  },
});
