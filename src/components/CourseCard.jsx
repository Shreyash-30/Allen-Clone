export default function CourseCard({name, batch , price}){

    return(
        <>
        
       
            <div className="w-full relative bg-contain p-4  rounded-2xl bg-right-bottom bg-no-repeat flex flex-col items-center justify-between md:w-95 shadow-lg ">
                <div className="w-full px-2 md:px-4">
                    <div className="w-16 h-8    rounded-[10px] mb-2 bg-black">
                        <h2 className="text-white text-xl text-center ">Live</h2>
                    </div>
                    <div className="w-full flex flex-col  items-left justify-between gap-2">
                        <h1 className="text-xl font-semibold leading-6">{name}</h1>
                        <h3 className="text-[16px] font-semibold text-gray-700 leading-4 text-left">{batch}</h3>
                    </div>
                    <ul className="flex flex-col gap-4 mt-6 w-full items-center justify-between flex-wrap px-2 list-none ">
<li className="flex items-start">
  <p className="text-sm text-gray-700 text-left leading-normal">
    1200+ hours of LIVE classes with ALLEN Kota&apos;s top faculty
  </p>
</li>
<li className="flex items-start">
  <p className="text-sm text-gray-700 text-left leading-normal">
    1200+ hours of LIVE classes with ALLEN Kota&apos;s top faculty
  </p>
</li>
<li className="flex items-start">
  <p className="text-sm text-gray-700 text-left leading-normal">
    1200+ hours of LIVE classes with ALLEN Kota&apos;s top faculty
  </p>
</li>


                    </ul>

                    </div>

                    <div className="w-full mt-6  flex items-center flex-row justify-between px-2 ">
                        <p className="text-xl text-left">{price}</p>
                        <p className="text-blue-600 text-right text-xl">Know More</p>
                    </div>


                </div>


           
       
        </>
    )
}