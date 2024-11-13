// halaman untuk menampilkan homepage dari e commerce application
import { ImagePoster } from "../components/homepage/bigposter";
import { CardSale } from "../components/homepage/cardsale";
import { DiscountData } from "../components/homepage/discountData";
import { NavChildren } from "../components/homepage/navchildren";
export const HomePage = () => {
  return (
    <>
      {/* untuk big poster */}
      <ImagePoster />
      {/* halaman untuk menampilkan flash sale */}
      <div className="relative">
        <div className="flex absolute z-50 right-32 -top-20 shadow-2xl">
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
        <div className="px-8 mt-12">
          <CardSale />
        </div>
      </div>
      {/* untuk penanda batas margin top */}
      <div className="mt-96"></div>
    </>
  );
};
