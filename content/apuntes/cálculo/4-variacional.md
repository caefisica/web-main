---
title: 'Variacional'
description: 'CFO305 — 4 créditos'
lead: 'CFO305 — 4 créditos'
date: 2022-02-01T02:00:00
lastmod:
    - :git
    - lastmod
    - date
    - publishDate
draft: true
menu:
    cursos:
        parent: 'cálculo'
weight: 40
toc: true
contributors: ['Richard']
math: true
types: ['matemática']
---

{{< alert icon="📌" text="Los temas que se tocan en el curso Cálculo III está relacionado con el Cálculo de varias variables, es decir en este curso se desarrollara lo visto en el Cálculo diferencial e integral pero aplicado a funciones reales y vectoriales con una o más variables." />}}

{{< alert icon="👉" text="REQUISITOS: Para un mejor entendimiento del curso Cálculo III se necesitan comprender los conceptos vistos en los anteriores cursos de cálculo (diferencial e integral), es decir tener una buena base tanto en las derivadas como las integrales." />}}

### Funciones vectoriales

En esta parte del curso se estudian las funciones que utilizan vectores como valores, y estas funciones son necesarias para poder describir tanto curvas como superficies en el espacio.

#### Vectores en $\mathbb{R}^n$

En este apartado se detallan sobre los vectores, un concepto fundamental para el estudio del cálculo de funciones de varias variables.

Definición: Los vectores son objetos matemáticos que tienen módulo, dirección y sentido. Se puede representar gráficamente a cualquier vector mediante una flecha.

