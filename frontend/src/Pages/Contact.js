import "./../styles/Contact.scss"

const Contact = ()=>{
    return <section className="contactus-container">
        <div className="contactus-img">
            <div className="contactus-content-img">
                <p>Campus Universitaire 2092 <br /> El Manar Tunis</p>
                <p><span>Téléphone : </span>71 872 600</p>
                <p><span>Fax : </span>71 871 666</p>
                <p><span>Webmaster : </span><a href="mailto:">webmaster</a></p>
            </div>
        </div>
        <div className="contactus-form">
            <h1>Contact Us</h1>
            <form action="POST">
                <div className="contactus-form-field">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="nom" id="nom" required />
                </div>
                <div className="contactus-form-field">
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" name="prenom" id="prenom" required />
                </div>
                <div className="contactus-form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="contactus-form-field">
                    <label htmlFor="tel">Telephone</label>
                    <input type="tel" name="tel" id="tel" />
                </div>
                <div className="contactus-form-field">
                    <label htmlFor="fonction">Fonction</label>
                    <select name="fonction" id="fonction">
                        <option value="Etudiant">Etudiant</option>
                        <option value="Stagiere">Stagiere</option>
                        <option value="Enseignant">Enseignant</option>
                        <option value="Fonctionnaire">Fonctionnaire</option>
                        <option value="Societe">Societe</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>
                <div className="contactus-form-field">
                    <label htmlFor="sujet">Sujet</label>
                    <input type="text" name="sujet" id="sujet" />
                </div>
                <div className="contactus-form-field contactus-form-field-content">
                    <label htmlFor="text">Message</label>
                    <textarea name="text" id="text" cols="100" rows="15" placeholder="Ecrire Votre Message Ici"></textarea>
                </div>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    </section>
}

export default Contact