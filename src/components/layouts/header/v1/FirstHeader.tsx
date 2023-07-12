import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function FirstHeader(props: { data: any }) {
    const [headerData, setHeaderData] = useState<any>([])
    const [nav, setNav] =useState(false)
    const [color,setColor]=useState('transparent')
    const [textColor,setTextColor]=useState('white')

    const handleNav=()=>{
        setNav(!nav)
    }

    useEffect(()=> {
        const changeColor=()=>{
            
            if(window.scrollY >= 90){
                setColor('white');
                setTextColor('black');
            }else{
                setColor('transparent');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll',changeColor);

    }, []);


    const classic = {
        section: "text-gray-600 body-font",
        backgroundColor: "bg-orange-200",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-gray-600 text-lg mb-6",
        imageWrapper: "hidden",
        bodyWrapper: "sm:w-1/2 sm:pl-16",
        aboutImage: "https://stackoverflow.co/img/product/teams/teams-integrations-spot.svg",
        aboutImageWrapper: "w-80 h-80  object-cover",
    };
    const modern = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
        imageWrapper: "absolute top-[-550px] z-0    left-[50%] h-[1500px] translate-x-[-50%]",
        bodyWrapper: "sm:w-1/2 z-[9] sm:pl-16",
        aboutImage: "	https://stackoverflow.co/img/product/home/bg-header-mobile.png",
        aboutImageWrapper: "w-80 z-50 h-80 rounded-full object-cover",

    };
    const plain = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const stack_left = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const stack_center = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const stack_right = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const fixed = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const transparent = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };
    const split = {
        section: "text-gray-600 body-font  relative overflow-hidden",
        backgroundColor: "bg-gray-900",
        title: "text-3xl font-extrabold text-white sm:text-4xl mb-6",
        subTitle: "text-white text-lg mb-6",
    };


    const [headerTheme, setHeaderTheme] = useState<string>("")

    const styles = {
        Theme1: classic,
        Theme2: modern,
        Theme3: plain,
    }[headerTheme] || classic;

    useEffect(() => {
        setHeaderData(props.data);
        setHeaderTheme(props.data.theme || "Theme1")
    }, [props.data])

    return (
        <>
      
        <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
    <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        < Link to='/'>
        <h1 style={{color:`${textColor}`}} className='font-bold text-2xl lg:text-3xl '>{headerData.title??"Site Name"}</h1>
        </Link>
        <ul style={{color:`${textColor}`}} className='hidden sm:flex'>
            <li className='p-4'>
                < Link to='/'>Home</Link>
            </li>
            <li className='p-4'>
                < Link to='/#gallery'>Gallery</Link>
            </li>
            <li className='p-4'>
                < Link to='/work'>Work</Link>
            </li>
            <li className='p-4'>
                < Link to='/contact'>Contact</Link>
            </li>
        </ul>

        {/* Mobile Button*/}
        <div onClick={handleNav} className='block sm:hidden z-10'>
            {nav ? <svg stroke="currentColor" style={{color:`${textColor}`}} fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg> :<svg  style={{color:`${textColor}`}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg> }
        </div>
        {/* Mobile Menu */}
        <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300':'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
        <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                < Link to='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                < Link to='/#gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                < Link to='/work'>Work</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                < Link to='/contact'>Contact</Link>
            </li>
        </ul>
        </div>
    </div>
    </div>

        </>
    )
}