import { useEffect, useState } from "react";

export default function FirstService(props: { data: any }) {
  const [serviceData, setServiceData] = useState<any>([]);

  useEffect(() => {
    setServiceData(props.data);
  }, [props.data]);

  return (
    <>
      <section className="bg-white hidden dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
          <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/2 px-8">
              <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                  {serviceData?.title}
                  Sed ac magna sit amet risus tristique interdum, at vel velit
                  in hac habitasse platea dictumst.
                </h2>
                <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  sagittis, quam nec venenatis lobortis, mi risus tempus nulla,
                  sed porttitor est nibh at nulla. Praesent placerat enim ut ex
                  tincidunt vehicula. Fusce sit amet dui tellus.
                </p>
                <div className="w-full md:w-1/3">
                  <button
                    type="button"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    See more
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-8">
              <ul className="space-y-12">
                <li className="flex ">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                      1
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Responsive Elements
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-loose">
                      All elements are responsive and provide the best display
                      in all screen size. It&#x27;s magic !
                    </p>
                  </div>
                </li>
                <li className="flex ">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                      2
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Flexible Team
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-loose">
                      Flexibility is the key. All team is available 24/24 and
                      joinable every day on our hotline.
                    </p>
                  </div>
                </li>
                <li className="flex ">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                      3
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Ecologic Software
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-loose">
                      Our Software are ecologic and responsable. Green is not
                      just a color, it&#x27;s a way of life.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 bg-custom-brown p-10 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container  mx-auto">
          <div className=" flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Services
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 hover:text-white rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg hover:bg-custom-blue md:px-7 xl:px-10">
                <div className="bg-white p-2 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                 <img src="	https://htmldemo.zcubethemes.com/riorelax/img/icon/sve-icon3.png" alt="" />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                Parking Space
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 hover:text-white rounded-[20px] bg-white p-10 shadow-md hover:bg-custom-blue hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-white p-2  mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <img src="https://htmldemo.zcubethemes.com/riorelax/img/icon/fe-icon01.png"  alt="img"/>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  Room Service
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 hover:text-white rounded-[20px] bg-white p-10 shadow-md hover:bg-custom-blue hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-white p-2  mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <img src="https://htmldemo.zcubethemes.com/riorelax/img/icon/sve-icon2.png"  alt="img"/>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                Fibre Internet
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 hover:text-white  rounded-[20px] bg-white p-10 shadow-md hover:bg-custom-blue hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-white p-2  mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <img src="https://htmldemo.zcubethemes.com/riorelax/img/icon/fe-icon08.png"  alt="img"/>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                Special Offers
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 hover:text-white rounded-[20px] bg-white p-10 shadow-md hover:bg-custom-blue hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-white p-2  mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <img src="https://htmldemo.zcubethemes.com/riorelax/img/icon/fe-icon05.png"  alt="img"/>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                Best Accommodation
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 hover:text-white rounded-[20px] bg-white p-10 shadow-md hover:bg-custom-blue hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-white p-2  mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <img src="	https://htmldemo.zcubethemes.com/riorelax/img/icon/sve-icon5.png"  alt="img"/>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  Breakfast
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
