import request from "../assets/request.avif"
export default function Request(){
    return(
        <>
        <section className="h-screen max-w-screen-xl bg-white">
       
           <div className="px-4 py-2 ml-24 mr-24 mt-20 mb-8 shadow-lg rounded-lg ">
  <div className=" grid grid-cols-2 gap-2 px-2 py-2 h-[480px]     bg-[url('../assets/request.avif')] " 
       style={{backgroundImage:`url(${request})`, backgroundSize:'cover'}}>
                    <div className="col-span-1 flex flex-col justify-center  px-2 py-2  px-12  ">
                       
                            <h2 className="text-3xl font-bold mb-4 text">Request a Callback</h2>
                           <span className="text-xl font-semibold mb-2 text-gray-500 text-left">
                            Share your details and our student advisor 
                           </span>
                           <span className="text-xl font-semibold mb-2 text-gray-500 text-left">
                            will reach out to you.
                           </span>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center  px-2 py-2  px-12  ">
                        <form className="flex flex-col space-y-4 bg-white  p-4 rounded-lg shadow-md">
                            <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            <input type="tel" placeholder="Your Phone Number" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            <button type="submit" className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition duration-300">Submit</button>
                        </form>
                    </div>
           </div>
              

                

            </div>
        </section>
        </>
    )
}