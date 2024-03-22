import Modal from 'react-modal';
import {
  AdditionalNavigation,
  CloseModalBtn,
  Description,
  Image,
  ImageWrapper,
  LocationIcon,
  LocationText,
  ModalBackdrop,
  Name,
  NameWrapper,
  Price,
  RatingIcon,
  RatingReviews,
  RationLocationLine,
  StyledLink,
} from './ModalWindow.styled';
import sprite from '../../assets/sprite.svg';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ' rgba(17, 18, 19, 0.4)',
    // zIndex: 1200,
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '40px',
    width: '982px',
    height: '720px',
  },
};

export const ModalWindow = ({ isOpen, onRequestClose, camper }) => {
  const {
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews,
  } = camper;

  return (
    <ModalBackdrop>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <div>
          <div>
            <NameWrapper>
              <Name>{name}</Name>
              <CloseModalBtn onClick={() => onModalClose()}>
                <use href={`${sprite}#icon-close`}></use>
              </CloseModalBtn>
            </NameWrapper>
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
            <Price>
              €{price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}
            </Price>

            <ImageWrapper>
              <Image src={gallery[0]} alt={name} />
              <Image src={gallery[1]} alt={name} />
              <Image src={gallery[2]} alt={name} />
            </ImageWrapper>
            <Description>{description}</Description>
          </div>
          <AdditionalNavigation>
            <StyledLink to="features">Features</StyledLink>

            <StyledLink to="reviews">Reviews</StyledLink>
          </AdditionalNavigation>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </Modal>
    </ModalBackdrop>
  );
};

Modal.setAppElement('#root');
