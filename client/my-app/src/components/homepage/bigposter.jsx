// halaman untuk poster bagian atas
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ImagePoster = () => {
  return (
    <>
      <div
        className="relative h-[30rem] w-full bg-center   bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1631774577666-9ce632e70af7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {" "}
        {/* taro div untuk background agak kehitaman */}
        <div className="bg-black w-full absolute top-0 h-full opacity-50"></div>
        {/* untuk menampilkan super flash sale */}
        <div className="absolute top-1/2 left-[10rem] text-white font-sanskan">
          <h1 className="text-7xl font-bold">
            Super Flash Sale <br /> 50% Off
          </h1>
        </div>
      </div>
    </>
  );
};
