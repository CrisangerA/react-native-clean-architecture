import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
  updateDoc,
} from '@react-native-firebase/firestore';
import { User } from '../domain/model';
import UserRepository from '../domain/repository/user.repository';

class FirebaseUserService implements UserRepository {
  private db = getFirestore();

  async createUser(userData: User): Promise<User | Error> {
    try {
      // Verificar si el usuario ya existe
      const docSnap = await getDoc(doc(this.db, 'users', userData.uid));

      if (docSnap.exists()) {
        // Si el usuario ya existe, retornamos sus datos
        return docSnap.data() as User;
      }

      // Crear un nuevo usuario con la información proporcionada y hasOnboarding en true
      const newUserData = {
        ...userData,
        hasOnboarding: true,
        createdAt: serverTimestamp(),
      };

      // Guardar el usuario en Firestore
      await setDoc(doc(this.db, 'users', userData.uid), newUserData);
      return newUserData;
    } catch (error) {
      console.error('Error creating user: ', error);
      // Manejar el error aquí especificar servicio, serializar respuesta como string y mostrar en el mensaje.
      // name = 'InternalAppError'
      // message = 'JSON.stringify(error)'
      return error as Error;
    }
  }

  async getUserField<T>(userId: string, fieldName: string): Promise<T | Error> {
    try {
      // Obtener el documento del usuario
      const userDoc = await getDoc(doc(this.db, 'users', userId));

      if (!userDoc.exists()) {
        throw new Error(`User with ID ${userId} not found`);
      }

      // Obtener los datos del usuario
      const userData = userDoc.data();

      // Verificar si el campo existe
      if (userData && fieldName in userData) {
        return userData[fieldName] as T;
      } else {
        throw new Error(`Field ${fieldName} not found for user ${userId}`);
      }
    } catch (error) {
      console.error(`Error getting user field ${fieldName}:`, error);
      return error as Error;
    }
  }

  async userCompleteOnboarding(userId: string): Promise<boolean | Error> {
    try {
      // Obtener el documento del usuario
      const userRef = doc(this.db, 'users', userId);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        throw new Error(`User with ID ${userId} not found`);
      }

      // Actualizar el campo hasOnboarding a true
      await updateDoc(userRef, {
        hasOnboarding: false,
        onboardingCompletedAt: serverTimestamp(),
      });

      return true;
    } catch (error) {
      console.error('Error completing onboarding:', error);
      return error as Error;
    }
  }
}

function createFirebaseUserService(): UserRepository {
  return new FirebaseUserService();
}

export const userService = createFirebaseUserService();
