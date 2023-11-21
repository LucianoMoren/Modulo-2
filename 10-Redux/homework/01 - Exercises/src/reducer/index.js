const redux = require("redux");
const { INCREMENTO, DECREMENTO } = require("../action-types");

const initialState = {
  contador: 0,
};

function contador(state = initialState, action) {
  switch (action.type) {
    case INCREMENTO:
      return {
        ...state,
        contador: state.contador + 1,
      };
    case DECREMENTO:
      return {
        ...state,
        contador: state.contador - 1,
      };
    default:
      return { ...state };
  }
}

module.exports = contador;
