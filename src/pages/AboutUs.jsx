import React from 'react';
import Comp1 from '../components/Comp1';
import Comp5 from '../components/Comp5';
// import Comp2 from '../components/Comp2';

const AboutPage = () => {
  const styles = {
    aboutPage: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'white',
    },
    aboutHeader: {
      position: 'relative',
      marginTop: '72px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: '#f0f4ed',
      padding: '40px 20px',
      overflow: 'hidden',
    },
    aboutTitle: {
      fontSize: 'clamp(24px, 5vw, 36px)',
      color: '#333',
      marginLeft: '5%',
    },
    highlight: {
      color: 'black',
      fontWeight: 'bold',
    },
    breadcrumb: {
      fontSize: '12px',
      color: '#888',
      marginTop: '10px',
      marginLeft: '5%',
    },
    aboutImage: {
      position: 'absolute',
      top: '0',
      right: '0',
      backgroundImage: 'url("/images/badam.png")',
      backgroundPosition: 'right top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '50%',
      height: '100%',
    },
    aboutContent: {
      textAlign: 'center',
      margin: '50px 0',
    },
    imageContainer: {
      display: 'inline-block',
      marginTop: '64px',
    },
    image: {
      width: '150px',
    },
    image2: {
      width: "100%",
      marginTop: '-140px',
      position: 'relative',
      zIndex: 1,
      top: '55px',
    },
    contentText: {
      fontSize: '18px',
      marginTop: '20px',
      color: '#333',
    },
    containerStyle: {
      display: 'flex',
      height: '1100px',
      width: '100%',
      marginLeft: '0px',
      marginRight: '0px',
      marginTop: '-129px',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'white',
      padding: '0px',
    },
    container_image_Style: {
      height: '11px',
      marginTop: '104px',
      marginBottom: '25px',
      marginLeft: '560px',
    },
    headerStyle: {
      color: '#505050',
      width: '700px',
      fontSize: '35px',
      marginTop: '-20px',
      marginLeft: '-123px',
      marginBottom: '0px',
    },
    headerStyle2: {
      color: '#515153',
      fontWeight: 'bold',
      fontsize: '10px',
    },
    subHeaderStyle: {
      marginLeft: '-90px',
      marginRight: '200px',
      color: '#515153',
      fontSize: '15px',
      marginBottom: '30px',
    },
    descriptionStyle: {
      color: '#7a7a7a',
      fontSize: '17px',
      marginBottom: '190px',
      marginLeft: '40px',
      maxWidth: '600px',
      position: 'relative',
      top: '-5px',
    },
    featureContainerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '10px',
      marginBottom: '40px',
      width: '100%',
      maxWidth: '1000px',
      position: 'relative',
    },
    featureBoxStyle: {
      textAlign: 'center',
      maxWidth: '220px',
      position: 'relative',
    },
    featureIconStyle: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      display: 'inline-block',
      marginBottom: '20px',
      position: 'relative',
    },
    featureTextHeaderStyle: {
      fontSize: '18px',
      color: '#505050',
      marginBottom: '10px',
    },
    featureTextStyle: {
      color: '#7a7a7a',
      fontSize: '16px',
      maxWidth: '700px',
      marginBottom: '20px',
    },
    buttonStyle: {
      backgroundColor: '#ffffff',
      border: '2px solid #f5f5f5',
      borderRadius: '20px',
      padding: '10px 20px',
      color: '#b5b5b5',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    imageContainerStyle: {
      marginTop: '40px',
    },
    imageStyle: {
      width: '750px',
      height: 'auto',
    },
    leafStyleLeft: {
      position: 'absolute',
      left: '0',
      top: '150px',
      width: '150px',
      height: 'auto',
    },
    leafStyleRight: {
      position: 'absolute',
      right: '0',
      top: '450px',
      width: '140px',
      height: 'auto',
    },
  };

  return (
    <div className="w-full" style={styles.aboutPage}>
      <section className="relative" style={styles.aboutHeader}>
        <div>
          <h1 style={styles.aboutTitle}>
            about <span style={styles.highlight}>The Maangerams</span>  
          </h1>
          <div style={styles.breadcrumb}>
            <span>HOME / ABOUT</span>
          </div>
        </div>
        <div className="hidden md:block" style={styles.aboutImage}></div>
      </section>
      
      <section style={styles.aboutContent}>
        <img src="/images/wave.png" alt="Grapefruit" style={styles.image2} />

        <div style={styles.imageContainer}>
          <img src="/images/icon-1.png" alt="Grapefruit" style={styles.image} />
        </div>
        <div style={styles.contentText}>
          <p>⭐⭐⭐ a taste of <span style={styles.highlight}>real food</span>⭐⭐⭐ </p>
        </div>
      </section>
      <div className="container mx-auto px-4 w-full">
        <div className='flex justify-center flex-col w-full items-center'>
      <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 text-center">we are <span className="font-bold">organic  </span></h1>
            <h3 className="text-sm md:text-base lg:text-lg text-center">----ABOUT The Maangerams  ----</h3>
          </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 mb-8">
          <p className="text-base md:text-lg lg:text-lg mb-8 md:mb-0 md:w-1/2">
          At Maangeram  we are dedicated to providing the freshest, highest-quality produce straight from the farm to your table. Our commitment to sustainability and excellence drives us to source only the best fruits and vegetables, ensuring that our customers receive nutritious, flavorful, and naturally grown produce.
          </p>
          
        </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between mt-12">
          {[
            { title: "Farm Fresh", description: "Straight from our fields to your table, experience the taste of truly fresh produce." },
            { title: "Organic Certified", description: "Our products are certified organic, ensuring you get the purest, chemical-free food." },
            { title: "Sustainable Practices", description: "We employ eco-friendly farming methods to protect our environment for future generations." },
            { title: "Nutrient Rich", description: "Our carefully cultivated produce is packed with essential vitamins and minerals." }
          ].map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 mb-8 px-4">
              <div className="bg-center bg-no-repeat bg-contain w-24 h-24 mx-auto mb-4" style={{backgroundImage: `url('/images/feature-${index + 1}.png')`}}></div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm mb-4">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <img src="/images/feature.png" alt="Organic Grapefruit" className="max-w-full h-auto mx-auto" />
        </div>
      </div>

      <Comp5 />
      <div className="mt-16 px-4 md:px-8 lg:px-16">
        <Comp1 />
      </div>
      {/* <Comp2 /> */}
    </div>
  );
};

export default AboutPage;
