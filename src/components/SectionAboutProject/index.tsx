import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { sectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  sectionAboutProject: sectionAboutProjectProps
}
const SectionAboutProject = ({ sectionAboutProject }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(sectionAboutProject.images[0].url)}
          loading="lazy"
          alt={sectionAboutProject.images[0].alternativeText}
        />
        <div>
          <Heading>{sectionAboutProject.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: sectionAboutProject.description
            }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
