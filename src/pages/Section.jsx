//premiere page, page par defaut 
import Header from "../components/Header";
import Footer from "../components/Footer";
import Article from "../components/Article";

// import de react helmet pour ajouter le liens font-awesome tout en conservant une semantique correct
import { Helmet } from "react-helmet";

function Section() {
  return (
    <>
      <Header />
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Helmet>
      <Article />
      <h3>Contact us</h3>
      <form className="formSection" action="#" method="post">
        <div className="contactDetail">
          <input type="text" name="firstName" placeholder="Firstname" />
          <input type="text" name="lastName" placeholder="Lastname" />
          <input type="email" name="emailAddress" placeholder="Email address" />
          <input type="tel" name="phoneNumber" placeholder="Phone number" />
        </div>
        <textarea name="text" placeholder="Type your message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </>
  );
}

export default Section;
