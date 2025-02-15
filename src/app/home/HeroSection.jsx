import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative mt-[68px] h-120vh flex flex-col justify-center items-center text-center px-2 sm:px-4 md:px-6 py-10 md:py-24 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/herosection/BG.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Plans for Laptop View */}
      <div className="hidden lg:flex absolute top-16 left-2 right-2 justify-between w-full max-w-5xl mx-auto">
        <Plans position="upper-left" />
        <Plans position="upper-right" />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col mt-6 items-center gap-4 sm:gap-6 flex-grow justify-center px-2">
        <h1 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl font-bold text-white leading-tight max-w-5xl">
          Assess, Advance, Achieve: Your
          <br />
          Path to Engineering Excellence
        </h1>

        {/* Buttons (All Screens) */}
        <div className="mt-1 sm:mt-10 flex flex-row gap-3">
          <button className="bg-blue-600 z-20 hover:bg-blue-700 text-white px-4 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 shadow-md">
            Book a Demo
          </button>
          <button className="bg-white z-20 text-gray-700 hover:bg-gray-200 px-4 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-xl flex items-center gap-2 shadow-md transition-all duration-300">
            <img
              src="/home/herosection/google-icon.svg"
              alt="Google"
              width="20"
              height="20"
            />
            Start Free Trial
          </button>
        </div>

        {/* Description (All Screens) */}
        <p className=" sm:mt-24 text-sm sm:text-lg text-white font-semibold max-w-4xl leading-relaxed px-1 sm:px-0">
          Our goal is to provide you with the tools and resources you need to
          succeed. Making your hiring journey smooth and quick. Curated 1000+
          custom tests to examine your tech candidates and give you 100%
          accurate results in order for you to choose the best.
        </p>

        {/* Plans for Mobile & Tablet */}
        <div className="lg:hidden flex mb-6 flex-col items-center gap-2">
          <Plans position="upper-left" />
          <Plans position="upper-right" />
          <Plans position="lower-left" />
          <Plans position="lower-right" />
        </div>
      </div>

      {/* Plans for Laptop View (Neeche wale plans) */}
      <div className="hidden lg:flex absolute top-[calc(45%+20px)] left-2 right-2 justify-between w-full max-w-5xl mx-auto">
        <Plans position="lower-left" />
        <Plans position="lower-right" />
      </div>
    </section>
  );
};

const Plans = ({ position }) => {
  const tag = "Plan Match for SkillMatch";

  const plans = [
    {
      heading: "UnitedHealthcare",
      description: "Premium Insurance",
      percent: "97%",
      image: "/home/herosection/UnitedHealthcare.svg",
    },
    {
      heading: "Humana",
      description: "Platinum Network",
      percent: "77%",
      image: "/home/herosection/Hamana.svg",
    },
    {
      heading: "Anthem Blue Cross",
      description: "SMB Global Plan",
      percent: "91%",
      image: "/home/herosection/Anthem.svg",
    },
    {
      heading: "Aetna",
      description: "Small Business Alpha",
      percent: "82%",
      image: "/home/herosection/Aetna.svg",
    },
  ];

  let plan = {};
  if (position === "upper-left") plan = plans[0];
  if (position === "upper-right") plan = plans[1];
  if (position === "lower-left") plan = plans[2];
  if (position === "lower-right") plan = plans[3];

  return (
    <div className="bg-gradient-to-r from-white/45 to-white/10 backdrop-blur-md px-2 py-1 flex items-center gap-3 rounded-full text-left text-white text-xs shadow-lg hover:from-white/40 hover:to-white/20 transition-all duration-300 w-60 sm:w-60 md:w-60">
      <Image
        src={plan.image}
        alt={plan.heading}
        width={40}
        height={40}
        className="w-7 h-7 sm:w-10 sm:h-10"
      />
      <div className="flex flex-col min-w-0">
        <h1 className="font-semibold truncate">{plan.heading}</h1>
        <p className="text-[10px] text-white font-bold truncate">
          {plan.description}
        </p>
        <div className="mt-1 flex items-center gap-1 text-[9px]">
          <span className="bg-gray-300/90 px-1 rounded text-green-500">
            {plan.percent}
          </span>
          <b className="text-white truncate">{tag}</b>
        </div>
      </div>
      <Image
        src="/home/herosection/arrow.svg"
        alt="Arrow"
        width={20}
        height={20}
        className="opacity-70 hover:opacity-100 transition-opacity"
      />
    </div>
  );
};

const HeroDark = () => {
  return (
    <>
      <Top />
      <div className="bg-dark-blue relative -top-6 min-h-[48vh] py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* First Section */}
            <div className="flex flex-col items-center text-center text-white p-6">
              <div className="mb-4">
                <img
                  src="/home/dark-hero/diamond.svg"
                  alt="Feature 1"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 whitespace-nowrap">
                All you need at one Platform
              </h3>
              <p className="text-gray-300 h-24 text-sm">
                With the help of our generated skill assessments, video
                interviews and pre-screening chatbots you can easily access
                technical and soft skills of a candidate.
              </p>
            </div>

            {/* Second Section */}
            <div className="flex flex-col items-center text-center text-white p-6">
              <div className="mb-4">
                <img
                  src="/home/dark-hero/fourdots.svg"
                  alt="Feature 2"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 whitespace-nowrap">
                No More Hiring Errors
              </h3>
              <p className="text-gray-300 h-24 text-sm">
                It's better to hire the best by using job simulation assessments
                rather than making poor decisions and spending money on hiring.
                Our platform ensures accuracy.
              </p>
            </div>

            {/* Third Section */}
            <div className="flex flex-col items-center text-center text-white p-6">
              <div className="mb-4">
                <img
                  src="/home/dark-hero/diamond.svg"
                  alt="Feature 3"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 whitespace-nowrap">
                Cheat Proof Assessments
              </h3>
              <p className="text-gray-300 h-24 text-sm">
                Presenting you the most updated features which can ensure
                credibility of candidates assessments, including ChatGPT
                detection and anti-cheating features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Top = () => {
  return (
    <div className="bg-light-blue w-auto rounded-t-[2rem] relative -top-6 border-gray-600 border-[1px] flex items-center justify-center px-3 py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6 lg:gap-8 items-center justify-center">
          <div className="col-span-1 flex justify-center">
            <Image
              src="/home/herosection/HamanaDark.svg"
              alt="Hamana"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              src="/home/herosection/AnthemDark.svg"
              alt="Anthem"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
          <div className="hidden sm:flex sm:col-span-1 justify-center">
            <Image
              src="/home/herosection/HealthcareDark.svg"
              alt="Healthcare"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              src="/home/herosection/AetnaDark.svg"
              alt="Aetna"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              src="/home/herosection/CignaDark.svg"
              alt="Cigna"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroDark, HeroSection };
