// halaman untuk menampilkan news yang tersedia
import djemat from "../../img/shaka.png";

export const Poster = () => {
  return (
    <>
      <div className="max-w-full bg-blue-400 h-[35rem] flex justify-between relative items-center">
        <div className="xl:ml-52 text-white">
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
        <div className="absolute right-20 -top-14">
          <img src={djemat} alt="" className="transform scale-125 -rotate-12" />
        </div>
      </div>
    </>
  );
};
