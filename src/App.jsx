import { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [news, setNews] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchInput = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header searchText={searchText} onSearchInput={searchInput} />
      <Main news={news} searchText={searchText} />
    </>
  )
}

export default App

