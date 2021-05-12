# Posicionamiento en CSS
## `position: relative;`

 - Puedo mover al elemento con 2 ejes de referencia:
     - top: cantidad de pixeles desde el extremo superior.
    - left: cantidad de pixeles desde el extremo izquierdo.
 - Si el elemento es movido su espacio original se respeta por los demás elementos.
 - Un elemento también puede tener position: relative cuando tiene  hijos con position: absolute de tal forma que dichos hijos nose salgan del área del padre.

 ## `position: absolute`

 - El elemento sale del contexto de los demás elementos (tienen efecto de flotar sobre los demás elementos).
 - Los elementos que no tienen position absolute ocupan el espacio de este elemento.
 - Puedo mover al elemento con 4 ejes de referencia:
    - top, left, right y bottom
 - Obligatoriamente debemos especificar 2 ejes de referencia.
 - El elemento absolute se mueve con referencia al próximo padre directo que tenga position: relative.
 - De no cumplirse el anterior punto, el padre de referencia sería el elemento HTML. 

 ## ``` position: fixed```

 - El elemento es posicionado respecto al viewoport (el área de posicionamiento de la página).
 - Es decir, si el scroll se mueve por ejemplo, el elemento se mantiene fijado con referencia la viewport.
 - Se puede anclar hasta con 4 puntos de referencia: top, left, right y bottom. 