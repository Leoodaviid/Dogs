export interface Comment {
  comment_ID: string | number;
  comment_author: string;
  comment_content: string;
  comment_post_ID: string | number;
  user_ID: string | number;
}

export interface Photo {
  id: string;
  author: string;
  title: string;
  idade: number;
  peso: number;
  acessos: number;
  comments: Comment[];
  extencao: string;
  src: string;
}

export interface Usuario {
  id: string;
  nome: null;
  nomeDeUsuario: string;
  fotos: Photo[];
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
