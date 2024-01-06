import SectionTitle from "../Common/SectionTitle";
import SinglePortfolio from "./SinglePortfolio";
import portfolioData from "./portfolioData";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Projects"
          paragraph="Explore our portfolio to see how we've turned creative ideas into effective and profitable digital solutions."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {portfolioData.map((portfolio) => (
            <div key={portfolio.id} className="w-full">
              <SinglePortfolio portfolio={portfolio} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
