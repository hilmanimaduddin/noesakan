export interface IStoreCreate {
  id?: number;
  name?: string;
  userName?: string;
  province?: string;
  city: string;
  district: string;
  description: string;
  phoneNumber: number | string;
  age: number | string;
  bankAccount: number | string;
  image: string | Blob | MediaSource;
}
