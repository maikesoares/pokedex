import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
// RESET 

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Montserrat", sans-serif;;
  text-decoration: none;
  list-style: none;
}

body {
  height: 100vh;
}

// CONTAINER

.container {
  display: flex;
  flex-direction: column;
  align-items:center;
  background: url('../src/assets/images/fundo.png') fixed no-repeat center;
}

// HEADER 

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15rem;
  position: relative;
  background-color: rgba(226, 2, 2, 0.966);
  border-bottom: 5px solid black;
}

.header img {
  width: 26rem;
}

.header .circulo-externo {
  position: absolute;
  width: 75px;
  height: 75px;
  background-color: black;
  border-radius: 100%;
  bottom: -40px;
}

.header .circulo-interno {
  position: absolute;
  background-color: white;
  width: 65px;
  height: 65px;
  border-radius: 100%;
  left: 5px;
  top: 5px;
}


// CARDS

.container-cards {
  min-height: 60.4vh;
  max-width: 80vw;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 5rem;
}

.pokemon-card{
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #2F4F4F;
  border-radius:10px;
  background: linear-gradient(#141414, #61b8a2);
  transition: transform .2s ease-in-out;
  color: white;
}

.pokemon-card img {
  width: 100%;
}

.pokemon-card h1{
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
}

.pokemon-card p{
  padding: 5px;
  font-size: 18px;
}

.pokemon-card:hover {
  transform: scale(1.03);
  cursor: pointer;
  background: linear-gradient(#DCDCDC,#20B2AA);
}

//THEME TOGGLE BUTTON

.btn-theme {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.btn-theme .btn {
  border: none;
  font-size: 32px;
  padding: 10px 30px 0 0;
}

.btn-theme .btn:hover{
  cursor: pointer;
}

//BUTTON SEARCH

.container-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}

.container-btn  .btn-search{
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
  transition: transform .2s ease-in-out;
}

.container-btn  .btn-search:hover {
  cursor: pointer;
  transform: scale(1.1);
}

// INPUT
.form  {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form form {
  display: flex;
  position: relative;
  margin-top: 10px;
}

.form input {
  max-width: 32rem;
  font-size: 30px;
  padding: 10px;
  border-radius: 10px;
}

.form label {
  position: absolute;
  right: 10px;
  top: 12px;
  border: none;
  font-size: 25px;
  background-color: white;
}

// POKEMONDETAILS 

.container-details {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
  background: url('../../src/assets/images/fundo.png') center fixed;
  background-size: cover;
}

.container-details .container-btn-home {
  width: 70%;
  margin-left: 50px;
  transition: transform .2s ease-in-out;
  position: absolute;
  top: 18.5rem;
  left: -10px;
}

.container-details img{
  width: 50px;
}

.container-details img:hover{
  cursor: pointer;
  transform: scale(1.5);
}

.container-details .details {
  display: flex;
  align-items:center;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(#FFFACD, #FFD700, #FFFF00,#FFFF00);
  box-shadow: 12px 13px 20px 0px #000000;
  margin: 20px;
  border-radius: 50px 50px 10px 10px;
  color: black;
}

.container-details .details .first-details{
  display: flex;
  align-items:center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
}

.container-details .details .first-details h1 {
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 800;
}

.container-details .details .first-details h3 {
  font-size: 14px;
}

.container-details .details .first-details p {
  font-size: 20px;
}

.container-details .details .first-details .images{
  transition: transform .2s ease-in-out;
}

.container-details .details .first-details .images img {
  min-width: 15rem;
  padding: 10px;
}

.container-details .details .first-details .images img:hover {
  transform: scale(1.5);
  cursor: pointer;
}

.container-details .details .second-details {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container-details .details .second-details h2 {
  font-size: 20px;
  margin-top: 10px;
}

.container-details .details .second-details .images {
  transition: transform .2s ease-in-out;
}

.container-details .details .second-details .images img {
  min-width: 15rem;
  padding-right: 10px;
}

.container-details .details .second-details .images img:hover {
  transform: scale(1.5); 
  cursor: pointer;
}

.container-details .details .second-details h2{
  font-size: 20px;
  padding-bottom: 15px;
  padding-top: 15px;
}

.container-details .details .second-details ul{
  max-width: 100rem;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-size: 20px;
  background: linear-gradient(#8B0000,#FF0000);;
  border-radius: 25px 0 25px 0;
  box-shadow: 2px 2px 10px #1C1C1C;
}

.container-details .details .second-details li {
  text-transform: uppercase;
  font-size : 16px;
  padding: 6px;
  background: linear-gradient(#363636,#1C1C1C);;
  color: white;
  border-radius: 15px 0 15px 0;
  box-shadow: 2px 1px 2px #C0C0C0;
}

.container-details .details .second-details .habilidades{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.container-details .details .second-details .habilidades ul li{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.container-details .details .second-details .habilidades ul li h2 {
  font-size: 20px;
}

.container-details .details .second-details .habilidades ul li p {
  font-size: 16px;
  padding-bottom: 10px;
}


// FOOTER

.footer {
  display: flex;
  align-items:center;
  justify-content: center;
  height: 64px;
  background: rgba(226, 2, 2, 0.966);
  border-top: 5px solid black;
}

.footer ul {
  display: flex;
  gap: 15px;
  font-size: 18px;
}

.footer ul li {
  list-style: none;
  font-size: 18px;
  font-weight: 500;
  font-style: italic
}

`;
