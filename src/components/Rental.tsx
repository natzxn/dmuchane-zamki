import React from 'react';
import '../styles/rental.css'

const Rental: React.FC = () => {
  return (
    <section className='rental mt-12 lg:mx-14 xs:mx-8 max-w-7xl'>
      <h1 className='heading-rental mb-8'>Warunki Wynajmu</h1>
      <div className='description my-7'>
        <h4 className='description-title mb-3'>Teren</h4>
        <ul className='conditions'>
          <li className='my-2'><span className='number mr-3'>1.</span>Mi sit eu ut vel massa suspendisse nisi adipiscing.</li>
          <li className='my-2'><span className='number mr-3'>2.</span>Pellentesque congue commodo enim nunc sed fermentum ultrices. Mi sit eu ut vel massa suspendisse nisi adipiscing.</li>
          <li className='my-2'><span className='number mr-3'>3.</span>Purus fermentum lectus vitae volutpat enim. Mauris non turpis id ornare auctor praesent eget sit et.</li>
          <li className='my-2'><span className='number mr-3'>4.</span>Sed integer nunc fusce velit enim. Faucibus vestibulum massa vitae augue nibh et egestas tempus quam. Nibh at risus consequat praesent eget. </li>
        </ul>
      </div>
      <div className='description my-7'>
        <h4 className='description-title mb-3'>Prąd</h4>
        <p>Faucibus vestibulum massa vitae augue nibh et egestas tempus quam. Nibh at risus consequat praesent eget.</p>
      </div>
      <div className='description my-7'>
        <h4 className='description-title mb-3'>Warunki Atmosferyczne</h4>
        <p>Lorem ipsum dolor sit amet consectetur. Mattis congue ut neque duis erat nulla gravida. Sed integer nunc fusce velit enim. Faucibus vestibulum massa vitae augue nibh et egestas tempus quam. </p>
      </div>
      <div className='description mb-24'>
        <h4 className='description-title mb-3'>Pozostałe</h4>
        <ul className='conditions'>
          <li className='my-2'><span className='number mr-3'>1.</span>Mi sit eu ut vel massa suspendisse nisi adipiscing.</li>
          <li className='my-2'><span className='number mr-3'>2.</span>Pellentesque congue commodo enim nunc sed fermentum ultrices. Mi sit eu ut vel massa suspendisse nisi adipiscing.</li>
          <li className='my-2'><span className='number mr-3'>3.</span>Sed integer nunc fusce velit enim. Faucibus vestibulum massa vitae augue nibh et egestas tempus quam. Nibh at risus consequat praesent eget. </li>
          <li className='my-2'><span className='number mr-3'>4.</span>Purus fermentum lectus vitae volutpat enim. </li>
        </ul>
      </div>
    </section> 
  );
}

export default Rental;