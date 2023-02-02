import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const Titulo = ({cor, text, children}) => { // ->  props com desestruturação
  return <h1 style={{color: cor}}>{text}: {children}</h1>
}

const App = () => {

  return (
    <header>
      <>
        <Header />
        <Form />
        <Titulo cor='red' text='Trabalhando com props'>isso é children</Titulo>
        <Titulo cor='blue' text='Hello'/>
        <Footer />
      </>
    </header>
  )

}

export default App;