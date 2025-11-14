// import { signInAnonymously, User } from 'firebase/auth';
// import { auth } from './config';

// TODO: Implement Firebase Auth when configured

export const signInAnon = async (): Promise<any> => {
  console.log('signInAnon placeholder - Firebase not configured yet');
  return null;
  // Implementation:
  // const userCredential = await signInAnonymously(auth);
  // return userCredential.user;
};

export const getCurrentUser = (): any => {
  console.log('getCurrentUser placeholder - Firebase not configured yet');
  return null;
  // Implementation:
  // return auth.currentUser;
};

export const onAuthStateChanged = (callback: (user: any) => void) => {
  console.log('onAuthStateChanged placeholder - Firebase not configured yet');
  // Implementation:
  // return auth.onAuthStateChanged(callback);
};
