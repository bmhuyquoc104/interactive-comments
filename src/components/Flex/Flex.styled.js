import styled from "styled-components";

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 1em;
`;
export const StyledAbsoluteContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  justify-content:center;
  align-items:center;
  z-index:1;
  background-color:rgba(211,211,211,0.6);
  min-height:100vh;
`;
