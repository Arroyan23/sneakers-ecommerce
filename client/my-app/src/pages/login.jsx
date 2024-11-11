// halaman untuk login page dengan reaf

export const LoginPage = () => {
  return (
    <>
      {/* halaman untuk login page */}
      <div className="flex text-black">
        <div className="relative">
          <div className="bg-black w-full h-full opacity-55 absolute top-0 left-0"></div>
          <div className="absolute text-white top-1/3 left-1/4 max-w-xl">
            <h1 className="text-5xl font-extrabold">
              Welcome <br /> To Accessories <br /> Store
            </h1>
            <p className="mt-6 max-w-md font-sanskan text-md">
              Discover a variety of high-quality products tailored to meet your
              needs. From exclusive collections to everyday essentials, we
              strive to offer the best shopping experience. Browse through our
              categories and find what you love today. Experience the difference
              with unbeatable service and selection!
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-screen w-[63rem] object-cover z-0"
          />
        </div>

        <div className="bg-slate-200 flex items-center justify-center max-w-full flex-1">
          {/* halaman pembungkus login page */}
          <div className="border-2 rounded-xl h-[25rem] flex items-center px-8">
            <div className="">
              <h1 className="text-4xl mb-9 font-semibold">Login Page</h1>
              {/* halaman form yang di kemudian di kirimkan ke back end */}
              <form>
                <input
                  type="text"
                  className="text-black mb-9 pb-2 outline-none border-b border-gray-500 focus:border-blue-500 bg-transparent w-[25rem]"
                  placeholder="Input Username"
                />

                <br />
                <input
                  type="password"
                  className="text-black pb-2 mb-5 outline-none border-b border-gray-500 focus:border-blue-500 bg-transparent w-[25rem]"
                  placeholder="Input Password"
                />
                <br />

                <button className="bg-slate-600 py-2 px-6 rounded-xl text-white">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
