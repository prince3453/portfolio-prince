import styles from './App.module.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Experience from './component/Experience/Experience'
import { Project } from './component/Project/Project'
import Contact from './component/Contact/Contact'
import Resume from './component/Resume/Resume'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Resume/>
      <Contact/>
    </div>
  )
}

export default App
