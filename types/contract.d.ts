export interface Obj {
  createAt: string;
  date: string;
  person1: {
    name: string;
    age: string;
    address: {
      number: string;
      line1: string;
      province: string;
      city: string;
      postCode: string;
    };
  };
  person2: {
    name: string;
    age: string;
    address: {
      number: string;
      line1: string;
      province: string;
      city: string;
      postCode: string;
    };
  };
  amount: number;
  reason: string;
  guarantee: boolean;
  interest: number;
  interest2: number;
  time: number;
  date_purchase: number;
  amount_purchase: number;
  start: string;
  min_date: number;
}
