import suma from './suma'
import resta from './resta'
import division, { modulo } from './division'
import producto, { potencia, cuadrado } from './producto'

const c = console.log

c( suma(6, 4) )
c( resta(16, 24) )
c( division(16, 4) )
c( modulo(16, 4) )
c( producto(16, 4) )
c( potencia(16, 4) )
c( cuadrado(2) )


/* let nombre = 'José Ignacio'
console.log('Hello ' + nombre + 'browserify funcionando.') */