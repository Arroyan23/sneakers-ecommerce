// halaman untuk navbar
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  return (
    <>
      {/* untuk dibagian atas halaman ser dan items cart dan sebagainya */}
      <div className="bg-white flex justify-between pb-1 pt-3 px-32">
        {/* untuk profile */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon="fa-solid fa-user" />
          <h1>Name Profile</h1>
        </div>
        {/* untuk cart dan sebagainya */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          <p>Items</p>
          {/* search bar */}
          <p>search</p>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </div>
      </div>
      <div className="bg-white shadow-xl flex justify-between items-center py-4 px-32 z-50">
        <div className="">
          <h1 className="text-2xl font-semibold">Store Name</h1>
        </div>
        <div className="flex space-x-10 font-semibold">
          <p>HOME</p>
          <p>SNEAKERS</p>
          <p>BAGS</p>
          <p>BELT</p>
          <p>CONTACT</p>
        </div>
      </div>
      <Outlet />
    </>
  );
};
