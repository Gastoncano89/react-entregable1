import './App.css'
import dbQuotes from './db/theme1/quotes.json'
import { getRandomElement } from './utils/random.js'
//import { getRandom } from './utils/random.js'
import { useState } from "react"
import QuoteBox from './Components/QuoteBox/QuoteBox.jsx'

const bgImages = ["bg1", "bg2", "bg3", "bg4"]
function App() {

  const [quote, setQuote] = useState(getRandomElement(dbQuotes))
  const [bgImage, setbgImage] = useState(getRandomElement(bgImages))

  const handleChangeQuote = () => {
    setQuote(getRandomElement(dbQuotes))
  }

  const changeBkImage = () => {
    setbgImage(getRandomElement(bgImages)) 
  }

  return (
    <>
      <main className={`app ${bgImage}`}>
        <section className='app__container'>
          <h1 className='titulo'>INFOGALAX</h1>
          <QuoteBox phrase={quote.phrase} changeQuoteBox={handleChangeQuote} changeBkImage={changeBkImage}/>

          <footer className='pieDePagina'> <h3>Author: {quote.author}</h3></footer>
        </section>
      </main> 

    </>
  )
}

export default App
