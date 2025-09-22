import React from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Class 8",
      price: "1,500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Class 9",
      price: "1,500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Class 10",
      price: "1,500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Class 11",
      price: "1,500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      title: "Class 12",
      price: "1,500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6 font-sans" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Courses</h1>
        </div>

        <div className="space-y-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-300 rounded-lg p-8"
              style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-semibold text-gray-900">
                  {course.title}
                </h2>
                <span className="text-2xl font-bold text-gray-900">
                  ₹{course.price}
                </span>
              </div>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {course.description}
              </p>

              <div className="flex gap-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded font-medium hover:bg-green-700 transition">
                  Enroll
                </button>
                <button
                  onClick={() => navigate(`/class/${course.id + 7}`)}
                  className="border-2 border-gray-400 text-gray-700 px-8 py-3 rounded font-medium hover:bg-gray-50 transition"
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
}
export default Courses;
