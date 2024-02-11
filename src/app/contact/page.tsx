import '../styles/contact.scss'
export default function Contact(){
    return(
        <div className="container margin-top contact">
            <h2>contact</h2>
            <form action="">
                <label htmlFor="">Email Please:</label>
                <input type="email" />
                <label htmlFor="">Description here:</label>
                <textarea name="desc" id="" cols="30" rows="10"></textarea>
                <input type="button" value="submit" />
            </form>
        </div>
    )
}