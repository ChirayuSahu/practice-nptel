"use client";

import Card from "@/components/card";
import Footer from "@/components/footer";

import { courses } from "@/utils/course";

export default function Home() {
  const CourseCards = () => {
    return (
      <div className="flex w-full flex-wrap">
        {courses.map((course, index) => (
          <Card key={index} courseId={course.id} courseName={course.name} semester={course.semester} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen text-white w-full">
      <h1 className="mx-auto text-[1.5rem] px-4 mt-8">NPTEL Practice App</h1>
      <div className="flex flex-col flex-wrap mx-auto px-4 gap-[20px] mt-4">
        <h1 className="text-2xl px-4">Select a Course :</h1>
        <div className="flex flex-row">
          <CourseCards />
        </div>
      </div>
      <Footer />
    </div>
  );
}
