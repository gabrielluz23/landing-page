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

export type image = {
  alternativeText: string
  url: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: sectionAboutProjectProps
}
