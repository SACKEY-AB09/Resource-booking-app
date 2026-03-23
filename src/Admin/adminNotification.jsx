import React from 'react';


// Reusable Card Component
const NotificationCard = ({ type, title, message, time, color }) => {
  return (
    <div className="bg-[#D9D9D9] rounded-lg p-4 mb-4 flex items-start shadow-sm border border-gray-300">
      {/* Colored Circle Indicator */}
      <div 
        className="w-8 h-8 rounded-full flex-shrink-0 mr-4" 
        style={{ backgroundColor: color }}
      ></div>
      
      {/* Content Area */}
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-lg text-black">{title}</h3>
          <span className="text-blue-600 font-semibold text-sm">{time}</span>
        </div>
        <p className="text-gray-800 text-base">{message}</p>
      </div>
    </div>
  );
};

const NotificationPage = () => {
  const notifications = [
    {
      id: 1,
      title: "New booking Request",
      message: "Student Akwasi requested to book KNUST Great Hall on 21st March",
      time: "2 days ago",
      color: "#F2E900", // Yellow
    },
    {
      id: 2,
      title: "Resource Updated",
      message: "College Of Science Lab 4 details were edited on 20th March",
      time: "Yesterday",
      color: "#3F69FF", // Blue
    },
    {
      id: 3,
      title: "Booking Cancelled",
      message: "Student Akwasi cancelled booking for College Of Science Lab 2 on 20th March",
      time: "Yesterday",
      color: "#A11B1B", // Deep Red
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans">
      {/* Header */}
      <header className="bg-[#002147] text-white p-4 flex justify-between items-center px-8 shadow-md">
        <h1 className="text-xl font-semibold">Admin Notification</h1>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
          <span className="border-2 border-gray-400 rounded-full p-1 text-xs">🛡️</span>
          <span className="text-sm">Admin Panel</span>
        </div>
      </header>

      {/* Content Container */}
      <main className="max-w-4xl mx-auto mt-10 px-4">
        {notifications.map((notif) => (
          <NotificationCard key={notif.id} {...notif} />
        ))}
      </main>
    </div>
  );
};

export default NotificationPage;