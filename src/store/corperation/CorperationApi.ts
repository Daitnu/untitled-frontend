import { IBusinessErrorResponse, IHTTPResponse } from '~/@types/response';
import { apiInstance } from '~/libraries/api';
import API_PATH from '~/constants/path';
import { IRequestParam } from '~/@types/request';

const updateCoperationProfit = async ({
  url,
  data,
}: IRequestParam<Object>): Promise<IHTTPResponse<null> | IBusinessErrorResponse> => {
  const fullPath = API_PATH.CORPERATION_CONSENSUS + url;
  return apiInstance.patch<null, Object>({ url: fullPath, data });
};

export default {
  updateCoperationProfit,
};
