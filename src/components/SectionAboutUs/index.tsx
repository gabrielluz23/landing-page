import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import content from './content'
import * as S from './styles'
import { authors } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  title: string
  authors: authors[]
}
const SectionAboutUs = ({ title, authors }: Props) => (
  <Container>
    <Heading reverseColor>Quem somos nós?</Heading>

    <S.Content>
      {authors.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          photo={profile.photo}
          socialLinks={profile.socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
