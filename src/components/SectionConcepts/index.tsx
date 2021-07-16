import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import content from './content'
import * as S from './styles'
import { concepts } from 'types/api'

type Props = {
  title: string
  concepts: concepts[]
}
const SectionConcepts = ({ title, concepts }: Props) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map(({ title, id }) => (
          <S.Item key={id}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
