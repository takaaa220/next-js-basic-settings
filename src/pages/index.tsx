import { NextPage } from "next";
import { css } from "@emotion/core";

const TopPage: NextPage = () => <div css={wrapperStyle}>hello world</div>;

const wrapperStyle = css`
  width: 100%;
`;

export default TopPage;
