import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageText.png';
import SponserRedBull from '@/assets/HomePageText.png';
import SponserForbes from '@/assets/HomePageText.png';
import SponserFortune from '@/assets/HomePageText.png';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 ">
      {/* Image and MainHeader */}
      <div>
        {/* Main Header */}
        <div>
          {/* Headings */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p></p>
          </div>
        </div>

        {/* Image */}
        <div></div>
      </div>
    </section>
  );
};

export default Home;
