import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";



const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];



// creating a App component
function App() {
    return (
        <div className="container">
            {/* nesting a all component inside App component */}
            <Header />
            <Menu />
            <Footer />

        </div>
    )
}


// creating a header component
function Header() {
    // const style = { color: 'red', fontSize: '48px', textTransform: "uppercase" }
    return (
        <header className='header'>

            <h1> Fast React pizza Co.</h1>
        </header>
    )
}

// creating a Menu component
function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;
    // console.log(numPizzas)
    return (
        <main className='menu'>
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p>Authentic Italian cuisine. 6 creative dishes to  choose from. All from our stone oven, all organic, all delicious. </p>
                    <ul className='pizzas'>
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />

                        ))}
                    </ul>
                </>

            ) : (<p>Working on menu please come back later</p>)}

            {/* <Pizza
                name="Pizza Margherita" ingredient="Tomato and mozarella"
                imgSrc="pizzas/margherita.jpg"
                price={9.50}
            /> */}
        </main>
    )
}

// creating a pizza component
// function Pizza(props) {
//  immediately destructuring props
function Pizza({ pizzaObj }) {
    // if (pizzaObj.soldOut) {
    //     return null
    // }
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
            </div>
        </li>
    )
}


// creating a Footer component
function Footer() {
    const time = new Date().getHours();
    let openingHour = 12;
    let closingHour = 22;
    let isOpen = time >= openingHour && time <= closingHour;
    // let isOpen = false

    // if (time >= openingHour || time <= closingHour) console.log("open"); else console.log("close")

    // console.log(isOpen)

    return (
        <footer className='footer'>
            {

                isOpen ? <Order closingHour={closingHour} /> : (
                    <p> We're happy to welcome you between {openingHour}:00 to {closingHour}:00</p>
                )
            }
        </footer >
    )
}

function Order(props) {
    return (
        <div className='order'>
            <p>
                We are open until {props.closingHour}:00.
            </p>
            <button className='btn'>ORDER</button>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)