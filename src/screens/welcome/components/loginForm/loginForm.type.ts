export interface LoginInput {
  usr: string;
  pwd: string;
}

export interface LoginRes {
  message: string;
  home_page: string;
  full_name: string;
}

export interface LoginError {
  response: {
    data: {
      message: string;
    };
  };
}
