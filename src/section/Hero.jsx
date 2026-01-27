import HeorImg from "../assets/hero.webp"
import ClassroomImg from "../assets/classroom.webp"
import LiveImg from "../assets/live.webp"
import TestSeriesImg from "../assets/test.png"
import selfImg from "../assets/self.png"
import { Link } from "react-router-dom";
export default function Hero(){
    return(
        <>
        <section className=" h-screen bg-[#EDF2FA]">
            <div className="max-w-screen h-3/4   grid grid-cols-2 items-center justify-beetween">
            <div className="flex  h-full flex-col cols-span-1 items-start justify-center px-20">
                <h1 className="text-3xl text-zalando-sans-expanded font-bold  leading-tight text-center">
                    <span className = "block text-5xl mb-4">
                        Empower Your Future with AIMERS
                    </span>
                    <span className="block text-2xl mb-6 text-blue-900 font-semibold">
                        AIMERS: Where Ambitions Take Flight

                    </span>

                </h1>
               

            </div>
            <div className=" cols-span-1 flex items-center justify-center">
                <div className="w-4/5 h-4/5">
                    <img src={HeorImg} alt="Hero Image" />
                </div>
                
            </div>
               

            </div>

            <div className="w-full flex-1 flex-col items-center justify-between  px-20 py-2 mb-2">


                <h1 className="text-gray-600 font-medium text-3xl">Explore Courses</h1>

                <div className="flex  items-center justify-between mt-2 space-x-4">
                    {mapHeroCard({to:"/classroom", src:ClassroomImg, alt:"Classroom Courses", title:"Classroom Courses"})}
                    {mapHeroCard({to:"/live", src:LiveImg, alt:"Live Online Courses", title:"Live Online Courses"})}
                    {mapHeroCard({to:"/test-series", src:TestSeriesImg, alt:"Test Series", title:"Test Series"})}
                    {mapHeroCard({to:"/self-learning", src:selfImg, alt:"Self Learning", title:"Self Learning"})}

                </div>

            </div>


        </section>
        </>
    )
}




function mapHeroCard({to,src, alt, title}){
    return(
        <>
        <Link to={to}className = "w-1/4 h-full  bg-white  rounded-lg shadow-md flex-1 flex-col items-center justify-between px-4">
        <img src={src} alt={alt} className="w-16 h-16" />
        <span className="ml-2 text-black font-medium">{title}</span>
        </Link>
        </>
    )
}