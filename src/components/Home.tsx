import React from 'react';
import '../styles/home.css'
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
    <section className='about'>
      <div className="container flex mt-12 mx-auto max-w-7xl text-wrap">
        <article className='md:ml-10 mr-20 3xl:mr-60 2xl:mr-20 xl:mr-10 lg:mr-10 xs:ml-6 '>
          <h1 className='heading py-5 mb-5'>Urządź Dzieciom Niezapomniany Dzień!</h1>
          <p className='text1'>
            Lorem ipsum dolor sit amet consectetur. Dictumst et vitae adipiscing
            nulla tortor nibh non donec. Orci quis morbi convallis egestas elit
            a rhoncus pellentesque. Mattis at diam tempor est. Suspendisse
            tempus varius nec interdum. Nulla blandit lorem convallis faucibus
            montes molestie id arcu. A nibh eget blandit risus orci. Mi quam.
          </p>
          <button className='check-castle py-5 px-7 mt-11' onClick={() => navigate('/prices')}>Sprawdź dmuchańce</button>
        </article>
        <figure className='bubbles-box ml-17 xl:mr-15 mr-10'>
          <div className='bubble small'></div>
          <div className='bubble large'></div>
          <div className='bubble large'></div>
          <div className='bubble small'></div>
        <div className='image-overlay'></div>
        </figure>
      </div>
    </section>
    <section className='how-to my-28'>
    <div className="container flex mt-12 mx-auto max-w-7xl px-4">
    <figure className='bubbles-box2 ml-20 xl:mr-15 lg:mr-10'>
          <div className='bubble bubble2 small2'></div>
          <div className='bubble bubble2 large2'></div>
          <div className='bubble bubble2 large3'></div>
          <div className='bubble bubble2 small2'></div>
        <div className='image-overlay2'></div>
        </figure>
        <article className='md:ml-10  mr-24 xl:mr-15 lg:mr-5 lg:ml-10 xs:mx-3'>
          <h1 className='heading py-5 mb-5'>Jak działamy</h1>
          <ul className='text2'>
            <li className='my-3'><span className='mr-4'>1.</span>Zarezerwuj dmuchańca, którego chcesz wypożyczyć. Możesz to zrobić telefonicznie lub przez formularz.</li>
            <li className='my-3'><span className='mr-4'>1.</span>Lorem ipsum dolor sit amet consectetur. Sed leo hendrerit justo in. Facilisi in mi nunc eu morbi feugiat.</li>
            <li className='my-3'><span className='mr-4'>1.</span>Lorem ipsum dolor sit amet consectetur. Gravida non.</li>
            <li className='mt-3 mb-8'><span className='mr-4'>1.</span>Lorem ipsum dolor sit amet consectetur. Elit sagittis scelerisque odio ornare purus. In pellentesque risus.</li>
          </ul>
          <p className='text-black text-lg font-semibold'>Chcesz wiedzieć więcej?</p>
          <button className='check-rental py-5 px-7 my-4' onClick={() => navigate('/rental')}>Sprawdź warunki wynajmu</button>
        </article>
      </div>
    </section>
    </>
  );
}

export default Home;