![Componentes de un Vector](https://s1.significados.com/foto/vector-00.svg_bg.png)

Un vector en $\mathbb{R}^3$ es una terna ordenada de números reales, y se denota de la siguiente forma:

$$\vec{u}=(x,y,z)$$

Y de manera general para un vector en $\mathbb{R}^n$ primero se define el espacio vectorial $\mathbb{R}^n$ el cual se denota como el conjunto de las n-tuplas ordenadas de números reales, así $\mathbb{R}^n:(x_1,x_2,x_3,\ldots ,x_n)$ donde $x_i \in \mathbb{R}$, $1\leq i \leq n$. Los elementos de $\mathbb{R}^n$ también se suelen denominar vectores de orden $n$.

-   Ejemplo de vector en $\mathbb{R}^n$:

    $$
    \vec{u}=(u_1,u_2,u_3,\ldots,u_n)
    $$

##### Norma de un vector

La norma o _longitud_ de un vector $\vec{u}=(u_1,u_2,\ldots,u_n)$, esta definida como: $$|\vec{u}|=\sqrt{u_1^2+u_2^2+\ldots+u_n^2}$$

##### Distancia entre dos puntos

Sean $\vec{u}=(u_1,\ldots,u_n)$ y $\vec{v}=(v_1,\ldots,v_n)$ los puntos los cuales se desea conocer la distancia entre ambos: $$d(\vec{v},\vec{u})=|\vec{v}-\vec{u}|=\sqrt{(v_1-u_1)^2+\ldots+(v_n-u_n)^2}$$

##### Producto punto

Teniendo los vectores $\vec{u}=(u_1,\ldots,u_n)$ y $\vec{v}=(v_1,\ldots,v_n)$ en $\mathbb{R}^n$, se define el producto punto o escalar como: $$\vec{u} \cdot \vec{v}=u_1v_1+u_2v_2+\ldots+u_nv_n=\sum_{i=1}^n u_iv_i$$

##### Producto cruz

Teniendo los vectores $\vec{u}=(u_1,u_2,u_3)$ y $\vec{v}=(v_1,v_2,v_3)$ se define el producto vectorial de dos vectores en $\mathbb{R}^3$ como:

$$
\vec{u} \times \vec{v}=\left |
\begin{matrix}
\hat{i} & \hat{j} & \hat{k} \\\\
u_1     & u_2     & u_3 \\\\
v_1     & v_2     & v_3
\end{matrix}
\right|
$$

##### Funciones vectoriales de una variable real

Aquí nos referimos a aquellas funciones vectoriales las cuales tienen su dominio en un subconjunto de $\mathbb{R}$ y un contradominio en un espacio vectorial $\mathbb{R}^n$.

De este modo una función vectorial $f$ asocia a cada elemento $t$ de un conjunto $\mathbb{D}$ de números reales, un único vector $f(t)$.

$$
\begin{aligned}
f:\mathbb{D} & \subseteq \mathbb{R} \rightarrow \mathbb{R}^n\\\\
t & \rightarrow f(t) \\\\
f(t) = \[ x_1 (t) &, x_2 (t), \ldots , x_n (t) \] \in \mathbb{R}^n
\end{aligned}
$$

##### Dominio de una función vectorial

El dominio de una función vectorial $f(t)$ esta referido a aquellos valores permitidos por $t$.

Si $f(t)$ esta definida en términos de las funciones de las componentes y no esta especificada explícitamente el dominio, entonces se entiende que el dominio es la intersección de los dominios naturales de las funciones de las componentes, por lo que este recibe el nombre de dominio natural de $f(t)$:

$$
f(t)=(x_1(t),x_2(t),\ldots,x_n(t)) \in \mathbb{R}^n
$$

Entonces su dominio es:

$$
Dom(f)=\bigcap_{i=1}^n Dom(x_i(t))
$$

##### Limite y continuidad de una función vectorial

El límite de una función vectorial $f$ se define tomando los límites de sus funciones componentes: Si $f(t)=(x_1(t),x_2(t),\ldots,x_n(t)$, entonces

$$
\lim_{t \rightarrow a}=\left ( \lim_{t \rightarrow a} x_1(t), \lim_{t \rightarrow a} x_2(t),\ldots, \lim_{t \rightarrow a} x_n(t) \right)
$$

Siempre y cuando los límites de las funciones componentes existan.

También se tiene que una función vectorial $f$ será continua si se cumple que:

$$
\lim_{t \rightarrow a} f(t)=f(a)
$$

##### Funciones vectoriales y curvas en el espacio

Existe una estrecha relación entre las funciones vectoriales continuas y las curvas en el espacio. Supongase que $x_1$, $x_2$ y $x_3$ son funciones continuas con valores reales en un intervalo _I_. Entonces el conjunto $\mathbb{C}$ de todos los puntos $(x,y,z)$ en el espacio, donde:

$$
x=x_1(t), \qquad y=x_2(t), \qquad z=x_3(t)
$$

Las ecuaciones anteriores se llaman **ecuaciones paramétricas de** $\mathbb{C}$ y $t$ se llama **parámetro**. Si consideramos ahora la función vectorial:

$$
\mathbf{r}(t)=\langle x_1(t),x_2(t),x_3(t)\rangle
$$

Entonces $\mathbf{r}(t)$ es el vector de posición del punto $P(x_1(t),x_2(t),x_3(t))$ en $\mathbb{C}$. Así, toda función vectorial continua $\mathbf{r}$ define una curva en el espacio $\mathbb{C}$ trazada por la punta del vector en movimiento $\mathbf{r}(t)$.

##### Derivadas e integrales de funciones vectoriales

1. Derivadas: La derivada $\mathbf{r}^{\prime}$ de una función vectorial $\mathbf{r}$ se define casi de la misma manera que las funciones con valores reales:

    $$
    \dfrac{d\mathbf{r}}{dt}=\mathbf{r}^{\prime}(t)=\lim_{h\rightarrow 0} \dfrac{\mathbf{r}(t+h)-\mathbf{r}(t)}{h}
    $$

    De aqui se tiene que cuando $h \rightarrow 0$, parece que este vector se aproxima a un vector que está en la recta tangente. Por esta razón, el vector $\mathbf{r}^{\prime}(t)$ se llama vector tangente a la curva definida por $\mathbf{r}$ en el punto $P$, siempre y cuando $\mathbf{r}^{\prime}(t)$ exista y $\mathbf{r}^{\prime}(t)\neq 0$. La recta tangente a $\mathbb{C}$ en $P$ se define como la recta que pasa por $P$ paralela al vector tangente $\mathbf{r}^{\prime}(t)$. Mencionando el vector tangente unitario, el cual es:

    $$
    \mathbf{T}(t)=\dfrac{\mathbf{r}^{\prime}(t)}{|\mathbf{r}^{\prime}(t)|}
    $$

    Teorema: Si $\mathbf{r}(t)=\langle x_1(t),x_2(t),x_3(t) \rangle=x_1(t)\hat{i}+x_2(t)\hat{j}+x_3(t)\hat{k}$, donde $x_1$,$x_2$ y $x_3$ son funciones derivables, entonces:

    $$
    \mathbf{r}^{\prime}=\langle x_1^{\prime}(t),x_2^{\prime}(t),x_3^{\prime}(t) \rangle=x_1^{\prime}(t)\hat{i}+x_2^{\prime}(t)\hat{j}+x_3^{\prime}(t)\hat{k}
    $$

2. Integrales: La integral definida de una función vectorial continua $\mathbf{r}(t)$ puede definirse casi de igual forma que las funciones con valoresm salvo que la integral es un vector. Y se puede expresar la integral de $\mathbf{r}$ en términos de las integrales de sus funciones componentes $x_1$,$x_2$ y $x_3$ como sigue:

    $$
    \begin{aligned}
    \int_a^b \mathbf{r}(t)dt & = \lim_{n \rightarrow \infty} \sum_{i=1}^n \mathbf{r}(t_i^{*})\Delta t \\\\
    & = \lim_{n\rightarrow \infty} \left[ \left( \sum_{i=1}^n x_1(t_i^{\*})\Delta t \right)\hat{i}+\left( \sum_{i=1}^n x_2(t_i^{\*})\Delta t \right)\hat{j}+\left( \sum_{i=1}^n x_3(t_i^{\*})\Delta t \right)\hat{k} \right]
    \end{aligned}
    $$

    Quedando así:

    $$
    \int_a^b \mathbf{r}(t)dt=\left( \int_a^b x_1(t)dt \right)\hat{i}+\left( \int_a^b x_2(t)dt \right)\hat{j}+\left( \int_a^b x_3(t)dt \right)\hat{k}
    $$

    Extendiendo el teorema fundamental del cálculo a las funciones vectoriales continuas como sigue:

    $$
    \int_a^b \mathbf{r}(t)dt=\mathbf{R}(t)]\_{a}^b =\mathbf{R}(b)-\mathbf{R}(a)
    $$

    donde $\mathbf{R}$ es una antiderivada de $\mathbf{r}$, es decir $\mathbf{R}^{\prime}(t)=\mathbf{r}(t)$.

##### Longitud de arco y curvatura

1. Longitud de arco: Supóngase que la curva tiene la ecuación vectorial $\mathbf{r}(t)=\langle x_1(t),x_2(t),x_3(t) \rangle$, $a\leq t \leq b$ o de igual manera las ecuaciones paramétricas $x=x_1(t)$, $y=x_2(t)$ y $z=x_3(t)$, donde $x_1^{\prime}$,$x_2^{\prime}$ y $x_3^{\prime}$ son continuas. Si la curva es recorrida exactamente una vez cuando $t$ se incrementa de $a$ a $b$, es posible demostrar que su longitud es:

    $$
    \begin{aligned}
    L&=\int_a^b \sqrt{\[x_1^{\prime}]^2+\[x_2^{\prime}]^2+\[x_3^{\prime}]^2} dt \\\\
    &=\int_a^b \sqrt{\left(\dfrac{dx}{dt} \right)^2+\left(\dfrac{dy}{dt} \right)^2+\left(\dfrac{dz}{dt} \right)^2} dt
    \end{aligned}
    $$

    De forma más compacta:

    $$
    L=\int_a^b |\mathbf{r}^{\prime}(t)|dt
    $$

2. Curvatura: La curvatura de $\mathbb{C}$ en un punto dado es una medida de lo rápido que la curva cambia de dirección en ese punto. Más especificamente se define como la magnitud de la razón de cambio del vector tangente unitario con respecto a la longitud de arco.

    Definición: La curvatura de una curva es: $\kappa=\left | \dfrac{d\mathbf{T}}{ds} \right |=\dfrac{|\mathbf{T}^{\prime}(t)|}{\mathbf{r}^{\prime}(t)|}$

    Teorema: La curvatura de la curva dada por la función vectorial $\mathbf{r}$ es: $$\kappa=\dfrac{|\mathbf{r}^{\prime}(t)\times \mathbf{r}^{''}(t)|}{|\mathbf{r}^{'}(t)|^3}$$

#### Función Real de Variable Vectorial

##### Funciones de Varias variables

**Definición**: Una función $f$ de dos variables es una regla la cual asigna a cada par ordenado de números reales $(x,y)$ en un conjunto $\mathbb{D}$ un número real único denotado por $f(x,y)$. Donde se tiene que el conjunto $\mathbb{D}$ es el dominio de $f$ y su rango es el conjunto de valores que $f$ adopta.

Se suele escribir $z=f(x,y)$ para explicitar el valor que adopta $f$ en un punto general $(x,f)$. Teniendo las variables independientes que son $x$ y $y$, y las variables dependientes como $z$.

_Ejemplo: Para la siguiente función, evaluar $f(3,5)$ y determine y trace el dominio._

$$
f(x,y)=\dfrac{\sqrt{x+y+1}}{x-1}
$$

**Solución:** Evaluandolo en $f(3,5)$:

$$
f(3,5)=\dfrac{\sqrt{3+5+1}}{3-1}=\dfrac{\sqrt{9}}{2}=\dfrac{3}{2}
$$

La expresión para $f$ tiene sentido si es que el denominador es diferente de $0$ y la cantidad bajo el signo de la raíz cuadrada no es negativa. Así, se tiene que el dominio de $f$ es:

$$
\mathbb{D}=\{(x,y) \quad | x+y+1\geq 0, x \neq 1 \}
$$

La desigualdad $x+y+1\geq 0$ describe los puntos que se encuentran en o sobre la recta $y=-x-1$, mientras que $x\neq 1$ significa que los puntos sobre la recta $x=1$ deben excluirse del dominio.

-   Curvas de Nivel: Una curva de nivel $f(x,y)=k$ es el conjunto de todos los puntos en el dominio de $f$ en los que $f$ adopta un valor $k$ dado. Es decir que esto nos muestra en que parte de la gráfica de $f$ esta tiene una altura $k$.

-   Definición: Las **curvas de nivel** de una función $f$ de dos variables son las curvas con las ecuaciones $f(x,y)=k$, donde $k$ es una constante.

##### Límites y continuidad de una función real de variable vectorial

###### Límite de una función real de variable vectorial

Definición: Sea $f$ una función de dos variables cuyo dominio $\mathbb{D}$ incluye puntos arbitraimente cerca de $(a,b)$. Se dice entonces que el límite de $f(x,y)$ cuando $(x,y)$ se aproxima a $(a,b)$ es $L$ y se denota de la forma

$$
\lim_{(x,y)\rightarrow (a,b)} f(x,y)=L
$$

si para cada número $\varepsilon > 0$ hay un correspondiendo número $\varDelta >0$ tal que $(x,y) \in \mathbb{D}$ y $0 < \sqrt{(x-a)^2+(y-b)^2} < \varDelta$ entonces $|f(x,y)-L|< \varepsilon$.

###### Continuidad de una función real de variable vectorial

Definición: Una función $f$ de dos variables se llama continua en $(a,b)$ si se cumple que:

$$
\lim_{(x,y) \rightarrow (a,b)} f(x,y)=f(a,b)
$$

Se dice que $f$ es continua en $\mathbb{D}$ si $f$ es continua en cada punto $(a,b)$ en $\mathbb{D}$.

##### Derivadas parciales

En general, si $f$ es una función de dos variables $x$ y $y$, sus derivadas parciales son las funciones $f_x=\dfrac{\partial f(x,y)}{\partial x}$ y $f_y=\dfrac{\partial f(x,y)}{\partial y}$.

$$
f_x=\dfrac{\partial f(x,y)}{\partial x}=\lim_{h \rightarrow 0} \dfrac{f(x+h,y)-f(x,y)}{h}
$$

$$
f_y=\dfrac{\partial f(x,y)}{\partial x}=\lim_{h \rightarrow 0} \dfrac{f(x,y+h)-f(x,y)}{h}
$$

###### Derivadas de orden superior

Si $f$ es una función de dos variables, sus derivadas parciales $f_x$ y $f_y$ también son funciones de dos variables, así que se pueden considerar su derivadas parciales $(f_x)_x$, $(f_x)_y$, $(f_y)_x$ y $(f_y)_y$, llamadas segundas derivadas parciales de $f$.

$$
\begin{aligned}
(f_x)\_x=f\_{xx}&=\dfrac{\partial}{\partial x} \left ( \dfrac{\partial f}{\partial x} \right)=\dfrac{\partial^2 f}{\partial x^2} \\\\
(f_x)\_y=f\_{xy}&=\dfrac{\partial}{\partial y} \left ( \dfrac{\partial f}{\partial x} \right)=\dfrac{\partial^2 f}{\partial y \partial x} \\\\
(f_y)\_x=f\_{xx}&=\dfrac{\partial}{\partial x} \left ( \dfrac{\partial f}{\partial y} \right)=\dfrac{\partial^2 f}{\partial x \partial y} \\\\
(f_y)\_y=f\_{yy}&=\dfrac{\partial}{\partial y} \left ( \dfrac{\partial f}{\partial y} \right)=\dfrac{\partial^2 f}{\partial y^2}
\end{aligned}
$$

##### Derivadas direccionales y vector gradiente

###### Derivadas direccionales

Definición: La **derivada direccional** de $f$ en $(x_0,y_0)$ en la direccion de un vector unitario $\mathbf{u}=\langle a, b \rangle$ se define como:

$$
\mathbb{D}_{\mathbf{u}} f(x\_0,y\_0)=\dfrac{\partial f(x\_0,y\_0)}{\partial \mathbf{u}}=\lim\_{h \rightarrow 0} \dfrac{f(x\_0+h_a,y\_0+h_b)-f(x\_0,y\_0)}{h}
$$

Teorema: Si $f$ es una función derivable de $x$ y $y$, entonces $f$ tiene una derivada direccional en la dirección de cualquier vector unitario $\mathbf{u}=\langle a,b \rangle$ y

$$
\mathbb{D}_{\mathbf{u}} f(x,y)=f_x (x,y)a+f_y (x,y)b
$$

###### El vector gradiente

Definición: Si $f$ es una función de dos variables $x$ y $y$, entonces el gradiente de $f$ es la función vector $\nabla f$ definida por:

$$
\nabla f(x,y)=\langle f_x (x,y), f_y(x,y) \rangle = \dfrac{\partial f}{\partial x} \hat{i}+\dfrac{\partial f}{\partial y} \hat{j}
$$

Ejemplo: Si $f(x,y)=\sin{x}+e^{xy}$, entonces:

$$
\nabla f(x,y)=\langle f_x , f_y \rangle= \langle \cos{x} +ye^{xy}, xe^{xy} \rangle
$$

###### La derivada direccional en términos del vector gradiente

Se tiene:

$$
\mathbb{D}_{\mathbf{u}} f(x,y)= \nabla f(x,y) \cdot \mathbf{u}
$$

Esto expresa la derivada direccional en la dirección de un vector unitario $\mathbf{u}$ como la proyección escalar del vector gradiente en $\mathbf{u}$.

##### Planos tangentes

###### Vector normal

Teorema: Si una ecuación de una superficie $\mathbb{S}$ es $f(x,y,z)=0$ y $f_x,f_y,f_z$ son continuas y $P_0 (x_0,y_0,z_0)$ es un punto del plano de $\mathbb{S}$, entonces un vector normal a $\mathbb{S}$ en $P_0$ es $\vec{N}= \nabla f(x_0,y_0,z_0)$.

###### Ecuación del plano tangente

Definición: Si una ecuación de una superficie $\mathbb{S}$ es: $f(x,y,z)=0$, entonces el plano tangente de $\mathbb{S}$ en un punto $P_0 (x_0,y_0,z_0)$ es el plano que tiene como vector normal a $\vec{N}=\nabla f(x_0,y_0,z_0)$ y la ecuación del plano tangente esta dado por:

$$
\mathbb{D}_1 f(x_0,y_0,z_0)(x-x_0)+\mathbb{D}_2 f(x_0,y_0,z_0)(y-y_0)+\mathbb{D}_3 f(x_0,y_0,z_0)(z-z_0)=0.
$$

###### Ecuación simétrica de la recta normal

Definición: La recta normal a la superficie $\mathbb{S}$ en el punto $P_0 \in \mathbb{S}$ es la recta que pasa a través de $P_0$ y sigue la dirección del vector normal del plano tangente a $\mathbb{S}$ en $P_0$.

La ecuación simétrica de la recta normal a S en $P_0(x_0,y_0,z_0)$ es:

$$
\dfrac{x-x_0}{\mathbb{D}_1 f(x_0,y_0,z_0)}=\dfrac{y-y_0}{\mathbb{D}_2 f(x_0,y_0,z_0)}=\dfrac{z-z_0}{\mathbb{D}_3 f(x_0,y_0,z_0)}
$$

{{< details "Máximos y Mínimos" >}} {{< /details >}}

{{< details "Multiplicadores de Lagrange" >}} {{< /details >}}

#### Integrales Múltiples

{{< details "Integrales dobles" >}} {{< /details >}}

{{< details "Cambio de coordenadas en integrales dobles" >}} {{< /details >}}

{{< details "Integrales triples" >}} {{< /details >}}

{{< details "Cambio de coordenadas en integrales triples" >}} {{< /details >}}

#### Cálculo Vectorial

{{< details "Campos Vectoriales" >}} {{< /details >}}

{{< details "Integrales de Línea" >}} {{< /details >}}

{{< details "Teorema de Green" >}} {{< /details >}}

{{< details "Rotacional y divergencia" >}} {{< /details >}}

{{< details "Integrales de Superficie" >}} {{< /details >}}

{{< details "Teorema de Stokes" >}} {{< /details >}}

{{< details "Teorema de la divergencia" >}} {{< /details >}}
