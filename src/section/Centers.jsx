import CenterCard from "../components/CenterCard"
import Agra from "../assets/Agra.jpg"

export default function Centers(){
    return(
        <>
        <section className="h-screen">
            <div className="w-full px-6 md:px-8">
                <div className="max-w-7xl mx-auto mt-6 w-full items-center justify-between ">
                     <h1 className="text-3xl text-gray-600 text-left leading-6 ">All Centers</h1>
                </div>

                <div className="max-w-7xl mx-auto w-full mt-4 pb-8 sm:pb-10 md:mt-6 md:pd-12">
                    <div className="flex flex-col w-full gap-4  sm:grid sm:grid-cols-2 md:grid-cols-4">
                        <CenterCard img={Agra} alt="Agra" city="Agra" state="Utter Pradesh" />
                         <CenterCard img={Agra} alt="Agra" city="Agra" state="Utter Pradesh" />
                          <CenterCard img={Agra} alt="Agra" city="Agra" state="Utter Pradesh" />
                           <CenterCard img={Agra} alt="Agra" city="Agra" state="Utter Pradesh" />
                            <CenterCard img={Agra} alt="Agra" city="Agra" state="Utter Pradesh" />
                             <CenterCard img={Agra} alt="Agra" city="Agra" state="Utter Pradesh" />
                              <CenterCard img={Agra} alt="Agra" city="Agra" state="Utter Pradesh" />
                               <CenterCard img={Agra} alt="Agra" city="Agra" state="Utter Pradesh" />
                           
                                
                                  


                    </div>

                </div>
               

            </div>
            
        </section>
       
        </>
    )
}