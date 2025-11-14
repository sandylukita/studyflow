import AsyncStorage from '@react-native-async-storage/async-storage';
import { Session } from '@types/session';
import { UserProfile } from '@types/user';
import { APP_CONFIG } from '@constants/config';

export const saveSessionsToStorage = async (sessions: Session[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      APP_CONFIG.STORAGE_KEYS.SESSIONS,
      JSON.stringify(sessions)
    );
  } catch (error) {
    console.error('Error saving sessions to storage:', error);
  }
};

export const getSessionsFromStorage = async (): Promise<Session[]> => {
  try {
    const sessionsJson = await AsyncStorage.getItem(APP_CONFIG.STORAGE_KEYS.SESSIONS);
    return sessionsJson ? JSON.parse(sessionsJson) : [];
  } catch (error) {
    console.error('Error getting sessions from storage:', error);
    return [];
  }
};

export const saveUserProfileToStorage = async (profile: UserProfile): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      APP_CONFIG.STORAGE_KEYS.USER_PROFILE,
      JSON.stringify(profile)
    );
  } catch (error) {
    console.error('Error saving user profile to storage:', error);
  }
};

export const getUserProfileFromStorage = async (): Promise<UserProfile | null> => {
  try {
    const profileJson = await AsyncStorage.getItem(APP_CONFIG.STORAGE_KEYS.USER_PROFILE);
    return profileJson ? JSON.parse(profileJson) : null;
  } catch (error) {
    console.error('Error getting user profile from storage:', error);
    return null;
  }
};

export const clearAllStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};
