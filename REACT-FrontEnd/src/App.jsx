import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
  
  const helloData = [
      {name: "Mike", surname: 'Brow', message: 'Hi there'},
      {name: "Bob", surname: 'Swagger', message: 'Hello..'}
  ];

  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} surname={data.surname} message={data.message}/>
      ))}

      <Contact email="halo29722@gmail.com" phone="0987654321" />
    </div>
  );
}

export default App;
