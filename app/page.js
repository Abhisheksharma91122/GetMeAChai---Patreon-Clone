import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 h-[44vh] text-white">
        <div className="font-bold text-5xl flex justify-center items-center">Buy Me a Chai <span><img src="/tea.gif" alt="tea img" width={88} /></span></div>
        <p>A crowdfunding platform for creators. Get funded by your fans and followers. Start now !</p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>


      <div className="bg-white opacity-10 h-1"></div>


      <div className="text-white  container mx-auto pb-32 pt-14">
        <h2 className="font-bold text-3xl text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex justify-around gap-5">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2" src="/man.gif" alt="man" width={88} />
            <p>Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2" src="/coin.gif" alt="coin" width={88} />
            <p>Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2" src="/group.gif" alt="group" width={88} />
            <p>Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>

      <div className="text-white  container mx-auto pb-32 pt-14 flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl text-center mb-14">Learn more about us</h2>
        <iframe className="rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/5NgNicANyqM?si=ycrde6xqpET3wWKV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}
