import logo from './logo.jpg';
import './App.css';
import share from './Iconos/outline_share_black_24dp.png';
import pastel from './Iconos/outline_cake_black_24dp.png';
import world from './Iconos/outline_language_black_24dp.png'
import phone from './Iconos/outline_call_black_24dp.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div>
          <img src={logo} className="App-logo" alt =""/>
          <h1 className='App-Text'>Jorge Angel Zepeda Navarrete</h1>  
        </div>
        
      </header>

      <body>
      <div>  
        <div className='Hud'>
         <h1>About me</h1>
         <div className='App-Text'>
          <p>Jorge Zepeda is a young man educated on sciences and engineers since he was young resulting into a consolidated logic and reasoning capacity. Jorge has participated on oratory events, such as the Parlamento Juvenil celebrated on 2016 in the congress of the state of Jalisco, were his speech was determinant, make him shine above his young partners. As well, his domain and passion for the technologies, lead Jorge to participate in university organizations dedicate to competition and scientific research.</p>
         
         </div>
    
         <div className='App-Grid p'>
          <img src={phone} alt=""/>
          <p>322 109 5731</p>
          <img src={pastel} alt=""/>
          <p>22</p>
          <img src={share} alt=""/>
          <a href='https://twitter.com/a_Kuuhaku'>@a_Kuuhaku</a>
          <img src={world} alt=""/>
          <p>Mexican</p>
         </div>
        </div>

        <div>

          <h1>Education</h1>

          <h4>Preparatoria Regional de Puerto Vallarta</h4>
          <h5>Bachelor's degree</h5>
          <small>2016-2019</small>

          <h4>Universidad de Guadalajara</h4>
          <h5>Computer Science</h5>
          <small>2020-2023</small>
        </div>

        <div className='Hud'>
          <div className='Line'></div>
        </div>
        
        <div className='Hud'>

         <h1>Skills</h1>
         
         <div>
         
            <h5>Office automation</h5>
         
            <div class="bar-holder">
         
              <div class="bar-95">95%</div>
         
            </div>
         </div>

         <div>
         
            <h5>Design and edition of media</h5>
         
            <div class="bar-holder">
         
              <div class="bar-90">90%</div>
         
            </div>
         </div>

         <div>
         
         <h5>Backend programmer</h5>
      
         <div class="bar-holder">
      
           <div class="bar-97">97%</div>
      
         </div>
      </div>

      <div>
         
         <h5>Academic redaction</h5>
      
         <div class="bar-holder">
      
           <div class="bar-95">95%</div>
      
         </div>
      </div>
        </div>
        
        <div className='Hud'>
          <div className='Line'></div>
        </div>

        <div>
          <h1>Experience</h1>


          <div>
          <h4>Computer's lab administrator</h4>
          <h5>Preparatoria Regional de Puerto Vallarta</h5>
          <small>Janury 2017 - March 2019</small>

          <div className='Hud App-Text d'>
          <p>Commputer’s lab administrator. On charge to giving maintenance to the computers and the network of them. Assign usually to supervise and ensure that the labs and networks keeps working without issues. If anything failed, was my duty to restore, repair or rebuild it.   </p>
          </div>
          </div>

          <div>
          <h4>Departamental Seller</h4>
          <h5>Coopel</h5>
          <small>December 2019 - December 2020</small>

          <div className='Hud App-Text d'>
          <p>Departmental seller with a straightforward contact with the costumers of the store. Assign mainly to the shoe’s areas. The communication, attention and contact with the customers were the duty’s determinants at the moment to accomplish with my obligations on the company, traying to make the best impression to the costumer as possible.</p>
          </div>
          </div>
                   



        </div>

        <div className='Hud'>
          <div className='Line'></div>
        </div>

        <div>
          <h1>Experience on projects</h1>


          <div>
          <h4>Developer</h4>
          <h5>Cansat</h5>
          <small>Janury 2022 - December 2022</small>

          <div className='Hud App-Text d'>
          <p>Developer for the organization UDG Space, in charge to develop a surface analyzer that could work through a Cansat.</p>
          </div>
          </div>


        </div>

        <div className='Hud'>
          <div className='Line'></div>
        </div>
        

        <div>
          <h1>Professional Interests </h1>


          <div>

          <div className='Hud App-Text d'>
          <ol>
            <li>Phd Computer Science</li>

            <li>Academic Research</li>

            <li> Being participate on the Software and Hardware industry</li>         

            <li>Open my own software developer studio</li>          

            <li>In course to the Video Game Industry</li>                

            

          </ol>
          </div>
          </div>


        </div>

        <div className='Hud'>
          <div className='Line'></div>
        </div>

        <div>
          <h1>Software</h1>
          <div>
            <h6>Photoshop</h6>
          <div class="bar-holder">
            <div class="bar-80">80%
            </div>
          </div>
         </div>

         <div>
            <h6>Premiere Pro</h6>
          <div class="bar-holder">
            <div class="bar-90">90%
            </div>
          </div>
         </div>
        </div>

        <div className='Hud'>
          <div className='Line'></div>
        </div>

        <div className='Hud'>
          <h1>Lenguaje</h1>
          
          
          <div>
            <h6>Spanish (C2)</h6>
          <div class="bar-holder">
            <div class="bar-100">100%
            </div>
          </div>
         </div>

         <div>
          <h6>English (B2)</h6>
          <div class="bar-holder">
            <div class="bar-90">90%
            </div>
          </div>
         </div>

        </div>

        <div className='Hud'>
          <div className='Line'></div>
        </div>

        <div>

          <h1>References</h1>

          <div className='Hud'>
          <h4>Cristian Betancourt</h4>
          <h5>Computer science Eengineer</h5>
          <h6>322 123 2034</h6>

          <h4>Gabriel Escamilla</h4>
          <h5>Store Manager</h5>
          <h6>322 534 4483</h6>

          </div>


        </div>

      </div>
      </body>

    </div>
  );
}

export default App;
