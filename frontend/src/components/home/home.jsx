import React from 'react';
import Carousel from './carousel';
import Tutorship from './tutorship';
import Quote from './quote';
import LeftTutors from './leftTutors';

export default function Home() {
  return (
    <div>
      <Carousel/>
      <Tutorship
      limit={3}
      />
      <Quote/>
      <LeftTutors/>
    </div>

  );
}


