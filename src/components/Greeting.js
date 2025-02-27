import React from 'react'

export default function Greeting(props) {
  return (
    <>
        <h5>{props.name}</h5>
        <Header />
        <Content />
        <Footer />
        <ul>
            <li><a href='#'>{props.first}</a></li>
            <li><a href='#'>{props.second}</a></li>
            <li><a href='#'>{props.degree}</a></li>
            <li><a href='#'>{props.city}</a></li>
        </ul>
    </>    
  )
}

// Header Component
const Header = () => {
    return <h1>Welcome to My Website</h1>;
};

// Content Component
const Content = () => {
    return <p>This is the main content of the website.</p>;
};

// Footer Component
const Footer = () => {
    return <footer>© 2025 MyWebsite</footer>;
};