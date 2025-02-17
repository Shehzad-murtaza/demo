import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Badge,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cardData = [
  {
    id: 1,
    badge: "CUSTOM ASSESSMENT",
    title: "BUSINESS DEVELOPMENT",
    description: "Lead-generation through different channels, communication",
    learnMore: "Learn More",
  },
  {
    id: 2,
    badge: "TECHNICAL TEST",
    title: "FRONTEND DEVELOPER",
    description: "Expertise in React, JavaScript, and UI/UX principles",
    learnMore: "Explore Test",
  },
  {
    id: 3,
    badge: "SOFT SKILLS",
    title: "COMMUNICATION & TEAMWORK",
    description: "Assess verbal and written communication skills",
    learnMore: "Discover More",
  },
  {
    id: 4,
    badge: "CUSTOM ASSESSMENT",
    title: "DATA ANALYST",
    description: "Evaluate analytical and problem-solving skills",
    learnMore: "Get Started",
  },
  {
    id: 5,
    badge: "TECHNICAL TEST",
    title: "BACKEND ENGINEER",
    description: "Node.js, APIs, and database expertise",
    learnMore: "Try Now",
  },
  {
    id: 6,
    badge: "SOFT SKILLS",
    title: "LEADERSHIP & MANAGEMENT",
    description: "Assess leadership and strategic thinking",
    learnMore: "See Details",
  },
];

export function CarouselSpacing() {
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
        Get inspired by our assessment templates
      </h2>

      {/* Paragraph */}
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-6 sm:mb-8 px-4">
        Try out our customizable templates created by industry leaders, or
        create your own skill assessment using more than{" "}
        <b>500+ pre-built tests.</b>
      </p>

      {/* Carousel */}
      <Carousel
        className="relative w-full max-w-[90vw] sm:max-w-[85vw] lg:max-w-6xl h-[350px] sm:h-[400px] lg:h-[420px]"
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
        }}
      >
        {/* Navigation Buttons must be inside the <Carousel> */}
        <CarouselPrevious className="absolute left-2 sm:-left-4 lg:-left-16 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/60 text-white rounded-full hover:bg-gray-800/80 transition-all z-10" />
        <CarouselNext className="absolute right-2 sm:-right-4 lg:-right-16 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/60 text-white rounded-full hover:bg-gray-800/80 transition-all z-10" />

        {/* Carousel Items */}
        <CarouselContent className="-ml-2 sm:-ml-4">
          {cardData.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col gap-2 sm:gap-3 shadow-lg">
                  <CardHeader className="flex flex-col items-start p-3 sm:p-4">
                    <Badge className="text-xs sm:text-sm px-2 py-1">
                      {item.badge}
                    </Badge>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-4 sm:gap-6 text-left p-3 sm:p-4 flex-grow">
                    <CardTitle className="text-lg sm:text-xl">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-900 text-sm">
                      {item.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="flex justify-start p-3 sm:p-4">
                    <div className="text-sm sm:text-base text-blue-400 py-1 group cursor-pointer">
                      {item.learnMore}
                      <hr className="w-full border-2 border-blue-400 transition-transform group-hover:scale-105" />
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
