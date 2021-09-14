import styled from "styled-components";

const PalabrerioSummaryStyled = styled.div`
  p:first-child {
    strong {
      color: ${(props) => props.isPartial && props.color ? props.color : 'inherit'}
    }
  }
`;

export default PalabrerioSummaryStyled;
