import './App.css'
import Deities from './components/Deities.jsx'
import Aspects from './components/Aspects.jsx'
import deityArray from './EgyDeities.json'

const App = () => {

  return (

    <section id="page">
      <header><div className="pageTitle">
      <h1>The Pantheon of Ancient Egyptian Deities</h1>
      </div>
      </header>

      {deityArray.map((deity, index) => (
        <><main className="deityCard"><Deities
          name={deity.name}
          depiction={deity.depictions}
          genders={deity.genders}
          imgPath={deity.img}
          URL={deity.URL} />

        <section id="aspects">
                {deity.Aspects.map((aspects, index) => (
                    <Aspects
                      type={aspects.type}
                      name={aspects.name}
                    />
                
                  )) 
                }  
        </section>


          </main></>
        ))
      }
    </section>
  ) 
}


export default App


   