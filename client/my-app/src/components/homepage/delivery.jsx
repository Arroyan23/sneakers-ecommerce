// halaman untuk layanan pemesanan dan sebagainya
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Delivery = ({ icon, header, paragraph }) => {
  return (
    <>
      <div className="">
        <div className="max-w-[13rem]">
          <div className=" flex justify-center">
            <FontAwesomeIcon icon={icon} className="text-7xl text-pink-500" />
          </div>
          <h2 className="text-center mt-3 text-2xl font-semibold mb-3">
            {header}
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem expedita repellendus et!
          </p>
        </div>
      </div>
    </>
  );
};
