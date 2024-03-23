import { useSelector } from 'react-redux';
import { selectCampersById } from '../../redux/catalog/selectors';
import {
  FeaturesWrapper,
  InfoBox,
  InfoBoxField,
  Table,
  TableItem,
  TableLine,
  Title,
} from './Features.styled';
import sprite from '../../assets/sprite.svg';
import { BookForm } from '../BookForm/BookForm';

const Features = () => {
  const camper = useSelector(selectCampersById);

  const {
    adults,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    details,
  } = camper;

  return (
    <FeaturesWrapper>
      <div>
        <InfoBoxField>
          {adults && (
            <InfoBox>
              <svg>
                <use href={sprite + '#icon-adults'} />
              </svg>
              <p> {adults} adults</p>
            </InfoBox>
          )}
          {transmission && (
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-automatic'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p> {transmission}</p>
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
          {engine && (
            <InfoBox>
              <svg>
                <use href={sprite + '#icon-petrol'} />
              </svg>
              <p> {engine}</p>
            </InfoBox>
          )}
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
                <use
                  href={sprite + '#icon-air-conditioner'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p> {details.airConditioner} air conditioner</p>
            </InfoBox>
          )}
          {details.CD >= 1 && (
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-cd'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p> CD</p>
            </InfoBox>
          )}
          {details.radio >= 1 && (
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-radio'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p> Radio</p>
            </InfoBox>
          )}
          {details.hob >= 1 && (
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-hob'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p>{details.hob} hob </p>
            </InfoBox>
          )}
          {details.toilet >= 1 && (
            <InfoBox>
              <svg>
                <use href={sprite + '#icon-toilet'} />
              </svg>
              <p>Toilet</p>
            </InfoBox>
          )}
          {details.shower >= 1 && (
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-shower'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p>Shower</p>
            </InfoBox>
          )}
          {details.freezer >= 1 && (
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-freezer'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p>Freezer</p>
            </InfoBox>
          )}
          {details.freezer >= 1 && (
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-freezer'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p>Freezer</p>
            </InfoBox>
          )}
          {details.gas && (
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-gas'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p>Gas</p>
            </InfoBox>
          )}
          {details.water && (
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-water'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p>Water</p>
            </InfoBox>
          )}
          {details.microwave >= 1 && (
            <InfoBox>
              <svg>
                <use
                  href={sprite + '#icon-microwave'}
                  style={{ stroke: '#101828', fill: 'transparent' }}
                />
              </svg>
              <p>Microwave</p>
            </InfoBox>
          )}
        </InfoBoxField>

        <div>
          <Title>Vehicle details</Title>
          <Table>
            <tbody>
              <TableLine>
                <TableItem>Form</TableItem>
                <TableItem>{form}</TableItem>
              </TableLine>
              <TableLine>
                <TableItem>Length</TableItem>
                <TableItem>{length}</TableItem>
              </TableLine>
              <TableLine>
                <TableItem>Width</TableItem>
                <TableItem>{width}</TableItem>
              </TableLine>
              <TableLine>
                <TableItem>Height</TableItem>
                <TableItem>{height}</TableItem>
              </TableLine>
              <TableLine>
                <TableItem>Tank</TableItem>
                <TableItem>{tank}</TableItem>
              </TableLine>
              <TableLine>
                <TableItem>Consumption</TableItem>
                <TableItem>{consumption}</TableItem>
              </TableLine>
            </tbody>
          </Table>
        </div>
      </div>
      <BookForm />
    </FeaturesWrapper>
  );
};

export default Features;
