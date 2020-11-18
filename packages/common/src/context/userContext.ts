import React from 'react';

type UserContext = Partial<{
  email: string,
  imgSrc: string,
  fullName: string,
  nickName: string,
}>

export const UserContext = React.createContext<UserContext>({});
