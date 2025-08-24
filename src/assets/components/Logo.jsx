import logoImage from '../../../public/imagens/logo.ico'

function Logo (props) {
    return (
        <img src={logoImage} alt="Logo site" width={props.imgW} height={props.imgH -10}/>
    )
}

export default Logo