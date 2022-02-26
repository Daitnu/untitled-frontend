export const PATH_URL = {
  NAVER_FINANCE: 'https://finance.naver.com' as const,
  HOME: '/' as const,
  LOGIN: '/login' as const,
  LOGOUT: '/logout' as const,
  REGISTER: '/register' as const,
  FORGOT_PASSWORD: '/forgot-password' as const,
  CORP_CORPCODE: '/corp/:code' as const,
};

const API_PATH = {
  ACCOUNT: {
    REGISTER: '/register' as const,
    LOGIN: '/login' as const,
    LOGOUT: '/logout' as const,
    REISSUE: '/reissue' as const,
  },
  STOCK: '/stock' as const,
  CORPERATION_CONSENSUS: '/corperation/consensus' as const,

  LANG: {
    I18N_KO: '/static/ko.json' as const,
    I18N_EN: '/static/en.json' as const,
  },
  I18N_KO: '/static/ko.json' as const,
  I18N_EN: '/static/en.json' as const,
};

export default API_PATH;
