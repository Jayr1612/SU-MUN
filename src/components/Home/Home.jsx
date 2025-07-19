import React from 'react'
import './Home.css'

// Reusable Wave component
const Wave = ({ d, fill, className }) => (
  <svg
    className={`absolute bottom-0 left-0 w-full h-auto ${className}`}
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path d={d} fill={fill} />
  </svg>
);

function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#f8f9fa] overflow-hidden">
      {/* Top Waves */}
      <div className="absolute top-0 left-0 w-full">
        <div className="bg-[#05325b] h-40 md:h-56 lg:h-64"></div>
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMax meet"
        >
          <path
            fill="#0099AD"
            d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-[75vh]">
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-title">
              <span className="home-line">Voices that</span>
              <span className="home-line-second">Leads</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Waves */}
      <div className="absolute bottom-0 left-0 w-full h-40 md:h-56 lg:h-64">
        <Wave
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,121L0,121Z"
          fill="#D94A4A"
          className="z-0"
        />
        <Wave
          d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,128C672,139,768,117,864,101.3C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,121L0,121Z"
          fill="#F2C53D"
          className="z-10"
        />
        <Wave
          d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,106.7C672,117,768,107,864,85.3C960,64,1056,32,1152,32C1248,32,1344,64,1392,80L1440,96L1440,121L0,121Z"
          fill="#3C9A54"
          className="z-20"
        />
      </div>
    </div>
  )
}

export default Home