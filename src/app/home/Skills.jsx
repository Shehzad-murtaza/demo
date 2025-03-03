import Image from "next/image";

export default function SkillAssessment() {
  return (
    <div className="container flex justify-center items-center mx-auto px-6 md:px-12 lg:px-24 xl:px-32 py-16 h-auto">
      <div className="grid gap-8 lg:grid-cols-2 items-center max-w-5xl w-full">
        {/* Left side - Image */}
        <div className="relative flex justify-center max-w-lg w-full">
          <Image
            src="/home/skills/skilltest.svg"
            alt="Skill Assessment Interface"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-6 max-w-lg w-full">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Create Skill Assessments and Video Interviews in Minutes
          </h1>

          <div className="space-y-6">
            <div className="flex gap-3 items-start">
              <Image
                src="/home/skills/img.svg"
                alt="Assessment Icon"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Assess Both Hard and Soft Skills
                </h3>
                <p className="text-gray-700">
                  With AI-powered assessments, video interviews, and chatbots,
                  evaluate candidates' technical and cognitive skills
                  effectively.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Image
                src="/home/skills/img2.svg"
                alt="Library Icon"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Select from Library or Create Your Own
                </h3>
                <p className="text-gray-700">
                  Choose from 1000+ curated assessments or design custom ones to
                  fit your hiring needs.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-6 px-6 ml-10 py-3 bg-[#4299fe] hover:bg-[#4299fe] hover:scale-105 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}
