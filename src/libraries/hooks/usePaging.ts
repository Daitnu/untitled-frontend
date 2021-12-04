import { useState } from 'react';
import { PAGING } from '~/constants';

interface UsePagingParam {
  itemCnt: number;
  pageSize?: number;
  maxCntOfPageInOneLine?: number;
}

/**
 *
 * @param param usePaging parameter object
 * @param param.itemCnt {number} 페이징을 하기 위한 아이템의 갯수
 * @param param.pageSize {number} 한 페이지에서 몇 개의 아이템을 보여줄지를 나타내는 페이지 사이즈
 * @param param.maxCntOfPageInOneLine {number} 페이징은 한번에 몇개씩 보여줄지에 대한 갯수
 * - ex) 1-5, 6-10 => 5
 * - ex) 1-3, 4-6, 7-9 => 3
 *
 *
 */
function usePaging({
  itemCnt = 0,
  pageSize = PAGING.DEFAULT_PAGE_SIZE,
  maxCntOfPageInOneLine = PAGING.DEFAULT_MAX_PAGE_COUNT_IN_ONE_LINE,
}: UsePagingParam) {
  const [pageOfPage, setPageOfPage] = useState(0);
  const newPages: number[] = [];
  const val = Math.floor(itemCnt / pageSize);
  const rest = itemCnt % pageSize;
  const endPage = val + (rest === 0 ? 0 : 1);
  const prevDisable = pageOfPage === 0;
  const nextDisable = (pageOfPage + 1) * maxCntOfPageInOneLine >= endPage;

  for (let i = 1 + pageOfPage * maxCntOfPageInOneLine; i <= endPage && newPages.length < maxCntOfPageInOneLine; i++) {
    newPages.push(i);
  }

  const onClickPrev = () => {
    if (!prevDisable) {
      setPageOfPage(pageOfPage - 1);
    }
  };
  const onClickNext = () => {
    if (!nextDisable) {
      setPageOfPage(pageOfPage + 1);
    }
  };

  if (newPages.length === 0) {
    newPages.push(1);
  }

  return [{ newPages, onClickPrev, onClickNext, prevDisable, nextDisable }];
}

export default usePaging;
