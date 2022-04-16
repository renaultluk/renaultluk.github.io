import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Typed from 'react-typed'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  // let screenHeight = 0;

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  }

  useEffect(() => {
    // screenHeight = window.innerHeight;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Renault Luk</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      <main>
        
        <h1 className={styles.title}>
          Hi, I'm <a href="">Renault</a>.
          <p className={styles.description}>
            I'm a 
            <code className={styles.code}>
              <Typed 
                strings={[
                  'Web Developer',
                  'Product Designer',
                  'Embedded Systems Engineer',
                  'Graphic Designer',
                ]}
                typeSpeed={120}
                backSpeed={60}
                loop
              />
            </code>
            .
          </p>
        </h1>

        <div className={styles.banner} style={{ 
          transform: `translateY(-${offsetY * 1.2}px)`,
          height: `${500}px`,
          // backgroundColor: `rgba(255, 255, 255, ${offsetY / screenHeight})`,
        }}>
          <h2>About Me</h2>
          <p>Check out more about my experience and achievements.</p>
          <Button variant="primary" href="/about" style={{ width: "fit-content" }}>
            More About Me &rarr;
          </Button>
        </div>

        <div className={styles.banner} style={{
          transform: `translateY(-${offsetY * 0.5}px)`,
          height: `${500}px`,
        }}>
          <h2>Projects</h2>
          <p>Check out some of my projects.</p>
          <Button variant="primary" href="/work" style={{ width: "fit-content" }}>
            Projects &rarr;
          </Button>
        </div>
        
        {/* <Parallax pages={2}>
          <ParallaxLayer offset={0} speed={1}>
            <h1 className={styles.title}>
              Hi, I'm <a href="">Renault</a>.
              <p className={styles.description}>
                I'm a 
                <code className={styles.code}>
                  <Typed 
                    strings={[
                      'Web Developer',
                      'Product Designer',
                      'Embedded Systems Engineer',
                      'Graphic Designer',
                    ]}
                    typeSpeed={120}
                    backSpeed={60}
                    loop
                  />
                </code>
                .
              </p>
            </h1>

          </ParallaxLayer> */}
          {/* <ParallaxLayer offset={0.5} speed={2}>
            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Learn &rarr;</h2>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
                className={styles.card}
              >
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
              >
                <h2>Deploy &rarr;</h2>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </a>
            </div>
          </ParallaxLayer>
        </Parallax> */}
      </main>


      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
