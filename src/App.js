import React from 'react';
import { Info, Clock, Smartphone, MapPin } from 'lucide-react';

const Wireframe = ({ title, children }) => (
  <div className="bg-white p-6 w-full max-w-4xl mx-auto mb-12 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
    {children}
  </div>
);

const InfoBox = ({ title, content }) => (
  <div className="bg-gray-100 p-3 rounded-lg shadow-sm mb-4">
    <h3 className="font-bold text-sm mb-1">{title}</h3>
    <p className="text-sm">{content}</p>
  </div>
);const NYCTransitPulseWireframes = () => {
  return (
    <div className="p-8 w-full bg-gray-50">
      <h1 className="text-4xl font-bold mb-12 text-center text-blue-600">NYC Transit Pulse - Detailed Wireframes 🗽🚌</h1>

      <Wireframe title="1. Overall Installation Layout 🗺️">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
            <div className="relative w-full h-96 bg-blue-100 border-4 border-gray-600 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-blue-200 opacity-30"></div>
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gray-200 border-2 border-gray-400 rounded-lg"></div>
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gray-300 border-2 border-gray-500 rounded-lg"></div>
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 flex flex-col justify-between">
                <div className="w-full h-2 bg-red-500 rounded-full shadow-sm"></div>
                <div className="w-full h-2 bg-blue-500 rounded-full shadow-sm"></div>
                <div className="w-full h-2 bg-green-500 rounded-full shadow-sm"></div>
              </div>
              {[...Array(8)].map((_, i) => (
                <MapPin key={i} className="absolute text-yellow-500" style={{
                  top: `${25 + Math.random() * 50}%`,
                  left: `${25 + Math.random() * 50}%`
                }} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:pl-4">
            <InfoBox 
              title="NYC Map" 
              content="This 8' x 8' map provides an overview of NYC's transit system, highlighting key bus routes and stops. It's designed to be an engaging, interactive floor installation."
            />
            <InfoBox 
              title="Bus Routes" 
              content="Red lines represent Express routes 🚀, Blue lines show Local routes 🐢, and Green lines indicate Crosstown routes ↔️. This color-coding allows visitors to quickly understand the different types of bus services available."
            />
            <InfoBox 
              title="Bus Stops" 
              content="Each pin icon (📍) on the map represents a bus stop. The installation will show real-time information for these stops, including upcoming buses and their estimated arrival times."
            />
          </div>
        </div>
      </Wireframe>import logo from './logo.svg';
import './App.css';

function App() {<Wireframe title="2. LED Implementation 💡">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
            <div className="relative w-full h-64 bg-gray-800 border-4 border-gray-600 rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-8 bg-gray-700 flex justify-around items-center px-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`text-2xl ${i % 2 === 0 ? 'animate-pulse' : ''}`}>💡</div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:pl-4">
            <InfoBox 
              title="LED Brightness" 
              content="The brightness of LEDs corresponds to bus frequency. Brighter LEDs indicate more frequent service on that route, allowing users to quickly identify high-frequency corridors."
            />
            <InfoBox 
              title="Pulsing Effect" 
              content="LEDs pulse to show the current position of buses on their routes, providing a real-time visualization of transit movement. This dynamic display helps users understand the current state of the transit system at a glance."
            />
          </div>
        </div>
      </Wireframe>

      <Wireframe title="3. Interactive Features 👆">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
            <div className="relative w-full h-96 bg-blue-100 border-4 border-gray-600 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
                <Info size={32} />
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
                <Clock size={32} />
              </div>
              <div className="absolute top-4 right-4 w-32 h-16 bg-gray-200 border-2 border-gray-400 rounded flex items-center justify-center">
                <Smartphone size={24} className="mr-2" /> Display
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:pl-4">
            <InfoBox 
              title="Route Info" 
              content="Users can touch specific areas on the map to access detailed information about bus routes. This includes a list of all stops, estimated travel times between stops, and any service advisories or changes."
            />
            <InfoBox 
              title="Schedule" 
              content="Touching schedule areas allows users to view up-to-date bus schedules for their chosen routes. This feature provides real-time updates, accounting for any delays or service changes."
            />
            <InfoBox 
              title="Display Screen" 
              content="This screen displays detailed information based on user interactions with the map. It provides a clear and accessible way to view transit data, including route details, schedules, and real-time updates."
            />
          </div>
        </div>
      </Wireframe>
    </div>
  );
};

export default NYCTransitPulseWireframes;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
