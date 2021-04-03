import logo from './logo.svg';
import './App.css';

import Message from './components/message';
import Counter from './components/counter';
import Theme from './components/theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message greetingText="Hello Jano" summary="This is a Counter homework" />
        <Counter initialValue={999} />
      </header>
    </div>
  );
}

export default App;
