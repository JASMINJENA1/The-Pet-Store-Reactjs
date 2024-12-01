import dogImage from "./1-900x600-1-900x600-1-900x600.jpg"; // Ensure this path is correct
import catImage from "./cat.jpg"; // Update paths for other images
import rabbitImage from "./rabbit.jpg";

const FeaturedPets = () => {
  return (
    <section className="featured-pets" id="pets">
      <h2>Featured Pets</h2>
      <div className="pet-list">
        <div className="pet">
          <img src={dogImage} alt="Dog"  height={150} width={250}/>
          <h3>Charlie</h3> 
        </div>
        <div className="pet">
          <img src={catImage} alt="Cat" height={150} width={250} />
          <h3>Whiskers</h3>
        </div>
        <div className="pet">
          <img src={rabbitImage} alt="Rabbit" height={150} width={250} />
          <h3>Bunny</h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
