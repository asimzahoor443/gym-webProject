import Logo from '@/assets/Logo.png';
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5 ">
            Donec et pulvinar eros. Phasellus et augue eget massa suscipit
            lacinia quis non ex. In et dolor rhoncus, tristique neque vel,
            varius ligula. In eget rhoncus odio
          </p>
          <p>&copy; Asim Zahoor All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiadam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Excepteur sint occaecat cupidatat non proident</p>
          <p className="my-5">(333)425-5597</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
