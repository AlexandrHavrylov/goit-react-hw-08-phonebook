import styled from "@emotion/styled";
import Loader from "react-loader-spinner";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 36px;
`;

export const Section = styled.div`
  padding: 24px;
`;

export const StyledLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
