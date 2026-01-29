import CourseCard from "../components/CourseCard"
export default function Courses(){
    return(
        <>
        <section className="h-screen">
             <section className="h-screen">
                        <div className="w-full px-6 md:px-8">
                            <div className="max-w-7xl mx-auto mt-6 w-full items-center justify-between ">
                                 <h1 className="text-3xl text-gray-600 text-left leading-6 ">All Centers</h1>
                            </div>
            
                            <div className="max-w-7xl mx-auto w-full mt-4 pb-8 sm:pb-10 md:mt-6 md:pd-12">
                                <div className="flex flex-col w-full gap-4  sm:grid sm:grid-cols-2 md:grid-cols-2">
                                    
                                    <CourseCard name="JEE Ultimate 2 Year Online Course"
                                                batch="Target 2028"
                                                price="₹1,72,881"/>   
                                            
            
                                </div>
            
                            </div>
                           
            
                        </div>
                        
                    </section>

        </section>

        </>

    )
}