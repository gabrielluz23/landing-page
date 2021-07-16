import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import icons from './content'
import * as S from './styles'
import { image } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  title: string
  techIcons: {
    title: string
    icon: image[]
  }[]
}
const SectionTech = ({ title, techIcons }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>Tecnologias utilizadas</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon }) => (
          <S.Icon key={title}>
            <S.Icons
              src={getImageUrl(icon[0].url)}
              alt={icon[0].alternativeText}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
