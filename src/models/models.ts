export interface Comment {
  comment_ID: string | number;
  comment_author: string;
  comment_content: string;
  comment_post_ID: string | number;
  user_ID: string | number;
}

export interface Photo {
  acessos: number;
  author: string;
  id: string;
  idade: number;
  title: string;
  peso: number;
  src: string;
}

export interface Usuario {
  id?: number;
  username?: null;
  email?: string;
  fotos?: Photo[];
}

export interface ResponseApi<T> {
  sucesso: boolean;
  mensagem: string;
  erros: null;
  dados: T;
}

export interface ResponseBase {
  sucesso?: boolean;
  mensagem?: string;
  loading: boolean;
  erro: any;
}

export interface Stats {
  fotoId: string;
  nome: string;
  qtdAcessos: number;
}
export interface PasswordLostProps {
  login: string;
  url: string;
}
export interface PasswordResetProps {
  login: string;
  key: string;
  password: string;
}
