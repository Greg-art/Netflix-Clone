import { BlackLinearDown, BlackLinearLeft, Component, Overview, Buttons } from './styles'
import { BsPlayFill } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import { IconContext } from "react-icons";

interface CoverImageProps{
  link: String;
}

export function CoverImage( { link }: CoverImageProps){
  return(
    <>
    <Component>
      <img src={'https://image.tmdb.org/t/p/w1280/' + link} alt="cover image"/>

      <BlackLinearDown />
      <BlackLinearLeft />

      <Overview>
        <h1>
          Um sonho <br /> de liberdade
        </h1>
        <h3>Assista o filme agora</h3>
        <p>Andy Dufresne é condenado a duas prisões perpétuas consecutivas pelas mortes de sua esposa e de seu amante.</p>
        
        <br />        

          <Buttons >
            <button>
              <IconContext.Provider value={{ color: "black", className: "icones icon-play" }}>
                <BsPlayFill  /> 
              </IconContext.Provider>
              <span>Assistir</span>
            </button>
            <button>
              <IconContext.Provider value={{ color: "white", className: "icones" }}>
                <FiInfo /> 
              </IconContext.Provider>              
              <span>Mais informações</span>
            </button>
          </Buttons>
      </Overview>

    </Component>
    </>
  )
}