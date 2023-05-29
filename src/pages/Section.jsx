//premiere page, page par defaut 
import Header from "../components/Header";
import Footer from "../components/Footer";

function Section() {
  return (
    <>
      <Header/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <section className="section">
        <article className="article article1">
          <i class="fa-solid fa-puzzle-piece"></i>
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Fusce sed scelerisque turpis, nec feugiat leo. Duis efficitur eget sapien finibus sagittis</p>
        </article>
        <article className="article article2">
          <i class="fa-solid fa-puzzle-piece"></i>
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Fusce sed scelerisque turpis, nec feugiat leo. Duis efficitur eget sapien finibus sagittis</p>
        </article>
        <article className="article article3">
          <i class="fa-solid fa-puzzle-piece"></i>
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Fusce sed scelerisque turpis, nec feugiat leo. Duis efficitur eget sapien finibus sagittis</p>
        </article>
      </section>
      <h3>Contact us</h3>
      <form className="formSection" action="#" method="post">
        <div className="contactDetail">
          <input type="text" name="firstName" placeholder="Firstname"/>
          <input type="text" name="lastName" placeholder="Lastname"/>
          <input type="email" name="emailAddress" placeholder="Email address"/>
          <input type="tel" name="phoneNumber" placeholder="Phone number"/>
        </div>
        <textarea name="text" placeholder="Type your message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </>
  );
}

export default Section;
