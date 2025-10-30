import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="h-16 w-full bg-white drop-shadow-xl">
        <div className="">{/* Image */}</div>
        <div className="flex w-full h-full justify-center items-center">
          <header className="bg-white tracking-wide relative z-50">
            <div className="flex flex-wrap justify-center sm:px-10 px-4 py-3 relative">
              <div
                id="collapseMenu"
                className="max-lg:hidden lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
              >
                <ul className="lg:flex lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:w-2/3 max-lg:min-w-[280px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:overflow-auto z-50">
                  <li className="group max-lg:px-3 max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-medium text-[15px] flex items-center"
                    >
                      Recharge & Bills
                    </a>

                    <ul className="flex flex-col absolute gap-5 top-14 max-lg:top-8 -left-22 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl">
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Furniture Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Electronic Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Fashion Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Shoes Store
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group max-lg:px-3 max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block"
                    >
                      Ticket Booking                      
                    </a>

                    <ul className="flex flex-col absolute gap-5 top-14 max-lg:top-8 -left-16 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl">
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Furniture Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Electronic Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Fashion Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Shoes Store
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group max-lg:px-3 max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block"
                    >
                      Payment & Services
                    </a>

                    <ul className="flex flex-col absolute gap-5 top-14 max-lg:top-8 -left-12 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl">
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Furniture Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Electronic Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Fashion Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Shoes Store
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group max-lg:px-3 max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block"
                    >
                      Paytm for Business
                    </a>

                    <ul className="flex flex-col absolute gap-5 top-14 max-lg:top-8 -left-12 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all duration-400 rounded-xl">
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Furniture Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Electronic Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Fashion Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Shoes Store
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group max-lg:px-3 max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-blue-700 text-slate-900 font-medium text-[15px] block"
                    >
                      Company
                    </a>

                    <ul className="flex flex-col absolute gap-5 top-14 max-lg:top-8 -left-20 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all duration-400 rounded-xl">
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Furniture Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Electronic Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Fashion Store
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Shoes Store
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div id="toggleOpen" className="flex ml-auto lg:hidden">
                <button className="cursor-pointer">
                  <svg
                    className="w-7 h-7"
                    fill="#000"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                </button>
              </div>
            </div>
          </header>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
