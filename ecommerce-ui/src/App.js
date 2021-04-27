import './App.css';
import './Item.css';
import Main from './Main';

function App() 
{
  return (
    <div className="grid-container">
      <header>
        <a href="/">Air B&B</a>
      </header> 
      <main>
          <Main />
      </main>
    </div>
  );
}

export default App;
