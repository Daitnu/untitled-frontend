export const PATH_URL = {
  NAVER_FINANCE: 'https://finance.naver.com' as const,
  HOME: '/' as const,
  LOGIN: '/login' as const,
};

const API_PATH = {
  ACCOUNT: {
    REGISTER: '/register' as const,
  },
  STOCK: '/stock' as const,
  CORPERATION_CONSENSUS: '/corperation/consensus' as const,
};

export default API_PATH;
