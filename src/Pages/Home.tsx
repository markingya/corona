import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[url('/Images/redcheck.jpg')] min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col gap-15 items-center py-15 px-5">
       
          <div className="bg-gray-50 lg:max-w-4xl md:max-w-xl max-w-sm w-full p-5 md:p-8 rounded-2xl border-4 border-cred ring-2 ring-black/8 relative">
            <h1 className="font-corona text-indigo-800 text-xl md:text-2xl lg:text-5xl text-center leading-snug">
              <span className="block relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-cred">
              The Official Website of
              </span>
              <span className="block relative py-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-cred">
              Corona Private School Makurdi,
              </span>
              <span className="block relative py-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-cred">
               Nursery & Primary Alumni.
              </span>
            </h1>
            <img src="/Images/coronaLogo.png" alt="Corona Logo" className="absolute lg:-top-12 -top-6 lg:-right-10 -right-4 -rotate-20 w-15 md:w-30"/>
          </div>
         

       <div className="flex gap-4">
        <Link to="/join">
          <button className="bg-indigo-700 font-sticker font-bold border-white border-5 ring-2 ring-black/10 py-3 px-5 rounded-xl lg:text-lg text-sm text-white cursor-pointer">Join</button>
        </Link>
        <Link to="/directory">
          <button className="bg-[#FF3838] font-sticker font-bold border-white ring-2 ring-black/10 border-5 py-3 px-5 rounded-xl lg:text-lg text-sm text-white cursor-pointer">Rekindle Friendships</button>
        </Link>
       </div>
        
        <img src="/Images/coronaKids.jpg" alt="Old Corona Kids" className="lg:max-w-lg md:max-w-md lg:my-5 ring-3 ring-black/10 max-w-xs w-full rounded-2xl border-6 md:border-10 rotate-5 border-white"/>

      </div>
    </div>
  );
};

export default Home;