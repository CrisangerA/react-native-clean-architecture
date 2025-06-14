import { Item } from '@components/core';

export interface User {
  uid: string;
  email: string;
  name: string;
  date: Date;
  city: Item;
  terms: boolean;
}

export type UserForm = Omit<User, 'uid'>;
