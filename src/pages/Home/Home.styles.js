import styled from "styled-components";
import {ReactComponent as Badge} from "../../assets/svg/badge.svg";

export const HomeTopBar = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
`;

export const HomeFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  // position: sticky;
  bottom: 0px;
  border-top: 1px solid #34a0a4;
  background: white;
`;

export const HomeBadge = styled(Badge)`
  max-width: 250px;
  width: 100%;
`;
