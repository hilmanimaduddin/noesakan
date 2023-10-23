export interface IUser {
  id?: number;
  fullname?: string;
  username?: string;
  picture?: string;
  name?: string;
  email?: string;
  password?: string;
  image?: string;
  description?: string;
}

export interface IUserRegister {
  username: string;
  fullname: string;
  email: string;
  password: string;
  alamat: string;
  image: string;
}
export interface IUserLogin {
  email: string;
  password: string;
}

export interface IFormDiscuss {
  content: string;
  image: Blob | MediaSource | string;
}

export interface IGetThreads {
  content?: string;
  image?: MediaSource | Blob | string;
  user?: IUser;
  createdAt?: Date | string | number;
}
