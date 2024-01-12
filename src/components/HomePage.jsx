import imageMobile from "../assets/images/image-product-mobile.jpg";
import imageDesktop from "../assets/images/image-product-desktop.jpg";
function HomePage() {
  return (
    <>
      <div className="">
        <div className="main bg-white flex flex-col rounded-[15px] w-96 mx-auto mt-20 lg:flex-wrap lg:w-[800px] lg:flex-row">
          <img
            className="rounded-t-[15px] w-96 lg:w-full lg:hidden"
            src={imageMobile}
            alt=""
          />
          <img
            className="rounded-l-[15px] hidden lg:w-96 lg:block"
            src={imageDesktop}
            alt=""
          />
          <div className="group mx-8 lg:w-[384px] lg:mx-0 lg:ml-8 lg:flex lg:flex-col lg:justify-between">
            <p className="font-Montserrat mt-5 text-[#6c7289]">P E R F U M E</p>
            <p className="font-Fraunces mt-1 text-[30px] lg:hidden text-[#1c232b]">
              Gabrielle Essence{" "}
            </p>
            <p className="font-Fraunces -mt-4 text-[30px] lg:hidden text-[#1c232b]">
              Eau De Parfum
            </p>
            <p className="font-Fraunces mt-1 text-[30px] hidden lg:block lg:leading-[45px] lg:text-[50px] lg:w-80 text-[#1c232b]">
              Gabrielle Essence Eau De Parfum
            </p>
            <p className="font-Montserrat text-[#6c7289] text-sm mt-1 lg:w-80 lg:text-[16px] lg:leading-7">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge Perfumer-Creator for the House of CHANEL
            </p>
            <div className="price flex items-center gap-5 mt-5 lg:gap-10">
              <p className="font-Fraunces text-[#3c8067] text-[30px] lg:text-[40px]">
                $149.99
              </p>
              <p className="font-Montserrat line-through text-[#6c7289] lg:text-[20px]">
                $169.99
              </p>
            </div>

            <button className="rounded-lg font-Montserrat bg-[#3c8067] hover:bg-[#1f4336] w-[319px] h-[55px] lg:w-[350px] justify-self-center text-white my-6">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
