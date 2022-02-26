interface IUseLogin {
  email: string;
  userId: string;
  nickname: string;
}

const useToken = (): IUseLogin | null => {
  const accessToken = localStorage.getItem('accessToken');
  if (!!accessToken) {
    const base64Url = accessToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
    const { email, userId, nickname } = JSON.parse(jsonPayload);
    return {
      email,
      userId,
      nickname,
    };
  } else {
    return null;
  }
};

export default useToken;
