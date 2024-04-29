import { useNavigate } from 'react-router-dom';
import bannerImg1 from '../../assets/bannerImg1.jpg'
const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className="grid sm:grid-cols-2 min-h-[calc(100vh-0px)]   text-white relative bg-primary/70">
            <div className='p-5 flex justify-center items-center gap-5 '>
                <div className='space-y-6'>
                    <h2 className='font-bold text-4xl sm:text-5xl tracking-widest'>Welcome to Movie Flix</h2>
                    <p className='sm:text-lg font-medium'>Its a platform where you can get <br />more than 100 movies for free.</p>
                    <button onClick={()=> navigate('/movies')}  className='transition-all duration-300 bg-secondary/90 px-3 py-2.5 rounded-sm rounded-bl-3xl hover:bg-secondary active:scale-90'>Let's Explore</button>
                </div>
            </div>
            <div className="rounded-bl-[100px] md:rounded-bl-[200px] lg:rounded-bl-[300px] hidden sm:block overflow-hidden " style={{backgroundImage: `url(${bannerImg1})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition:'center'}}>
                {/* <img className='w-full h-full object-cover' src={bannerImg1} alt="" /> */}
            </div>
            <div className='absolute w-full h-full -z-10'> <img className='w-full h-full object-cover' src={bannerImg1} alt="" /></div>
        </div>
    );
};

export default Banner;