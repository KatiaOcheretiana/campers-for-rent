import sprite from "../../assets/sprite.svg";

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
} from "./CampersItem.styled";

export const CampersItem = ({ camper }) => {
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
    <Item>
      <Image src={gallery[0]} alt={name} width={290} height={310} />
      <div>
        <NamePriceLine>
          <Name>{name}</Name>
          <PriceLikeField>
            <Price>
              €{price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "")}
            </Price>
            <IconLike>
              <use href={sprite + "#icon-like"} />
            </IconLike>
          </PriceLikeField>
        </NamePriceLine>
        <RationLocationLine>
          <RatingReviews>
            <RatingIcon>
              <use href={sprite + "#icon-star"} />
            </RatingIcon>
            {rating} ({reviews.length} Reviews)
          </RatingReviews>
          <LocationText>
            <LocationIcon>
              <use href={sprite + "#icon-location"} />
            </LocationIcon>
            {location.split(", ").reverse().join(", ")}
          </LocationText>
        </RationLocationLine>
        <Description>{description}</Description>
        <InfoBoxField>
          <InfoBox>
            <svg>
              <use href={sprite + "#icon-adults"} />
            </svg>
            <p> {adults} adults</p>
          </InfoBox>
          <InfoBox>
            <svg>
              <use
                href={sprite + "#icon-automatic"}
                style={{ stroke: "#101828", fill: "transparent" }}
              />
            </svg>
            <p> {transmission}</p>
          </InfoBox>
          <InfoBox>
            <svg>
              <use href={sprite + "#icon-petrol"} />
            </svg>
            <p> {engine}</p>
          </InfoBox>
          <InfoBox>
            <svg>
              <use
                href={sprite + "#icon-kitchen"}
                style={{ stroke: "#101828", fill: "transparent" }}
              />
            </svg>
            <p> {details.kitchen && "Kitchen"} </p>
          </InfoBox>
          <InfoBox>
            <svg>
              <use
                href={sprite + "#icon-beds"}
                style={{ stroke: "#101828", fill: "transparent" }}
              />
            </svg>
            <p> {details.beds} beds</p>
          </InfoBox>
          <InfoBox>
            <svg>
              <use href={sprite + "#icon-ac"} />
            </svg>
            <p> AC</p>
          </InfoBox>
        </InfoBoxField>
        <Button type="submit">Show more</Button>
      </div>
    </Item>
  );
};
