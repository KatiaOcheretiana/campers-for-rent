import { useState } from 'react';
import sprite from '../../assets/sprite.svg';

import {
  Button,
  Description,
  IconLike,
  Image,
  InfoBox,
  InfoBoxField,
  Item,
  LocationIcon,
  LocationText,
  Name,
  NamePriceLine,
  Price,
  PriceLikeField,
  RatingIcon,
  RatingReviews,
  RationLocationLine,
} from './CampersItem.styled';
import { ModalWindow } from '../ModalWindow/ModalWindow';

export const CampersItem = ({ camper }) => {
  const {
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    gallery,
    reviews,
  } = camper;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <>
      <Item>
        <Image src={gallery[0]} alt={name} width={290} height={310} />
        <div>
          <NamePriceLine>
            <Name>{name}</Name>
            <PriceLikeField>
              <Price>
                €{price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}
              </Price>
              <IconLike>
                <use href={sprite + '#icon-like'} />
              </IconLike>
            </PriceLikeField>
          </NamePriceLine>
          <RationLocationLine>
            <RatingReviews>
              <RatingIcon>
                <use href={sprite + '#icon-star'} />
              </RatingIcon>
              {rating} ({reviews.length} Reviews)
            </RatingReviews>
            <LocationText>
              <LocationIcon>
                <use href={sprite + '#icon-location'} />
              </LocationIcon>
              {location.split(', ').reverse().join(', ')}
            </LocationText>
          </RationLocationLine>
          <Description>{description}</Description>
          <InfoBoxField>
            <InfoBox>
              <svg>
                <use href={sprite + '#icon-adults'} />
              </svg>
              <p> {adults} adults</p>
            </InfoBox>
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-automatic'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p> {transmission}</p>
            </InfoBox>
            <InfoBox>
              <svg>
                <use href={sprite + '#icon-petrol'} />
              </svg>
              <p> {engine}</p>
            </InfoBox>
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-kitchen'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p> {details.kitchen && 'Kitchen'} </p>
            </InfoBox>
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-beds'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p> {details.beds} beds</p>
            </InfoBox>
            <InfoBox>
              <svg>
                <use href={sprite + '#icon-ac'} />
              </svg>
              <p> AC</p>
            </InfoBox>
          </InfoBoxField>
          <Button type="submit" onClick={() => handleOpenModal()}>
            Show more
          </Button>
        </div>
      </Item>
      {isModalOpen && (
        <ModalWindow
          camper={camper}
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
        />
      )}
    </>
  );
};
