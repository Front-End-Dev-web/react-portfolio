

import './App.css'
import Header from './components/header'
import Lgo from './assets/container-top-img/logo.png'


function App() {


  return (
    <>
 <div id="container-top">
    <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4 img-fluid" src={Lgo} alt="" width="350"
        height="110"/>

      <div class="col-lg-6 col-sm-12 mx-auto">

        <div class="d-grid gap-2 d-flex justify-content-center">
          <a href="#" class="gap-2"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="px-3"><i class="fa-brands fa-twitter"></i></a>

          <a href="#" class="gap-2"><i class="fa-brands fa-vimeo-v"></i></a>
          <a href="#" class="px-3"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="container">





<Header />


</div>
    </>
  )
}

export default App
