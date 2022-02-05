/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { data } from './data';
import { displacementSlider } from './animations'
import imagesLoaded from 'imagesloaded';
import styles from './Hero.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Hero = () => {
  // First Element
  const [ slideId, setSlideId ] = useState(0);
  const { title, prehead, button, id, path } = data[0];

  useEffect(() => {
    const imgs = document.querySelectorAll('img')
  
    imagesLoaded( imgs, () => {
      document.body.classList.remove('loading');
      const el = document.getElementById('slider');
      const imgs = Array.from(el.querySelectorAll('img'));
      new displacementSlider({
        parent: el,
        images: imgs
      });
    });
  }, [])

  return (
    <section className={styles.hero}>
      {/* <Container> */}
        <div className={styles.slider} id="slider">
          <div className={styles.slide}>
            <div className={styles.slideContent} id='slide-content'>
              <span className={styles.prehead} id='slide-prehead'>{prehead}</span>
              <div className={`${styles.title} title title--l`} id="slide-title">{title}</div>

              <Link
                key={id}
                href={data[slideId].path}
              >
                <a className={`${styles.button} button--${id}`} id='slide-link'>
                  <p id='slide-button' data-slide-id={id}>{button}</p>
                  <FontAwesomeIcon className={styles.icon} icon={faCaretRight} />
                </a>
              </Link>
            </div>
          </div>
          
          {data.map(({ id, title, image }) => {
            return (
              <img 
                key={id} 
                src={image} 
                alt={title} 
              />
            );
          })}

        </div>
        
        <div className={styles.pagination} id="pagination">
          {data.map(({ id }) => {
            return (
              <button 
                key={id} 
                data-slide={id}
                className={id === 0 ? 'active' : ''}
                onClick={() => setSlideId(id)}
              >  
              </button>
            )
          })}
        </div>
      {/* </Container> */}
    </section>
  )
}

export default Hero;
