import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const indiceExistente = state.itens.findIndex((p) => p.id === produto.id)

      if (indiceExistente !== -1) {
        // Remove o item se ele existir
      } else {
        // Adiciona o item se ele não existir
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
