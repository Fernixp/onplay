# 📖 Guía de Instalación y Organización – OnPlay

## 1. Requisitos
- Tener instalado Git.
- Un editor de código como VS Code.
- Un navegador web actualizado (Chrome, Firefox, Edge).

## 2. Clonar el repositorio
git clone https://github.com/fernixp/onplay.git 

cd onplay

## 3. Estructura del proyecto
El proyecto está dividido en carpetas:

- /css → contiene los estilos globales (styles.css).
- /js → contiene los scripts de la página (main.js).
- /partials → contiene el navbar.html y footer.html que se cargan dinámicamente.
- /pages → cada integrante trabaja su propia página aquí.

## 4. Cómo trabajar
1. Asegúrate de estar en la rama main y actualiza con:
   git pull origin main

2. Crea una nueva rama con tu nombre o tu página asignada seguido de tu nombre:

   git checkout -b recomendaciones-fernando

3. Trabaja en tu archivo dentro de /pages/.

4. Haz commit de tus cambios:
   git add .
   git commit -m "Agrego página de recomendaciones"

5. Sube la rama:
   git push origin peliculas

6. Haz un Pull Request en GitHub para revisión.

## 5. Buenas prácticas
- No modificar las páginas de otros compañeros.
- Los cambios en /partials, /css y /js deben coordinarse entre todos.
- De ser posible crea tu propio archivo css y js e importalo en tu pagina correspondiente
- Revisar y dar sugerencias sobre PRs de otros integrantes.

---
✅ Con esto cada integrante sabe cómo colaborar y mantener el proyecto ordenado.
