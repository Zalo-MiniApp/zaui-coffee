import React, { useEffect, useRef } from "react";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { keywordState } from "state";
import { Box, Input } from "zmp-ui";

export const Inquiry: FC = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('searchbar')?.focus();
    })
  }, [])

  return (
    <Box
      p={4}
      pt={6}
      className="bg-white transition-all flex-none"
      ref={((el: HTMLDivElement) => {
        setTimeout(() => {
          if (el) {
            el.style.paddingTop = '8px';
          }
        })
      }) as any}
    >
      <Input.Search
        id="searchbar"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Tìm nhanh đồ uống, món mới ..."
        clearable
        allowClear
      />
    </Box >
  );
}
