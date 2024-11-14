// halaman untuk menampilkan homepage dari e commerce application
import { ImagePoster } from "../components/homepage/bigposter";
import { CardSale } from "../components/homepage/cardsale";
import { DiscountData } from "../components/homepage/discountData";
import { NavChildren } from "../components/homepage/navchildren";
import { Poster } from "../components/homepage/poster";
export const HomePage = () => {
  return (
    <>
      {/* untuk big poster */}
      <ImagePoster />
      {/* halaman untuk menampilkan flash sale */}
      <div className="relative">
        <div className="flex absolute z-50 xl:right-1/4 right-32 -top-20 shadow-2xl">
          <DiscountData />
          <DiscountData />
          <DiscountData />
        </div>
      </div>
      {/* untuk bagian halaman best seller */}
      <div className="mt-60">
        <h1 className="text-center font-sans font-semibold text-2xl">
          BEST SELLER
        </h1>
        {/* navbar sederhana di bagian bawah */}
        <NavChildren />
        {/* halaman untuk bagian card sale dengan batas tertentu dan unik best seller */}
        <div className="px-8 mt-12 xl:max-w-[90rem] xl:mx-auto grid grid-cols-4">
          <CardSale />
          <CardSale />
          <CardSale />
          <CardSale />
          <CardSale />
          <CardSale />
          <CardSale />
          <CardSale />
        </div>
        {/* menambahkan fungsi load more */}
        <p className="text-center mt-14 underline text-sky-500">
          <a href="#">Load More</a>
        </p>
      </div>
      {/* untuk halaman poster dengan catatan bisa di edit di dashboard dengan database */}
      <div className="mt-10">
        <Poster />
      </div>
      {/* halaman bagian services */}
      {/* untuk penanda batas margin top */}
      <div className="mt-96"></div>
    </>
  );
};
