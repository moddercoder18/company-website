import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = ({ 
  showTitle 
}) => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          {showTitle && <SectionTitle
            title="Services"
            paragraph="With a client-centric approach, Modder Coder IT Solution transforms ideas into cutting-edge software solutions, providing exceptional competence in custom software, online, and mobile app development. Our dedication to innovation, on-time delivery, and scalable solutions distinguishes us as a reliable partner on your digital transformation journey."
            center
          />}

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
