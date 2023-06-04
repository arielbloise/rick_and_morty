import style from './About.module.css'
import logoAbout from './logoAbout.png'

const About = () =>{
    return(
        <div className={style.About}>
            <h1>RICK AND MORTY APP</h1>
            <h2>CREADA POR ARIEL BLOISE</h2>
            <h2>COHORTE FT 38a</h2>
            <img src={logoAbout} alt="" />
        </div>
    )
};

export default About;