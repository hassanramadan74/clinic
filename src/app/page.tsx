import Hero from "@/Components/Hero";
import ImageSlider from "@/Components/ImageSlider";
import Services from "@/Components/Services";


export default function Home() {
  return (
    <>
    <Hero/>
    <Services/>
    <ImageSlider/>
    <div className="pt-16 pb-12 flex flex-col items-center justify-center">
      <h2 className="text-[33px] text-[#2c4755] font-medium mb-10">Here is what our customers say</h2>
      <button className="bg-[#2c4755] hover:bg-[#1d3644] text-white rounded-full px-6 py-4 text-[17px] font-medium font-montserrat cursor-pointer">
              Read more
            </button>
    </div>
    </>
  )
}
