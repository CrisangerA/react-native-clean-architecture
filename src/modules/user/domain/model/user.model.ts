import { Item } from '@components/core';

export interface User {
  uid: string;
  imageUrl: string;
  email: string;
  name: string;
  date: Date;
  city: Item;
  terms: boolean;
  amount: string;
}

export type UserForm = Omit<User, 'uid' | 'imageUrl'>;
