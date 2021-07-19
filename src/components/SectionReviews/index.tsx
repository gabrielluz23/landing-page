import React from 'react'
import Slider from 'react-slick'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import reviews from './content'
import * as S from './styles'
import { review } from 'types/api'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

type Props = {
  title: string
  reviews: review[]
}
const SectionReviews = ({ title, reviews }: Props) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      <Slider {...settings}>
        {reviews.map(({ name, photo, text }, index) => (
          <ReviewCard
            key={index}
            name={name}
            photo={photo[0]}
            description={text}
            id={index}
          />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
