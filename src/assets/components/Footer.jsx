import faceIcon from '../../../public/imagens/faceicon_w.png'
import instaIcon from '../../../public/imagens/instaicon_w.png'
import whatsIcon from '../../../public/imagens/whatsicon_w.png'
import imgLogo from '../../../public/imagens/logo.ico'

function Footer() {
    const sizeIcon = 20;
    const sizeLogo = 120;

    return (
        <footer className="w-full h-full bg-slate-900 py-15">
            <div className='flex justify-between xl:px-50  max-lg:flex max-lg:flex-col max-lg:h-full'>
                <div className='flex flex-col items-center max-lg:text-center'>
                <img src={imgLogo} alt="" width={sizeLogo} height={sizeLogo} />
                <h1 className='text-3xl font-semibold text-slate-200'>ObrAtiva</h1>
            </div>

            <div className='w-[500px] space-y-6 max-lg:w-full max-lg:my-5'>
                <h1 className='text-2xl text-slate-200 font-semibold text-center'>Informações</h1>
                <p className='text-slate-200 text-2sm font-regular text-center max-md:mx-5'>Descubra as últimas tendências do mercado, artigos exclusivos, livros e recomendações de materiais essenciais para a sua carreira em engenharia. <br /><br />Capacitando a próxima geração de engenheiros civis com tecnologia e conhecimento.</p>
            </div>

            <div>

                <ul className='space-y-2 appearance-none max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center'>
                    <li className='text-slate-200 font-semibold text-2xl mb-5'>Redes Sociais</li>

                    <li className='flex space-x-2 items-center'>
                        <span><img src={instaIcon} alt="" width={sizeIcon} height={sizeIcon} /></span>
                        <a href="https://www.instagram.com/fundamentosdaengenharia/#" target='_blank'
                        className='text-slate-200 text-3sm font-regular group hover:scale-102 hover:text-amber-400 duration-200 hover:font-semibold'>Instagram</a>
                    </li>
                    <li className='flex space-x-2 items-center'>
                        <span><img src={faceIcon} alt="" width={sizeIcon} height={sizeIcon} /></span>
                        <a href="https://www.facebook.com/people/Fundamentos-DA-Engenharia/61566749627158/" target='_blank'
                        className='text-slate-200 text-3sm font-regular group hover:scale-102 hover:text-amber-400 duration-200 hover:font-semibold'>facebook</a>
                    </li>
                    <li className='flex space-x-2 items-center'>
                        <span><img src={whatsIcon} alt="" width={sizeIcon} height={sizeIcon} /></span>
                        <a href="https://wa.me/64996558063?text=Oi%2C%20tudo%20bem%3F%20Encontrei%20seu%20site%20e%20estou%20interessado(a)%20em%20mais%20informa%C3%A7%C3%B5es.%20Voc%C3%AA%20pode%20me%20ajudar%3F" target='_blank' 
                        className='text-slate-200 text-3sm font-regular group hover:scale-102 hover:text-amber-400 duration-200 hover:font-semibold'>Whatsapp</a>
                    </li>
                    <li></li>
                </ul>
            </div>
            </div>
            <div className='max-lg:hidden w-full h-[1px] bg-slate-800 shadow-2xl shadow-slate-800/20 my-8'></div>
            <div className='max-lg:pt-5 text-center flex items-center justify-center'>
                <p className='text-slate-200 opacity-60'>&copy; {new Date().getFullYear()} ObrAtiva</p>
                <p className='text-slate-200 opacity-60'>Todos os direitos reservados.</p>
            </div>
        </footer>
    )
} export default Footer