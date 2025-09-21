import React from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Class 8",
      price: 1500,
      description:
        "Strong foundation in Mathematics, Science, and English. Helps prepare for board exams with conceptual clarity and practice materials.",
    },
    {
      id: 2,
      title: "Class 9",
      price: 1800,
      description:
        "Comprehensive coverage of NCERT syllabus with additional problem-solving sessions, revision tests, and doubt-clearing classes.",
    },
    {
      id: 3,
      title: "Class 10",
      price: 2000,
      description:
        "Board exam-focused preparation with mock tests, solved previous year papers, and guidance for scoring maximum marks.",
    },
    {
      id: 4,
      title: "Class 11",
      price: 2200,
      description:
        "In-depth preparation for higher secondary syllabus with focus on competitive exam readiness.",
    },
    {
      id: 5,
      title: "Class 12",
      price: 2500,
      description:
        "Comprehensive coverage of board syllabus, advanced problem-solving, and competitive exam guidance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-6">Our Courses</h1>
        <p className="text-lg text-gray-700 mb-14 max-w-3xl">
          Explore our well-structured courses designed to provide strong foundations, conceptual clarity, and exam readiness for every class.
        </p>

        <div className="space-y-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border-l-4 border-green-700 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:bg-gradient-to-r hover:from-white hover:to-green-50 p-10"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900 relative">
                  {course.title}
                  <span className="absolute -bottom-1 left-0 w-12 h-1 bg-green-700 rounded"></span>
                </h2>
                <span className="text-2xl font-semibold text-green-700">
                  ₹{course.price}
                </span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {course.description}
              </p>

              <div className="flex gap-5">
                <button className="flex-1 bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition text-lg font-medium shadow">
                  Enroll
                </button>
                <button
                  onClick={() => navigate(`/class/${course.id + 7}`)}
                  className="flex-1 border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition text-lg font-medium"
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
