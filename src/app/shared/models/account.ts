import { AccountMoviment } from './accountMoviment';
export class Account {
  id?: string = '';
  agency?: string = '';
  number: string = '';
  balance?: number = 0;
  movements?: AccountMoviment[] = [];
}
