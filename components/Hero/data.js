export const data = [
  {
    id: 0,
    prehead: 'Try to defeat Watame!',
    title: 'Game Now!',
    button: 'Play!',
    path: '/game',
    image: '/img/backgrounds/watame-transparent-3.png'
  },
  {
    id: 1,
    prehead: "Read all player's messages",
    title: 'Messages',
    button: 'Read!',
    path: '/messages',
    image: '/img/backgrounds/watame-transparent-2.png'
  },
]

export const slickImageProps = {
  arrows: false,
  infinite: true,
}

export const slickTitleProps = {
  arrows: false,
  dots: true,
  swipeToSlide: true,
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  focusOnSelect: true,
  variableWidth: true,
}