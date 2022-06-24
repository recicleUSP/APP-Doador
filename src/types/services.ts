export interface QueryParams {
  type: string;
  route: string;
}

export interface QueryTypes {
  signIn: QueryParams;
  recoverPass: QueryParams;
}
