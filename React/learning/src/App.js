import logo from './logo.svg';
import './App.css';
import InternalCssA from './CssInReact/InternalCss/InternalCssA';
import ExternalCssA from './CssInReact/ExternalCss/ExternalCssA';
import FirstAModule from './CssInReact/ModuleCss/FirstAModule';
import UseImagePUrl from './ImagesInReact/UseImagePUrl';
import UseimageImport from './ImagesInReact/UseimageImport';
import UseImageBackgrCSS from './ImagesInReact/UseImageBackgrCSS';


//import VirtualDom from './components/VirtualDom';

function App() {

//   const display = (event) => {
//     console.log(event.target);
// } 
//   return(
//     <div>

//       <button type="button" className="ButtonClass" onClick={display}>click</button>
//       <input className="inputclass" onChange={display} />
//     </div>

//   );


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <VirtualDom></VirtualDom> */}

      {/* <InternalCssA></InternalCssA> */}

{/*       
      <ExternalCssA></ExternalCssA>
      <FirstAModule></FirstAModule> */}

{/* 
      <UseimageImport></UseimageImport> */}
      <UseImageBackgrCSS></UseImageBackgrCSS>

{/* <UseImagePUrl imageurlp='https://media.istockphoto.com/id/1911602365/photo/new-life-in-forest.jpg?s=2048x2048&w=is&k=20&c=SE54sxZqbXtITzcv2BIr81_tfWWiw2RZtZ9QriVgpnw='></UseImagePUrl> */}
    </div>
  );


}

export default App;
