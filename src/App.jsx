import { useState } from 'react'
import omletteImg from './assets/omletteImg.jpeg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className="main">
          <div className="omletteCard">
            <div className="Image">
              <img src={omletteImg} alt="An omlette image"  className='omletteImg' style={{width:"80%", borderRadius: "2%"}}/>
            </div>
            <div className="simpleRecipe">
              <h1>Simple Omelette Recipe </h1>
              <p className='smallNote'>An easy and quick dish, prefect for any meal. This classic omelette combines beaten eggs cooked to pefection, optiotionally filled with your choice of cheese, vegetables, or meats.
              </p>
              <div className="prep">
                <h4>Preparation time</h4>
                <ul className='blackBullets'>
                  <li><span>Total:</span> Approximately 10 minutes</li>
                  <li><span>Preparation:</span> 5 minutes</li>
                  <li><span>Cooking:</span> 5 minutes</li>
                </ul>
              </div>
              <div className="ingrdient">
                <h2>Ingredients</h2>
                <ul className='brownBullets'>
                  <li>2-3 large eggs</li>
                  <li>Salt, to taste</li>
                  <li>Pepper, to taste</li>
                  <li>1 tablespoon of butter or oil</li>
                  <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                </ul>
              </div>
              <hr className='line'/>
              <div className='instructions'>
                <h2>Instructions</h2>
                <ol className='numbers'>
                  <li><span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are <br></br> well mixed. You can add a tablespoon of water or milk for a flutter texture.</li>
                  <li><span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil. </li>
                  <li><span>Cook the omelette:</span> Once the butter is meltedis melted and bubbling, pour in the eggs, Tilt the pan to ensure the eggs evenly coat the surface. </li>
                  <li><span>Add fillings(Optional):</span> When the eggs begin to set at edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette. </li>
                  <li><span>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.  </li>
                  <li><span>Enjoy:</span> Serve hot, with additional salt and pepper if needed. </li>
                </ol>
              </div>
              <hr className='line'></hr>

              <div className="nutrition">
                <h2>Nutrition</h2>
                <p>The table below shows nutritional values per serving without the additional fillings.</p>
                  <div className="table">
                    <div className="names">
                      <p>Calories</p>
                      <span>277kcal</span>
                    </div>
                    <hr className='lines'></hr>

                    <div className="names">
                      <p>Carbs</p>
                      <span>og</span>
                    </div>
                    <hr className='lines'></hr>

                    <div className="names">
                      <p>Protein</p>
                      <span>20g</span>
                    </div>
                    <hr className='lines'></hr>

                    <div className="names">
                      <p>Fat</p>
                      <span>2l</span>
                    </div>
                    <hr className='lines'></hr>

                  </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
