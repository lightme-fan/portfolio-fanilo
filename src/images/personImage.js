import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ResponsiveImage = styled(Img)`
  width: 100%;
  border-radius: 50%;
  max-width: 210px;
  box-shadow: 50px 23px 0px -1px rgba(14, 14, 97, 0.71);
  -webkit-box-shadow: 50px 23px 0px -1px rgba(14, 14, 97, 0.71);
  -moz-box-shadow: 50px 23px 0px -1px rgba(14, 14, 97, 0.71);
`

const Wrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const WrappedImg = (props) => <Wrapper>{props.children}</Wrapper>

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "fanilo.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <WrappedImg>
      <ResponsiveImage fluid={data.placeholderImage.childImageSharp.fluid} />
    </WrappedImg>
  )
}

export default Image
