// halaman untuk menampilkan homepage dari e commerce application
import { ImagePoster } from "../components/homepage/bigposter";
import { CardSale } from "../components/homepage/cardsale";
import { Delivery } from "../components/homepage/delivery";
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
        <div className="flex absolute z-50 2xl:right-1/4 xl:right-44 -top-20 shadow-2xl">
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
        <div className=" flex justify-center">
          <p className="text-center mt-14 border-b-2 pb-1 border-sky-500 max-w-fit text-sky-500">
            <a href="#">Load More</a>
          </p>
        </div>
      </div>
      {/* untuk halaman poster dengan catatan bisa di edit di dashboard dengan database */}
      <div className="mt-10">
        <Poster />
      </div>
      {/* halaman layanan yang diberikan dari suatu komponen */}
      <div className=" max-w-md mx-auto xl:max-w-[90rem] mt-14 flex justify-between">
        <Delivery icon="fa-solid fa-truck" header="FREE SHIPPING" />
        <Delivery icon="fa-solid fa-rotate-right" header="100% REFUND" />
        <Delivery icon="fa-solid fa-person" header="SUPPORT 24/7" />
      </div>
      {/* halaman untuk menampilkan news bisa di ubah dengan sesuka hati */}
      <div className="max-w-[90rem] mx-auto mt-14">
        <h1 className="text-center text-3xl font-semibold">LATEST NEWS</h1>
        <div className=""></div>
      </div>
      {/* untuk penanda batas margin top */}
      <div className="mt-96"></div>
    </>
  );
};
