export type image = {
  alternativeText: string
  url: string
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
export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: sectionAboutProjectProps
  sectionTech: sectionTechProps
  sectionConcepts: sectionConceptsProps
  sectionModules: sectionModulesProps
  sectionAgenda: sectionAgendaProps
}
