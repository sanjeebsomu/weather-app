import './App.css';
import Days from './components/Days';
import Input from './components/Input';
import Main from './components/Main';

function App() {
  return(
    <>
          <div className="h-screen bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1422493757035-1e5e03968f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2008&q=80')]">

          <Input />
          <Main />
          <Days />

          </div>
    </>
  )
}

export default App;
