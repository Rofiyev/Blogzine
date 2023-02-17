import { useState } from 'react';
import './App.css';
import Cards from './Containers/Cards/Cards';
import Footer from './Containers/Footer/Footer';
import Galery from './Containers/Galery/Galery';
import Home from './Containers/Home/Home';
import NavbarContent from './Containers/Navbar/Navbar';
import News from './Containers/News/News';
import Slider_1 from './Containers/Slider_1/Slider_1';
import Slider_2 from './Containers/Slider_2/Slider_2';
import ThemeContext from './Context/ThemeContext';
import { cards, footer, galery, homePage, navbar, news, sliderCard, slider_2 } from './Data';

function BasicExample() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }} >
        <NavbarContent
          title={"Dashboard"}
          btnTitle={'Subscribe'}
          data={navbar}
        />
        <Home data={homePage} />
        <Slider_1 data={sliderCard} />
        <Galery data={galery} />
        <Slider_2 data={slider_2} />
        <News data={news} />
        <Cards data={cards} />
        <Footer data={footer} />
      </ThemeContext.Provider>
    </div>
  );
}

export default BasicExample;

