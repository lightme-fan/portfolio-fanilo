import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const ResponsiveImage = styled(Img)`
  width: 100%;
  border-radius: 50%;
`;

const Wrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrappedImg = props => <Wrapper>{props.children}</Wrapper>;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "fanilo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <WrappedImg>
      <ResponsiveImage fluid={data.placeholderImage.childImageSharp.fluid} />
    </WrappedImg>
  );
};

export default Image;
