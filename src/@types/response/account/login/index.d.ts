interface IResponseAccount {
  grantType: string;
  accessToken: string;
  accessTokenExpiresIn: number;
}

export interface IResponseAccountLogin extends IResponseAccount {
  refreshToken: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAccontToken extends IResponseAccount {}
