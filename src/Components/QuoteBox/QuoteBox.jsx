import './QuoteBox.css'

const QuoteBox = ({phrase,changeQuoteBox,changeBkImage}) => {
    return (
    <>
    <section className="quoteBox">
        <article className="quoteBox__phrase">
            <p>{phrase}</p>
        </article>
        <button className="quoteBox__btn" onClick={()=>{changeQuoteBox();changeBkImage() } } >Random</button>
    </section>
    </>
    )
}
export default QuoteBox