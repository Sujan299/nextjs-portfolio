import './styles/home.scss'
import Image from 'next/image'
import sujanPic from '../../public/assets/images/sujan.jpg'
export default function Home() {
  return (
    <>
      <div className="home1">
        <div className="intro">
          <div className="welcome">
            <h2>Welcome to my vlog....</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolorum accusantium, autem eaque ratione quibusdam maiores rem necessitatibus iure distinctio! Reprehenderit ad unde provident praesentium atque nulla autem maiores nesciunt!</p>
          </div>
        </div>
        <div className="my">
          <div className="myFace">
            <Image src={sujanPic} alt=''/>
          </div>
        </div>
      </div>
    </>
  )
}