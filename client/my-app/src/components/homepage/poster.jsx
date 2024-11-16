// halaman untuk menampilkan news yang tersedia
import djemat from "../../img/shaka.png";

export const Poster = () => {
  return (
    <>
      <div className="max-w-full bg-blue-400 h-[35rem] flex justify-between relative items-center">
        <div className="2xl:ml-96 xl:ml-10  text-white">
          <h1 className="text-5xl max-w-xl font-semibold">
            Adidas Men Running Sneakers
          </h1>
          {/* slogan */}
          <p className="mt-3">
            Performance and Design. Token to the right edge
          </p>
          <h2 className="mt-2">
            <a href="">Shop Now</a>
            <hr className="max-w-[3rem] border-t-2 mt-1" />
          </h2>
        </div>
        <div className="absolute xl:right-10 right-52 -top-10">
          <img src={djemat} alt="" className="transform scale-125 -rotate-12" />
        </div>
      </div>
    </>
  );
};
