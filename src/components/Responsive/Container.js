import styled from "styled-components";

const Container = styled.div`
  padding-left: ${props => props.padding || "26px"};
  padding-right: ${props => props.padding || "26px"};
  margin-right: ${props => props.margin || "auto"};
  margin-left: ${props => props.margin || "auto"};
  @media screen and (min-width: 768px) {
    width: 750px;
  }
  @media screen and (min-width: 992px) {
    width: 970px;
  }
  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
`;

export default Container;
