// halaman untuk bagian card sale n
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardSale = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-slate-300">
          {/* untuk bagian gambar nantinya akan diubah dengan gambar pada database */}
          <img
            src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-64 h-64 object-center"
          />
          {/* halaman untuk bagian background penjelasannya */}
          <div className="mt-3">
            <h2 className="font-bold text-center">Nike Air Jordan 270 React</h2>
            {/* gunakan logika rating pada database */}
            <div className="flex items-center space-x-4 justify-center mt-2">
              <FontAwesomeIcon
                icon="fa-solid fa-star"
                className="text-yellow-400 text-sm"
              />
              <FontAwesomeIcon
                icon="fa-solid fa-star"
                className="text-yellow-400 text-sm"
              />
              <FontAwesomeIcon
                icon="fa-solid fa-star"
                className="text-yellow-400 text-sm"
              />
              <FontAwesomeIcon
                icon="fa-solid fa-star"
                className="text-yellow-400 text-sm"
              />
              <FontAwesomeIcon
                icon="fa-solid fa-star"
                className="text-yellow-400 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
