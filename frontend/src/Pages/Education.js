import "./../styles/Education.scss"
import {Link} from "react-router-dom"
const Formation =() =>{
    const fieldsdata  = [
    {
        nom :"Biologie",
        etudes : [
        {
            type : "Mastere",
            filiere : [
                {nom : "Biologie Moléculaire et Cellulaire et Biotechnologie ",lien : ""},
                {nom : "Biologie des Organismes, des Populations et Environnement ( BOPE ): 2 parcours",lien : "http://www.fst.rnu.tn/documents/Master/master2019-2020/master-bopes-parcours-physiologie-cellulaire-et-productivite-vegetale.pdf"},
                {nom : "Physiologie Cellulaire et Productivité Végétale",lien : ""},
                {nom : "Ecologie Evolutive et Fonctionnelle",lien : ""},
                {nom : "Biochimie et Microbiologie",lien : "http://www.fst.rnu.tn/documents/Master/master2019-2020/mr-biochimie-microbiologie-fst-2019.pdf"},
                {nom : "Génétique Immunologie et Applications Innovantes",lien : "http://www.fst.rnu.tn/documents/Master/master2019-2020/maqyette-giai-juillet-2019.jpeg"},
            ] 
        },
        {
            type : "License",
            filiere : [
                {nom : "Licence en Sciences de la Vie LSV",lien : "http://www.fst.rnu.tn/documents/licences1920/lsv1-2019-2020.pdf"},
                {nom : "Licence en Sciences de la Vie et de l'Environnement LSVE",lien:"http://www.fst.rnu.tn/documents/licences1920/lsve1-2019-2020.pdf"}
            ]
        }
        
        ]
    }
    
    ]
    return <section className="speciality-container">
        <div className="speciality-inner-container">
            <nav>
                <ul>
                    <li className="selected-item">Biologie</li>
                    <li>Chimie</li>
                    <li>Geologie</li>
                    <li>Biologie</li>
                    <li>Informatique</li>
                    <li>Mathmathique</li>
                    <li>Physique</li>
                </ul>            
            </nav>
            <EducationField  data={fieldsdata[0]} />
        </div>
    </section>
}

const EducationField = ({data})=>{
    return <div className=" speciality-content">
        <h1>{data.nom}</h1>
        <div className="speciality-field">
        {data.etudes.map((et,index)=>{return <>
            <div key={index} className="speciality-field-description">
                <h2>{et.type}</h2>
                <ul>
                    {et.filiere.map((f,indexf)=> <li key={100+indexf}><a href={f.lien}>{f.nom}</a> </li>)}
                    {et.filiere.map((f,indexf)=> <li key={100+indexf}><a href={f.lien}>{f.nom}</a> </li>)}
                </ul>
            </div>
            </>
        })}
        </div>
    </div>
}
export default Formation