import Hero from '../components/sections/Hero'
import LoveStory from '../components/sections/LoveStory'
import Gallery from '../components/sections/Gallery'
import VideoMemories from '../components/sections/VideoMemories'
import Wishes from '../components/sections/Wishes'
import EventDetails from '../components/sections/EventDetails'
import GuestBook from '../components/sections/GuestBook'
import MemoryTimeline from '../components/sections/MemoryTimeline'
import Stats from '../components/sections/Stats'

export default function Home() {
  return (
    <>
      <Hero />
      <LoveStory />
      <Gallery />
      <VideoMemories />
      <Wishes />
      <EventDetails />
      <GuestBook />
      <MemoryTimeline />
      <Stats />
    </>
  )
}
