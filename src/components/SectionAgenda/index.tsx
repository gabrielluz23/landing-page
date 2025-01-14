import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

type Props = {
  title: string
  description: string
}
const SectionAgenda = ({ title, description }: Props) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
)

export default SectionAgenda
