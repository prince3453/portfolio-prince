import styles from './App.module.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Experience from './component/Experience/Experience'
import { Project } from './component/Project/Project'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
    </div>
  )
}

export default App
