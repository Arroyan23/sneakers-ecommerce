// halaman untuk mengatur navbar di best seller

export const NavChildren = () => {
  return (
    <>
      <div className="flex justify-center space-x-10 mt-7">
        {/* ilustrasi ketika aktif dibagian navbar */}
        <p className="text-sky-500 border-b-2 border-sky-500">All</p>
        <p>Bags</p>
        <p>Sneakers</p>
        <p>Belt</p>
        <p>Sunglasses</p>
      </div>
    </>
  );
};
