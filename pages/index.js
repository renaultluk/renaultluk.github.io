import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Col } from 'react-bootstrap'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import Typed from 'react-typed'
import Header from "../components/Header"

import styles from '../styles/Home.module.css'
import Divider from '../components/Divider'
import WordCloud from '../components/WordCloud'

const HeadBanner = () => {
  const background = {
    image: '/starry-background-1.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className={styles.banner} style={{ 
        // transform: `translateY(-${offsetY * 1.2}px)`,
        height: `${500}px`,
        // backgroundColor: `rgba(0, 0, 0, ${offsetY / 500})`,
        // backgroundColor: `rgba(255, 255, 255, ${offsetY / screenHeight})`,
      }}>
        <h1 className={styles.title}>
          Hi, I&apos;m <Link href="/contact" style={{ color: "#E6BCCD" }}>Renault</Link>.
          <p className={styles.description}>
            I&apos;m a 
            <code className={styles.code}>
              <Typed 
                strings={[
                  'Software Developer',
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
      </div>
    ),
  };

  const gradientOverlay = {
    opacity: [0, 1],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-purple-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, gradientOverlay]}
      // className="aspect-[2/1] bg-gray-900"
      // style={{
      //   height: 500,
      //   width: "100%"
      // }}
      className={styles.headBanner}
    />
  );
}

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
    <>
      <Head>
        <title>Renault Luk</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <HeadBanner /> */}
      <Header />
      <div className={styles.container}>
        {/* <main className={styles.main}> */}
          <div className={styles.banner} style={{ 
            // transform: `translateY(-${offsetY * 1.2}px)`,
            height: `${500}px`,
            width: "100%",
            // backgroundColor: `rgba(0, 0, 0, ${offsetY / 500})`,
            // backgroundColor: `rgba(255, 255, 255, ${offsetY / screenHeight})`,
          }}>
            <h1 className={styles.title}>
              Hi, I&apos;m <a href="" style={{ color: "#E6BCCD" }}>Renault</a>.
              <p className={styles.description}>
                I&apos;m a 
                <code className={styles.code}>
                  <Typed 
                    strings={[
                      'Software Developer',
                      'Product Designer',
                      'Embedded Systems Engineer',
                      'UI/UX Designer',
                    ]}
                    typeSpeed={120}
                    backSpeed={60}
                    loop
                  />
                </code>
                .
              </p>
            </h1>
          </div>
        <main style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          
          
            <div 
              className="d-flex flex-column flex-sm-row-reverse align-items-center justify-content-between"
              style={{
                marginTop: 20, 
                marginBottom: 20, 
                width: "80%",
              }}
            >

              <div style={{ 
                position: "relative", 
                // left: "50%",
              }}>
                <Parallax
                  rotate={[0,360]}
                  // startScroll={200}
                  endScroll={1000}
                  style={{ 
                    width: 200,
                    height: 200,
                    borderRadius: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                  }}
                >
                    <img
                      src="/profile_ring.svg" 
                      style={{ flex: 1, width: 200, height: 200 }}
                    />
                </Parallax>
                <img 
                      src="/Profile.JPG" 
                      width={150}
                      height={150}
                      style={{
                        borderRadius: 150,
                        objectFit: "cover",
                        position: "absolute",
                        top: 25,
                        left: 25,
                      }} 
                    />
                </div>
              {/* <Parallax
                  rotateX={[-90, 0, 'easeOutExpo']}
                  startScroll={200}
                  endScroll={700}
              > */}
                  <Col style={{ 
                    padding: 16, 
                    // width: "50%" 
                  }}
                    xs={12} sm={8}
                  >
                      <h4>About Me</h4>
                      <span>Hi! My name is Renault, and I am a Software Developer based in Hong Kong, armed with Embedded Systems Engineering, UI/UX Design, and Product Design skills. I’m a problem solver, a team player, and a curious and inquisitive learner.</span>
                      <style type="text/css">
                        {`
                          .btn-general {
                            background-color: #E6BCCD;
                          }
                        `}
                      </style>
                      <div
                        style={{
                          display: "block",
                          marginTop: 12,
                        }}
                      >
                        <Button 
                          href='https://drive.google.com/file/d/1-VTbR6kOMWL13r5r6UkDuTwz-9mUZs1S/view?usp=sharing'
                          target="_blank"
                          variant='general'
                          className='d-block d-sm-inline'
                        >
                          See My Resume &rarr;
                        </Button>
                      </div>
                  </Col>
              {/* </Parallax> */}
            </div>

          <div 
            className="d-flex flex-column flex-sm-row align-items-center justify-content-between" 
              style={{ 
                marginTop: 20, 
                marginBottom: 20, 
                width: "80%",
              }}
            >
            <WordCloud 
              wordList={[
                "React.js",
                "Next.js",
                "React Native",
                "CSS",
                "Bootstrap",
                "Electron",
                "Firebase",
                "Python",
                "Pandas",
                "Tensorflow",
                "C++",
                "Java",
                "Kotlin",
                "XML",
                "REST",
                "Github",
              ]}
            />

            {/* <Parallax
                rotateX={[-90, 0, 'easeOutExpo']}
                startScroll={500}
                endScroll={1000}
            > */}
                <Col style={{ padding: 16 }} xs={12} sm={8}>
                    <h4>Software Development</h4>
                    <span>An aspiring full stack developer at heart, my focus is on creating frontends on websites, desktop and mobile applications. I also have experience with devising backend logic and database management, as well as using machine learning models for data analysis.</span>
                </Col>
            {/* </Parallax> */}
          </div>

          <div 
            className="d-flex flex-column flex-sm-row-reverse align-items-center justify-content-between"
            style={{
              width: "80%",
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >

          <div
            style={{
              position: "relative",
              overflow: "hidden",
              height: 220,
            }}
          >
              <Parallax
                translateY={[200, 0]}
                startScroll={0}
                endScroll={700}
              >
                <div
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 8,
                    borderColor: "#BBBBBD",
                    borderWidth: 1,
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                />
              </Parallax>
              <Parallax
                scale={[2, 1]}
                opacity={[0.2, 1]}
                startScroll={0}
                endScroll={700}
              >
                <div 
                  style={{
                    width: 75,
                    height: 100,
                    borderRadius: 8,
                    borderColor: "#BBBBBD",
                    borderWidth: 1,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    position: "absolute",
                    top: -180,
                    left: 20,
                  }}
                />
              </Parallax>
              <Parallax
                translateY={[0, 100]}
                opacity={[0.2, 1]}
                startScroll={0}
                endScroll={700}
              >
                <div 
                  style={{
                    width: 75,
                    height: 50,
                    borderRadius: 8,
                    borderColor: "#BBBBBD",
                    borderWidth: 1,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    position: "absolute",
                    top: -180,
                    right: 20,
                  }}
                />
              </Parallax>
              <Parallax
                scale={[1.5, 1]}
                opacity={[0.2, 1]}
                startScroll={0}
                endScroll={700}
              >
                <div 
                  style={{
                    width: 75,
                    height: 100,
                    borderRadius: 8,
                    borderColor: "#BBBBBD",
                    borderWidth: 1,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    position: "absolute",
                    top: -120,
                    right: 20,
                  }}
                />
              </Parallax>
              <Parallax
                translateX={[-100, 0]}
                opacity={[0.2, 1]}
                startScroll={0}
                endScroll={700}
              >
                <div 
                  style={{
                    width: 75,
                    height: 50,
                    borderRadius: 8,
                    borderColor: "#BBBBBD",
                    borderWidth: 1,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    position: "absolute",
                    top: -70,
                    left: 20,
                  }}
                />
              </Parallax>
          </div>
          <Col style={{ padding: 16 }} xs={12} sm={8}>
            {/* <Parallax
                  rotateX={[-90, 0, 'easeOutExpo']}
                  startScroll={500}
                  endScroll={1000}
              > */}
                      <h4>UI/UX Design</h4>
                      <span>Using interaction design principles, I create designs that minimise interaction cost, and account for product’s context of usage for the best user experience.</span>
              {/* </Parallax> */}
          </Col>
          </div>

          <div 
            className="d-none d-sm-flex flex-row align-items-center justify-content-center"
            style={{
              backgroundImage: "linear-gradient(to left, #29274C 40%, rgba(0,0,0,0)), url(/pcb.png)",
              backgroundPosition: "right",
              height: 220,
              width: "100%",
            }}
          >
            <div style={{ 
              display: "flex",
              width: "80%", 
              justifyContent: "flex-end",
            }}>
              {/* <Parallax
                  rotateX={[-90, 0, 'easeOutExpo']}
                  startScroll={500}
                  endScroll={1000}
              > */}
                  <Col style={{ padding: 16 }} xs={12} sm={8}>
                        <h4>Embedded Systems Engineering</h4>
                        <span>From sourcing components, to designing circuits and PCBs, and developing embedded software, I am interested in creating embedded devices and IoT systems.</span>
                  </Col>
              {/* </Parallax> */}
            </div>
          </div>

          <div 
            className="d-flex d-sm-none flex-column align-items-center justify-content-end"
            style={{
              backgroundImage: "linear-gradient(to top, #29274C 40%, rgba(0,0,0,0)), url(/pcb.png)",
              backgroundPosition: "center",
              // height: 220,
              paddingTop: 220,
              paddingBottom: 20,
            }}
          >
              <div style={{ 
                display: "flex",
                width: "80%", 
                justifyContent: "flex-end",
              }}>
              {/* <Parallax
                  rotateX={[-90, 0, 'easeOutExpo']}
                  startScroll={500}
                  endScroll={1000}
              > */}
                <Col style={{ padding: 16 }} xs={12} sm={8}>
                    <h4>Embedded Systems Engineering</h4>
                    <span>From sourcing components, to designing circuits and PCBs, and developing embedded software, I am interested in creating embedded devices and IoT systems.</span>
                </Col>
            {/* </Parallax> */}
              </div>
          </div>

          <div 
            className="d-none d-sm-flex flex-row align-items-center justify-content-center"
            style={{
              backgroundImage: "linear-gradient(to right, #29274C 40%, rgba(0,0,0,0)), url(/sketches.jpeg)",
              backgroundPosition: "bottom",
              // backgroundSize: "contain",
              height: 220,
              width: "100%",
            }}
          >
            <div style={{
                width: "80%", 
              }}>
            {/* <Parallax
                rotateX={[-90, 0, 'easeOutExpo']}
                startScroll={500}
                endScroll={1000}
            > */}
                <Col style={{ padding: 16 }} xs={12} sm={8}>
                    <h4>Product Design</h4>
                    <span>Armed with design thinking skills, I enjoy identifying existing problems and user needs, creating concept sketches, and bringing the product into fruition with the aid of CAD, as well as my technical knowledge with software, hardware and design principles.</span>
                </Col>
            {/* </Parallax> */}
              </div>
          </div>
          <div 
            className="d-flex d-sm-none align-items-center justify-content-center"
            style={{
              backgroundImage: "linear-gradient(to top, #29274C 40%, rgba(0,0,0,0)), url(/sketches.jpeg)",
              backgroundSize: "contain",
              paddingTop: 220,
              paddingBottom: 20,
            }}
          >
            <div style={{
                width: "80%", 
            }}>
            {/* <Parallax
                rotateX={[-90, 0, 'easeOutExpo']}
                startScroll={500}
                endScroll={1000}
            > */}
                <Col style={{ padding: 16 }} xs={12} sm={8}>
                    <h4>Product Design</h4>
                    <span>Armed with design thinking skills, I enjoy identifying existing problems and user needs, creating concept sketches, and bringing the product into fruition with the aid of CAD, as well as my technical knowledge with software, hardware and design principles.</span>
                </Col>
            {/* </Parallax> */}
            </div>
          </div>

          <div
            style={{
              height: 220,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4 style={{ textAlign: "center" }}>Want to know more?</h4>
            <h1 style={{ textAlign: "center" }}><a href="work" style={{ color: "#E6BCCD" }}> See my work</a>!</h1>
          </div>


          {/* <div style={{ height: 1000 }} /> */}
        </main>
      </div>
    </>
  )
}
