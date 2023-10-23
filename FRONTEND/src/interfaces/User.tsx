export interface IUser {
  id?: number;
  fullname?: string;
  username?: string;
  password?: string;
  email?: string;
  description?: string;
  picture?: string;
  image?: string;
  followers?: number;
  following?: number;
}
export interface IDeleteThread {
  image?: string;
  content?: string;
  
  }


export interface IUserRegister {
name: string;
email: string;
username: string;
password: string;

}


export interface IUserLogin {
email: string;
password: string;

}

export interface IUserLoginOn {
  id?: number;
  fullname: string;
  username?: string;
  picture?: string;
  }

export interface ICommentThread {
  id?: number;
  content?: string;
  image?: string;
  postedAt?: string;
  likes?: number;
  reply?: number;
  user?: IUser;
}
export interface ILikeThread {
  id?: number;
  content?: string;
  image?: string;
  postedAt?: string;
  likes: number;
  reply?: number;
  user?: IUser;
}

export interface IUserList {
  id?: number;
  fullname?: string;
  username?: string;
  picture?: string;
}

export interface IFollow {
  id: number;
  userId: number;
  username: string;
  fullname: string;
  email: string;
  picture: string;
  description: string;
  isFollowed: boolean;
}