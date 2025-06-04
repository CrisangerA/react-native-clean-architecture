import {
  GoogleSignin,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  signOut,
} from '@react-native-firebase/auth';
import AuthRepository from '../domain/repository/auth.repository';
import SecretManager from '@config/secure-store.json';

class FirebaseAuthService implements AuthRepository {
  constructor() {
    GoogleSignin.configure({
      webClientId: SecretManager.webClientId,
      iosClientId: SecretManager.iosClientId,
    });
  }

  async signInWithGoogle() {
    try {
      // Check if your device supports Google Play

      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token
      const signInResult = await GoogleSignin.signIn();

      if (signInResult.type === 'cancelled') {
        return new Error('User cancelled the login process');
      }

      // Try the new style of google-sign in result, from v13+ of that module
      if (!signInResult.data?.idToken) {
        return new Error('No ID token found');
      }

      // Create a Google credential with the token
      const googleCredential = GoogleAuthProvider.credential(
        signInResult.data.idToken,
      );

      // Sign-in the user with the credential
      return signInWithCredential(getAuth(), googleCredential);
    } catch (error) {
      console.log('Error signing in with Google: ', error);
      // Manejar el error aquí especificar servicio, serializar respuesta como string y mostrar en el mensaje.
      // name = 'InternalAppError'
      // message = 'JSON.stringify(error)'
      if (isErrorWithCode(error)) {
        return error as Error;
      }

      return error as Error;
    }
  }

  async signOut() {
    try {
      await GoogleSignin.signOut();
      await signOut(getAuth());
      return true;
    } catch (error) {
      console.error('Error signing out: ', error);
      return error as Error;
    }
  }
}

function createFirebaseAuthService(): AuthRepository {
  return new FirebaseAuthService();
}

export default createFirebaseAuthService();
