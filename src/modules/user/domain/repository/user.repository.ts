import { User } from '../model/';

export interface UserRepository {
  createUser(user: User): Promise<User | Error>;
  getUserField<T>(userId: string, fieldName: string): Promise<T | Error>;
  userCompleteOnboarding(userId: string): Promise<boolean | Error>;
}

export default UserRepository;
