import "./App.css";
import img from "./assets/image-omelette.jpeg";

function App() {
  return (
    <>
      <div className="main">
        <div className="card">
          <img src={img} alt="" />
          <div className="recipe">
            <h1>Simple Omelette Recipe</h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div className="time">
            <h1>Preparation time</h1>
            <ul>
              <li>
                <span>Total</span>: Approximately 10 minutes
              </li>
              <li>
                <span>Preparation</span>: 5 minutes
              </li>
              <li>
                <span>Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>
          <div className="ingreds">
            <h1>Ingredients</h1>
            <ul>
              <li> 2-3 large eggs</li>
              <li> Salt, to taste</li>
              <li> Pepper, to taste</li>
              <li> 1 tablespoon of butter or oil</li>
              <li>
                {" "}
                Optional fillings: cheese, diced vegetables, cooked meats,
                herbs.
              </li>
            </ul>
            <hr />
          </div>
          <div className="instructions">
            <h1>Instructions</h1>
            <ol>
              <li>
                <span>Beat the eggs</span>: In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                <span>Heat the pan</span>: Place a non-stick frying pan over
                medium heat and add butter or oil.
              </li>
              <li>
                <span>Cook the omelette</span>: Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li>
                <span>Add fillings (optional)</span>: When the eggs begin to set
                at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li>
                <span>Fold and serve</span>: As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </li>
              <li>
                <span>Enjoy</span>: Serve hot, with additional salt and pepper
                if needed.
              </li>
            </ol>
            <hr />
          </div>

          <div className="nutrition">
            <h1>Nutrition</h1>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="table">
              <ul>
                <li>
                  Calories
                  <span>277kcal</span>
                </li>
                <hr />
                <li>
                  Carbs
                  <span>0g</span>
                </li>
                <hr />
                <li>
                  Protein
                  <span>20g</span>
                </li>
                <hr />
                <li>
                  Fat
                  <span>22g</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
