export function Hero() {
  return (
  <section className="hero">
    <div className="container-hero container-fluid d-flex bg-light flex-column justify-content-center">
    <img className="user-image img-fluid mx-auto rounded-circle" src="./me.JPG"></img>
        <h1 className=" d-flex mt-5">Hello, I am Pablo Sarzosa</h1>
        <h2 className="d-flex mb-5">Software developer trainee. Learning React, Flutter and Angular. DevOps interested.</h2>

        <img className="img-fluid mx-auto mt-5 hero-image " src="./hero-me.png">
        </img>
        
    </div>

    <div className="container-hero-2 container-fluid bg-black d-flex flex-column justify-content-center">
        <h2 className=" text-light mx-auto">Let's meet Pablo Sarzosa</h2>
        <p className=" text-light d-flex mx-auto">Aspiring software developer focused on React, Flutter, and Angular. Interested in DevOps and seeking a position to deploy my knowledge and refine my practical skills. Motivated by the continuous learning of emerging technologies and innovative tools.</p>
    </div>
  </section>
  )
}
