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
import { default as ModalWindow } from '../ModalWindow/ModalWindow';
import { useNavigate } from 'react-router-dom';

export const CampersItem = ({ camper }) => {
  const {
    _id,
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

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';

    const modalUrl = `/catalog/${_id}`;
    navigate(modalUrl);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <>
      <Item key={_id}>
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
            {details.kitchen >= 1 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + '#icon-kitchen'}
                    style={{ stroke: '#101828', fill: 'transparent' }}
                  />
                </svg>
                <p> kitchen </p>
              </InfoBox>
            )}
            {details.beds >= 1 && (
              <InfoBox>
                <svg>
                  <use
                    href={sprite + '#icon-beds'}
                    style={{ stroke: '#101828', fill: 'transparent' }}
                  />
                </svg>
                <p> {details.beds} beds</p>
              </InfoBox>
            )}

            {details.airConditioner >= 1 && (
              <InfoBox>
                <svg>
                  <use href={sprite + '#icon-ac'} style={{ fill: '#101828' }} />
                </svg>
                <p> AC</p>
              </InfoBox>
            )}
          </InfoBoxField>
          <Button type="submit" onClick={() => handleOpenModal()}>
            Show more
          </Button>
        </div>
      </Item>
      {isModalOpen && (
        <ModalWindow
          camperInfo={camper}
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
        />
      )}
    </>
  );
};
