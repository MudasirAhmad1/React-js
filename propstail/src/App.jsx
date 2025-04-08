import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
import Navbar from './component/navbar'
import Footer from './component/Footer'
import Des from './component/Des'
import Project from './component/Project'
import Metric from './component/Metric'
import About from './component/About'
import Card2 from './component/Card2'
import Contact from './component/Contact'
import Company from './component/Company'
import Top from './component/Top'

function App() {
  const cards = [
    {
      title: "Aloe Vera",
      description: "Natural healing and skin care plant.",
      imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672",
      badgeText: "Save 10%",
    },
    {
      title: "Lavender",
      description: "Soothing aroma for stress relief.",
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      badgeText: "Hot Deal",
    },
    {
      title: "Mint Leaves",
      description: "Freshens breath and aids digestion.",
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      badgeText: "New",
    },
    {
      title: "Rosemary",
      description: "Perfect for seasoning and aroma.",
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      badgeText: "20% Off",
    },
  ];

  return (
    <>
    <Navbar/>
    <Des/>
    <Metric/>
    <About/>
    <Card2/>
    <Contact/>
    <Company/>
    <Top/>
    <div className="container mx-auto px-0 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {cards.map((card, idx) => (
          <Project key={idx} {...card} />
        ))}
      </div>
    </div>
    
    
    <br />
    <br />
    <br />
    <br />
    <br />
    <br /><br />
    <br />
    <br /><br />
    <br />
    <br /><br />
    <br />
    <br />

    <br />
    <br />
    <br /><br />
    <br />
    <br /><br />
    <br />
    <br /><br />
    <br />
    <br />
    <Card username="mudasir" btn="Vist Me"/>
    <Card username="mudasir" btn="CLick Me"/>
    <Footer/>
    </>
  )
}

export default App
