import styles from './App.module.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
