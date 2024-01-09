import { useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import { useGetProdutosQuery } from './services/api'
import { favoritar } from './store/reducers/favorito'
import { adicionar } from './store/reducers/carrinho'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  const handleFavoritar = (produto: Produto) => {
    // Dispatch da ação favoritar para o Redux
    store.dispatch(favoritar(produto))
  }

  const adicionarAoCarrinho = (produto: Produto) => {
    // Dispatch da ação adicionar para o Redux
    store.dispatch(adicionar(produto))
  }

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos || []}
          favoritos={[]}
          favoritar={handleFavoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </Provider>
  )
}

export default App
