import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>LaikaPups</title>
        <link rel="icon" href="/images/favicon.svg" />

        <meta property="og:title" content="LaikaPups" key="ogtitle" />
        <meta property="og:description" content="" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://nft.astroprotocol.com/" key="ogurl"/>
        <meta property="og:image" content="https://nft.astroprotocol.com/images/Hola.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://nft.astroprotocol.com/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="nft.astroprotocol.com" key="twdomain" />
        <meta property="twitter:url" content="https://nft.astroprotocol.com/" key="twurl" />
        <meta name="twitter:title" content="LaikaPups" key="twtitle" />
        <meta name="twitter:description" content="" key="twdesc" />
        <meta name="twitter:image" content="https://nft.astroprotocol.com/images/traits.gif" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/traits.gif" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="/#about" className="text-4xl text-white hover:text-black m-6">About</a>
              <a href="/mint" className="text-4xl text-white hover:text-black m-6">Mint!</a>
              <a href="/#traits" className="text-4xl text-white hover:text-black m-6">laika traits</a>
              <a href="/#roadmap" className="text-4xl text-white hover:text-black m-6">Roadmap</a>
              <a href="/#team" className="text-4xl text-white hover:text-black m-6">Team</a>
              <a href="/#contact" className="text-4xl text-white hover:text-black m-6">Contact</a>
              <a href="https://twitter.com/boringlaikasco" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/8Wk9Hp6UyV" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>
             
          </div>
          
        </div>

        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl Poppitandfinchsans text-white ">EVERYONE, meet <br/><span className="text-blau">LaikaPups</span></h1>
                    <p className="text-2xl text-white my-6  montserrat">These <span className="text-5xl Poppitandfinch ">Laika</span> <span className="text-blau text-5xl Poppitandfinchsans">Pups</span> are <span className="text-span-2 font-bold">blasting into space soon!</span>.<br />‍<br />The LaikaPup rocket launch will send the most <br/>‍<span className="text-blau text-5xl Poppitandfinchsans">ARTISTIC </span><span className="text-5xl Poppitandfinch ">and</span><span className="text-blau text-5xl Poppitandfinchsans">REWARDING </span> <br/> Pups straight you!
                    </p>
                    <p className="text-2xl text-white my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> 10 September 2021. 2pm EST. <br />‍
                    <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 1024</strong> Pups.<br/><strong>PRICE: 0.05 BNB </strong>each.</span></p>
                    <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-09-10T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe>

                  </div>
                  <img className="lg:w-1/2 w-3/4" src="images/974.png" width="500px" />
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-white p-2 ">GO TO THE LAUNCH PAD!</a>
                
                
            </div> 
            </div>



    

                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/Traits.gif" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">LaikaPup Varieties</h2>
                    <p className="text-xl text-white my-6  montserrat"> Following the recent worldwide pandemic, <span className="font-bold"> global demand grew</span> for an <span className="font-bold">interplanetary </span> breed of dogs. <span className="font-bold">In order to save their best friend,</span> research teams across the globe have commenced efforts to launch<span className="font-bold"> mans best friend </span>into space.   
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Concerned about the wellbeing of LaikaNauts everywhere, LaikaPups have agreed to <span className="font-bold">provide support </span>for <span className="font-bold">anyone who provides a home base</span>.
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> The fate for mans best friend depends on you.
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Your support in this time of need is greatly appreciated!   
                    </p>
                  </div>
                </div>
                
                <div id="gallery" className="   mx-6 py-6">
                    <h2 className="text-blau Poppitandfinchsans text-7xl text-center">SIGNATURE SERIES GALLERY</h2>
                  <div className="flex flex-wrap  items-center mx-6   py-6 ">
                    <div className="md:w-1/2">
                      <div className=" border-blue-300 p-2"><img src="images/1.png" alt="" width="600px" className="feature-image"/></div>

                    </div>
                    <div className="md:w-1/2 flex flex-wrap">
                      <div className=" p-2 w-1/2"><img src="images/2.png" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/3.png" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/4.png" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/5.png" alt="" width="400px" className="feature-image"/></div>

                    </div>
                  </div>
                </div>

              <div id="roadmap" className="">
              <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">OUR MISSION STATEMENT</h2>
              <p className="text-xl text-white text-center my-6  montserrat"> To continue providing support and growth to the overall<span className="font-bold"> LaikaProtocol </span> community. 
              </p>
              <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">HOW LAIKAPUPS BENEFITS LAIKAPROTOCOL</h2>
              <p className="text-xl text-white my-6  montserrat">The mission statement of LaikaPups is the same as LaikaProtocol, <span className="text-5xl Poppitandfinch ">to explore, learn and innovate</span>. <span className="text-5xl Poppitandfinch">LaikaPups'</span> goal has been to <span className="text-blau text-5xl Poppitandfinchsans">GIVE BACK</span> as much as possible.
              </p>
              <p className="text-xl text-white my-6  montserrat"> That's why the contract will automatically buyback and burn 2% of the aftermarket sale value directly into Laika and Astro. 
              <span className="font-bold"> 5% of sales</span> will be returned to the dev team to ensure the continued growth of the ecosystem. 
              </p>
              <p className="text-xl text-white my-6  montserrat"> At 100% sellout, LaikaPups will have officially <span className="font-bold">blasted off</span>.
              </p>      
              <h2 className="text-6xl text-center Poppitandfinchsans text-blau my-4">ROADMAP</h2>
              <ul className="">
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> 4 x 1 BNB Burns: </span> The first of these will be made at 50% sales, with the following 3 to occur at the teams' discretion. These funds will act as a cushion to ensure the longevity of the overall ecosystem.</li>
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> 1 x 10 BNB Burns: </span> Upon selling out, 10 BNB will be used to buyback and burn Laika and Astro, split at the teams' discretion.</li>
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> Secondary sales: 7% royalty </span> (2% automatically used to buyback and burn Laika and Astro, 5% to the team).</li>

              </ul>
              <p className="text-xl text-white my-6  montserrat"> In addition, we have been, and continue to make <span className="font-bold underline"> high quality content for the DeFi community </span> through our <span className="font-bold underline"> Forge and Academy </span>. 
              </p>


              </div>
               
              <div id="contact" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">CONTACT LAIKAPUPS RESEARCH TEAM</h2>
                    <p className="text-xl text-white my-6  montserrat"> We'd love to hear from you! 
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Drop us a line on Telegram at https://t.me/LaikaProtocol, <br/>
                    or alternatively reach out to us on Twitter <a className="text-white underline font-bold" target="_blank" href="https://twitter.com/laikaprotocol">@LaikaProtocol</a><br/> 
                    Or alternatively, join our <a className="text-white underline font-bold" target="_blank" href="">Discord Server</a>.
                    </p>
                  </div>
       


              </div>   
          </div>  
    </div>  
    )
  }