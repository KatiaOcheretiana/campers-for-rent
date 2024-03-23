import { useSelector } from 'react-redux';
import { selectCampersById } from '../../redux/catalog/selectors';

import sprite from '../../assets/sprite.svg';
import { BookForm } from '../BookForm/BookForm';
import {
  Comment,
  ListItem,
  Name,
  RatingIcon,
  RatingList,
  ReviewImage,
  ReviewsWrapper,
  UserInfo,
} from './Reviews.styled';

const Reviews = () => {
  const camper = useSelector(selectCampersById);
  const { reviews } = camper;

  return (
    <ReviewsWrapper>
      <div>
        <ul>
          {reviews.map((item) => (
            <ListItem key={item.reviewer_name}>
              <UserInfo>
                <ReviewImage>{item.reviewer_name.charAt(0)}</ReviewImage>
                <Name>{item.reviewer_name}</Name>
                <RatingList>
                  {[...Array(5)].map((_, index) => (
                    <li key={index}>
                      {index < item.reviewer_rating ? (
                        <RatingIcon>
                          <use href={sprite + '#icon-star'} fill="#FFC531" />
                        </RatingIcon>
                      ) : (
                        <RatingIcon>
                          <use href={sprite + '#icon-star'} fill="#F2F4F7" />
                        </RatingIcon>
                      )}
                    </li>
                  ))}
                </RatingList>
              </UserInfo>
              <Comment>{item.comment}</Comment>
            </ListItem>
          ))}
        </ul>
      </div>
      <BookForm />
    </ReviewsWrapper>
  );
};

export default Reviews;
