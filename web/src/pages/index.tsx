import * as React from "react"
import Seo from "../components/seo"
import Header from "@/components/_root/header"
import Hero from "@/components/hero"
import { graphql, PageProps } from "gatsby"

const IndexPage = ({ data }: PageProps<any>) => (
  <>
    <Seo title="Home" />
    <Header />
    <Hero
      title={data?.sanityHero?.title}
      sub_header={data?.sanityHero?.sub_header}
      subtitle={data?.sanityHero?.subtitle}
      description={data?.sanityHero?.description}
    />
  </>
)

export default IndexPage

export const query = graphql`
  query {
    sanityHero {
      title
      sub_header
      subtitle
      description
    }
  }
`
