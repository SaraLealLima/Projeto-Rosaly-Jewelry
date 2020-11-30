import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaProdutos from './paginas/PaginaProdutos';
import PaginaContato from './paginas/PaginaContato';
import PaginaLojas from './paginas/PaginaLojas';
import PaginaPedido from './paginas/PaginaPedido';
import PaginaConfirmacaoPedido from './paginas/PaginaConfirmacaoPedido';

export default function App() {
  return (
    <Router>
      <div>
        <Header />

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
          <Route path="/paginaPedido">
            <PaginaPedido />
          </Route>
          <Route path="/paginaConfirmacao">
            <PaginaConfirmacaoPedido />
          </Route>
          <Route path="/">
            <PaginaInicial />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

