import React from 'react';
import { useParams } from 'react-router-dom';

const ClassDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Class Detail</h1>
        <p className="text-lg text-gray-700 mb-8">
          Details for class ID: {id}
        </p>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Class Information</h2>
          <p>This is a placeholder for the class detail page. More content will be added here.</p>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
