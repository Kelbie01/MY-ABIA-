export default function Government() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-serif antialiased overflow-x-hidden transition-colors duration-200">
      <section className="w-full mt-10 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="w-full bg-gray-800 text-white py-20 md:py-32 rounded-sm flex flex-col items-center text-center px-4 animate-fade-up bg-cover bg-center bg-no-repeat bg-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2033&auto=format&fit=crop')" }}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-md">
              Government of Abia State
            </h1>
            <p className="text-base sm:text-xl max-w-3xl mb-6 sm:mb-8 opacity-90 drop-shadow-sm">
              Executive, Legislative, and Judicial Structure serving the people.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="https://abiastate.gov.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-6 py-3 sm:px-5 sm:py-4 hover:bg-gray-200 hover:text-black text-base font-semibold sm:text-lg rounded-md btn-transition shadow-lg">
                View Official Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-12">
            {/* Governor's Card */}
            <div className="flex flex-col md:flex-row items-center border border-black dark:border-gray-700 card-hover animate-fade-up">
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden relative group">
                <img
                  src="https://i.pinimg.com/736x/92/1d/9e/921d9ede0c07b3b6989b43515bab8f1e.jpg"
                  alt="His Excellency, Dr. Alex Otti"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">His Excellency, Dr. Alex Otti</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Dr. Alex Chioma Otti, OFR is the Governor of Abia State, Nigeria, sworn in on 29 May 2023 after winning the 2023 election on the Labour Party platform.
                  <br /><br />
                  Born on 18 February 1965, he hails from Isiala-Ngwa South LGA, Abia State. He holds a First Class degree in Economics from the University of Port Harcourt and an MBA from the University of Lagos.
                  <br /><br />
                  As governor, he focuses on infrastructure, economic reform, healthcare, and workers’ welfare.
                </p>
                <a
                  href="https://abiastate.gov.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-black dark:border-white px-6 py-3 rounded-md text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                  Meet the Governor
                </a>
              </div>
            </div>

            {/* Arms of Government */}
            {[
              {
                title: "Executive",
                img: "https://cdn.guardian.ng/wp-content/uploads/2021/04/Nigeria-FEC-Meeting-897x598.jpg",
                text: "Led by the Executive Governor, this arm implements laws and oversees the daily administration of the state. It includes the Deputy Governor, Secretary to State Government, and Commissioners of various Ministries.",
                btnText: "Meet the Cabinet"
              },
              {
                title: "Legislature",
                img: "https://nass.gov.ng/themes/newnass/images/content/1528.jpg",
                text: "The Abia State House of Assembly is the legislative arm responsible for making laws for the peace, order, and good government of the state. It also performs oversight functions.",
                btnText: "House Proceedings",
                reverse: true
              },
              {
                title: "Judiciary",
                img: "https://cdn.businessday.ng/2022/08/Judiciary.png",
                text: "The independent arm that interprets the laws. The state judiciary comprises the High Court, Customary Court of Appeal, and Magistrates&apos; Courts, ensuring justice and the rule of law.",
                btnText: "Court System"
              },
              {
                title: "Local Government Areas",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Abia_State_Local_Government_Areas.png/800px-Abia_State_Local_Government_Areas.png",
                text: "Abia State consists of 17 Local Government Areas (LGAs) that bring government closer to the grassroots. Each LGA is headed by a Chairman and Councilors.",
                btnText: "View all 17 LGAs",
                reverse: true
              },
              {
                title: "Policies & Programs",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtzq12T9Iap5UFiTtsJjgUlwZu-sFiaX4NQ&s",
                text: "Discover the strategic pillars of the administration. From agricultural revolutions and infrastructure development to healthcare and educational reforms driving state progress.",
                btnText: "Read Policies"
              }
            ].map((section, idx) => (
              <div key={idx} className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center border border-black dark:border-gray-700 card-hover animate-fade-up`}>
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden relative group">
                  <img src={section.img} alt={section.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{section.text}</p>
                  <button className="border border-black dark:border-white px-6 py-3 rounded-md text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                    {section.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
