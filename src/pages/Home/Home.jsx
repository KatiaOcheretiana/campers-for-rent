import { Container } from '../../styles/GlobalStyles';
import camperImg from '../../assets/image/home-page.jpg';
import camperImgThree from '../../assets/image/home-page-3.jpg';
import {
  Benefits,
  BenefitsImageWrapper,
  Description,
  Picture,
  SectionWrapper,
  SectionWrapperTwo,
  Title,
} from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Our Camper Booking Platform!</Title>
      <Description>
        Are you ready for your next adventure? Look no further! Our camper
        booking platform offers a seamless experience for finding and booking
        the perfect camper for your journey. Whether you're planning a weekend
        getaway, a cross-country road trip, or an outdoor expedition, we've got
        you covered.
      </Description>
      <BenefitsImageWrapper>
        <SectionWrapper>
          <section>
            <Benefits>Explore a Wide Range of Campers</Benefits>
            <Description>
              Discover a diverse selection of campers tailored to suit every
              traveler's needs. From cozy vans for solo adventurers to spacious
              RVs for family vacations, we have something for everyone. Browse
              through our extensive catalog of campers, each equipped with
              essential amenities and ready to take you on an unforgettable
              journey.
            </Description>
            <Benefits>Hassle-Free Booking Process</Benefits>
            <Description>
              Booking your dream camper is quick and easy with our user-friendly
              platform. Simply search for your desired location, select your
              travel dates, and explore available campers that match your
              criteria. With transparent pricing, detailed descriptions, and
              high-quality images, you can make informed decisions and book with
              confidence.
            </Description>
          </section>
          <Picture src={camperImg} alt="camper" />
        </SectionWrapper>
        <SectionWrapperTwo>
          <section>
            <Benefits>Embrace Freedom and Flexibility</Benefits>
            <Description>
              With a camper rental, you have the freedom to travel at your own
              pace and explore off-the-beaten-path destinations. Say goodbye to
              rigid itineraries and hello to spontaneity! Experience the joy of
              waking up to breathtaking views, cooking meals in the great
              outdoors, and creating cherished memories with loved ones.
            </Description>
            <Benefits>Book with Confidence</Benefits>
            <Description>
              Rest assured knowing that your camper booking is in safe hands.
              Our platform prioritizes customer satisfaction, reliability, and
              convenience. Whether you're a seasoned camper or new to the world
              of outdoor travel, our team is here to support you every step of
              the way.
            </Description>
            <Benefits>Start Your Adventure Today!</Benefits>
            <Description>
              Are you ready to embark on your next adventure? Start planning
              your journey with us and unlock endless possibilities on the open
              road. Book your camper today and get ready to experience the
              ultimate freedom of travel.
            </Description>
          </section>
          <Picture src={camperImgThree} alt="camper" />
        </SectionWrapperTwo>
      </BenefitsImageWrapper>
    </Container>
  );
};

export default Home;
