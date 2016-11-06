const Cabecera = require('./Cabecera.jsx');
const Tablero = require('./Tablero.jsx');

const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";
const VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];

var App = React.createClass({
 getInitialState: function () {
   return {
     turno: JUGADORX,
     valores: VALORES
   };
  },

 appClick: function (numeroFila, numberoColumna) {
   let valores = this.state.valores;
   let nuevoValor = this.state.turno === JUGADORX ? 'X' : '0';
   valores[numeroFila][numberoColumna] = nuevoValor;
   this.setState({
     turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
     valores: this.state.valores
   });
 },

  render: function () {
   var texto = "Turno del " + this.state.turno;
   return (
     <div>
       <Cabecera texto={texto}/>
       <Tablero valores={this.state.valores}/>
     </div>
   )
 }
});
module.exports = App;
