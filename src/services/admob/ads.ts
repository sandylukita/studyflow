// TODO: Implement AdMob when ready
// Note: AdMob requires native modules and might not work in Expo Go
// For production, you'll need to use EAS Build or eject to bare workflow

export const initializeAdMob = () => {
  console.log('AdMob initialization placeholder');
  // Implementation will use react-native-google-mobile-ads
};

export const showBannerAd = () => {
  console.log('Show banner ad placeholder');
  // Implementation:
  // Use BannerAd component from react-native-google-mobile-ads
};

export const showInterstitialAd = async (): Promise<void> => {
  console.log('Show interstitial ad placeholder');
  // Implementation:
  // const interstitial = InterstitialAd.createForAdRequest(adUnitId);
  // await interstitial.load();
  // await interstitial.show();
};

export const shouldShowAd = (sessionCount: number): boolean => {
  const AD_FREQUENCY = 3; // Show ad every 3 sessions
  return sessionCount > 0 && sessionCount % AD_FREQUENCY === 0;
};
