import  {BrowserRouter, Route, Routes}  from 'react-router-dom';
import Rodape from 'componentes/Rodape';
import NaoEncontrada from 'paginas/NaoEncontrada';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componentes/Menu';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from 'paginas/Post';




export default function AppRouts() {
  return (
    <div>
      <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          
        </Route>
        <Route path="posts/:id" element={<Post/>} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>


      <Rodape />
    </BrowserRouter>
    </div>     
   
  );
  

}

