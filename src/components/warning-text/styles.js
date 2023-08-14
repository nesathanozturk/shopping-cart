import styled from "styled-components";
import { RiErrorWarningFill } from "react-icons/ri";

import { breakpoints } from "../../theme";

export const WarningContainer = styled.div`
  background: #feebc8;
  display: flex;
  padding: 15px;
`;

export const WarningMessage = styled.p`
  font-size: 1.4rem;

  @media ${breakpoints.sm} {
    font-size: 5.5vw;
  }
`;

export const WarningIcon = styled(RiErrorWarningFill)`
  color: #dd6b20;
  margin-right: 10px;
`;
