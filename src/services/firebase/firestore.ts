// import { collection, doc, setDoc, getDoc, getDocs, query, where } from 'firebase/firestore';
// import { db } from './config';
import { Session } from '@types/session';
import { UserProfile } from '@types/user';

// TODO: Implement Firestore functions when Firebase is configured

export const saveSession = async (session: Session): Promise<void> => {
  console.log('saveSession placeholder - Firebase not configured yet', session);
  // Implementation:
  // const sessionRef = doc(db, 'sessions', session.id);
  // await setDoc(sessionRef, session);
};

export const getUserSessions = async (userId: string): Promise<Session[]> => {
  console.log('getUserSessions placeholder - Firebase not configured yet', userId);
  return [];
  // Implementation:
  // const sessionsRef = collection(db, 'sessions');
  // const q = query(sessionsRef, where('userId', '==', userId));
  // const querySnapshot = await getDocs(q);
  // return querySnapshot.docs.map(doc => doc.data() as Session);
};

export const saveUserProfile = async (profile: UserProfile): Promise<void> => {
  console.log('saveUserProfile placeholder - Firebase not configured yet', profile);
  // Implementation:
  // const userRef = doc(db, 'users', profile.id);
  // await setDoc(userRef, profile);
};

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  console.log('getUserProfile placeholder - Firebase not configured yet', userId);
  return null;
  // Implementation:
  // const userRef = doc(db, 'users', userId);
  // const userSnap = await getDoc(userRef);
  // return userSnap.exists() ? userSnap.data() as UserProfile : null;
};
