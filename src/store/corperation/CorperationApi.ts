import { BusinessErrorResponse, HTTPResponse } from '~/@types/response';
import { apiInstance } from '~/libraries/api';
import API_PATH from '~/constants/path';

const updateCoperationProfit = async (
  path: string,
  data: Object,
): Promise<HTTPResponse<null> | BusinessErrorResponse> => {
  const fullPath = API_PATH.CORPERATION_CONSENSUS + path;
  return apiInstance.patch<null, Object>({ url: fullPath, data });
};

export default {
  updateCoperationProfit,
};
