const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }
  fragment images on UploadFile {
    alternativeText
    url
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      images: image {
        ...images
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      images: image {
        ...images
      }
    }
  }

  # Write your query or mutation here
  query GET_LANDING_PAge {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
    }
  }
`
export default GET_LANDING_PAGE
