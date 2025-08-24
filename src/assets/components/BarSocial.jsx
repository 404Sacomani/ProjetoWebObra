import faceIcon from '../../../public/imagens/faceicon_y.png'
import instaIcon from '../../../public/imagens/instaicon_y.png'
import whattsIcon from '../../../public/imagens/whattsicon_y.png'

function BarSocial() {
    const sizeIcon = 20;

    return (
        <div className='w-full h-10 bg-slate-900 flex items-center justify-center shadow-md shadow-slate-700/20'>
            <div className='flex space-x-15 items-center justify-center p-2'>
                <a href="https://www.instagram.com/fundamentosdaengenharia/#" target="_blank"
                    className='group hover:scale-120 duration-500' >

                    <img src={instaIcon} alt="" width={sizeIcon} height={sizeIcon} />
                </a>
                <a href="https://www.facebook.com/people/Fundamentos-DA-Engenharia/61566749627158/" target="_blank"
                    className='group hover:scale-120 duration-500'>

                    <img src={faceIcon} alt="" width={sizeIcon} height={sizeIcon} />
                </a>
                <a href="https://wa.me/64996558063?text=Oi%2C%20tudo%20bem%3F%20Encontrei%20seu%20site%20e%20estou%20interessado(a)%20em%20mais%20informa%C3%A7%C3%B5es.%20Voc%C3%AA%20pode%20me%20ajudar%3F" target="_blank"
                    className='group hover:scale-120 duration-500'>

                    <img src={whattsIcon} alt="" width={sizeIcon} height={sizeIcon} />
                </a>
            </div>
        </div>
    )
}

export default BarSocial  