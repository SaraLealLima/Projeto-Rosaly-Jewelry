import React, {lazy, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Header from './components/Header';
// import Footer from './components/Footer';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaProdutos from './paginas/PaginaProdutos';
import PaginaContato from './paginas/PaginaContato';
import PaginaLojas from './paginas/PaginaLojas';
import PaginaPedido from './paginas/PaginaPedido';
import PaginaConfirmacaoPedido from './paginas/PaginaConfirmacaoPedido';
import loading from './images/loading.png'

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));


export default function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={ <img src={loading} className="loadingImagem" alt="Carregando..." /> }>
          <Header />
        </Suspense>

        <Switch>
          <Route path="/paginaProdutos">
            <PaginaProdutos />
          </Route>
          <Route path="/paginaContato">
            <PaginaContato />
          </Route>
          <Route path="/paginaLojas">
            <PaginaLojas />
          </Route>
          <Route path="/paginaPedido/:idproduto">
            <PaginaPedido />
          </Route>
          <Route path="/paginaConfirmacao">
            <PaginaConfirmacaoPedido />
          </Route>
          <Route path="/">
            <PaginaInicial />
          </Route>
        </Switch>

        <Suspense fallback={ <img src={loading} className="loadingImagem" alt="Carregando..." /> }>
          <Footer />
        </Suspense>
        
      </div>
    </Router>
  );
}

