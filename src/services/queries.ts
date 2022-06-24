import { QueryTypes } from "../types";

const queries = (): QueryTypes => {
  return {
    // AUTH
    signIn: { type: "post", route: "autenticacao/" },
    recoverPass: { type: "post", route: "recuperar-senha/" },
  };
};

export default queries;
