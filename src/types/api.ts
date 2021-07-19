export type image = {
  alternativeText: string
  url: string
}

export type question = {
  question: string
  answer: string
}

export type button = {
  id: number
  label: string
  url: string
}

export type review = {
  name: string
  photo: {
    url: string
  }[]
  text: string
}

export type authors = {
  photo: {
    url: string
  }
  name: string
  role: string
  socialLinks: {
    title: string
    url: string
  }[]
  description: string
}
export type modules = {
  title: string
  subtitle: string
  description: string
}

export type concepts = {
  id: number
  title: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  images: image[]
}

export type sectionAboutProjectProps = {
  title: string
  description: string
  images: image[]
}

export type sectionTechProps = {
  title: string
  techIcons: {
    title: string
    icon: image[]
  }[]
}

export type sectionConceptsProps = {
  title: string
  concepts: concepts[]
}

export type sectionModulesProps = {
  title: string
  modules: modules[]
}

export type sectionAgendaProps = {
  title: string
  description: string
}

export type pricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: button
}
export type sectionAboutUsProps = {
  title: string
  authors: authors[]
}

export type sectionReviewsProps = {
  title: string
  reviews: review[]
}

export type sectionFaqProps = {
  title: string
  questions: question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: sectionAboutProjectProps
  sectionTech: sectionTechProps
  sectionConcepts: sectionConceptsProps
  sectionModules: sectionModulesProps
  sectionAgenda: sectionAgendaProps
  pricingBox: pricingBoxProps
  sectionAboutUs: sectionAboutUsProps
  sectionReviews: sectionReviewsProps
  sectionFaq: sectionFaqProps
}
