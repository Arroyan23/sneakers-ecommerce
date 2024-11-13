// halaman untuk menampilkan data diskon

export const DiscountData = () => {
  return (
    <>
      <div className="bg-white rounded-sm pl-9 py-5 w-80 h-64 pr-5 relative">
        <h2 className="font-bold text-md">FS - Nike Air Max 270</h2>
        <img
          src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-xl mt-3"
        />
        {/* untuk display harga dan diskonnya */}
        <div className="flex space-x-2 mt-2">
          <h3 className="text-sm text-slate-400 line-through">Rp 350.000</h3>
          <p className="text-sm text-red-500 font-semibold">24% Off</p>
        </div>
        {/* untuk display real price nya */}
        <div className="absolute right-5 bottom-3">
          <h2 className="font-semibold text-sky-500">Rp 250.000</h2>
        </div>
      </div>
    </>
  );
};
