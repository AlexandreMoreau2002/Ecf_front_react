//premiere page, page par defaut 
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Article1, Article2, Article3 } from "../components/Articles/export";

// import de react helmet pour ajouter le liens font-awesome tout en conservant une semantique correct
import { Helmet } from "react-helmet";

// import de sweet-pagination pour le carousel des articles
import SweetPagination from "sweetpagination";
import { useState } from "react"; // on importe useState pour sweet-pagination

// import d'axios
import axios from "axios";

// declaration des items pour sweetpagination
const items = [Article1, Article2, Article3];

export default function Section() {
  
  const [currentPageData, setCurrentPageData] = useState([items[0]]);

  // requete axios
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form[name="contact"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementByName('firstName').value;
        const lastName = document.getElementByName('lastName').value;
        const email = document.getElementByName('emailAddress').value;
        const phone = document.getElementByName('phoneNumber').value;
        const message = document.getElementByName('Text').value;


        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const nameRegex = /^[a-zA-Z ]+$/;


        // Vérifier que tous les champs ont été remplis, et qu'ils sont bien aux normes d'un formulaire
        if (firstName === '' || lastName === '' || email === '' || phone === '' || message === '') {
            alert('Merci de remplir tous les champs.');
            return;
        }

        // Vérifier si les champs respectent les conditions de caractère
        if (!nameRegex.test(firstName)) {
            alert('Le prénom n\'est pas valide.');
            return;
        }

        if (!nameRegex.test(lastName)) {
            alert('Le nom n\'est pas valide.');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('L\'adresse email n\'est pas valide.');
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert('Le numéro de téléphone n\'est pas valide.');
            return;
        }

        // Envoyer les données à l'API avec Axios
        axios.post('http://212.83.176.255:3030/contact', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message
        })

            .then(function (response) {
                console.log(response.data)
                // Créer un élément DOM avec le message de confirmation
                const confirmationMessage = document.createElement('p');
                confirmationMessage.textContent = response.data.message;
                form.insertAdjacentElement('afterend', confirmationMessage);
            })

            .catch(function (error) {
                console.log(error);
            });
    });
});

  return (
    <>
      <Header />
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Helmet>

      <section className="section">
        {currentPageData.map((Item, index) => (
          <div key={index}>
            <Item />
          </div>
        ))}

        <SweetPagination
          currentPageData={setCurrentPageData}
          getData={items}
          dataPerPage={1}
          navigation={true}
          getStyle={"style-2"}
        />
      </section>

      <h3>Contact us</h3>
      <form className="formSection" action="#" method="post" name="contact">
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
