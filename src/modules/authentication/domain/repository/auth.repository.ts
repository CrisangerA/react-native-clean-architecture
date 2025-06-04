import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export default interface AuthRepository {
  signInWithGoogle: () => Promise<Error | FirebaseAuthTypes.UserCredential>;
  signOut(): Promise<true | Error>;
}
