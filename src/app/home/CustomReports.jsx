import Image from "next/image";

export default function Report() {
  return (
    <div className="container flex justify-center items-center mx-auto px-6 md:px-12 lg:px-24 xl:px-32 py-16 h-auto">
      <div className="grid gap-8 lg:grid-cols-2 items-center max-w-5xl w-full">
        {/* Left side - Content */}
        <div className="space-y-6 order-2 lg:order-1 max-w-lg w-full">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Detailed Reports and Analytics for Better Hiring Decisions
          </h1>
          <div className="space-y-6">
            <div className="flex gap-3 items-start">
              <Image
                src="/home/skills/img.svg"
                alt="Report Icon"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Comprehensive Performance Insights
                </h3>
                <p className="text-gray-700">
                  Get detailed analytics and performance metrics to make
                  data-driven hiring decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Image
                src="/home/skills/img2.svg"
                alt="Analytics Icon"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Custom Report Generation
                </h3>
                <p className="text-gray-700">
                  Generate customized reports to analyze candidate performance
                  across different parameters.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-6 px-6 py-3 ml-10 bg-[#4299fe] hover:bg-[#4299fe] hover:scale-105 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300">
            Learn More →
          </button>{" "}
        </div>

        {/* Right side - Image */}
        <div className="relative flex justify-center order-1 lg:order-2 max-w-lg w-full">
          <Image
            src="/home/reports/custom.svg"
            alt="Reports and Analytics Interface"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
