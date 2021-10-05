import { BusinessErrorResponse, HTTPResponse } from '~/@types/response';
import { URL } from '~/constants';
import { apiInstance } from '~/libraries/api';

const updateCoperationProfit = async (
  path: string,
  data: Object,
): Promise<HTTPResponse<null> | BusinessErrorResponse> => {
  const fullPath = URL.CORPERATION_CONSENSUS + path;
  return apiInstance.patch<null, Object>({ url: fullPath, data });
};

export default {
  updateCoperationProfit,
};
