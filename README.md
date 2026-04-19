# Menú saludable familiar para GitHub Pages

## Estructura

- `index.html`: página principal
- `assets/styles.css`: estilos
- `assets/app.js`: lógica del menú, compras, costos y configuración
- `recetas/`: aquí colocas las imágenes de las recetas
- `data/config-ejemplo.json`: ejemplo de respaldo/importación
- `.nojekyll`: evita problemas de publicación en GitHub Pages

## Cómo publicarlo

1. Crea un repositorio nuevo en GitHub.
2. Sube todos estos archivos manteniendo la misma estructura de carpetas.
3. Ve a **Settings > Pages**.
4. En **Build and deployment**, selecciona:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Guarda y espera a que GitHub publique la página.

## Cómo guardar cambios

La página guarda automáticamente en este navegador:
- nombres de la familia
- base de precios

Eso funciona con `localStorage`.

## Cómo mover la configuración a otro dispositivo

1. Abre la pestaña **Costos**.
2. Pulsa **Exportar configuración**.
3. Se descargará un archivo JSON.
4. En otro dispositivo o navegador, abre la misma página.
5. Pulsa **Importar configuración** y selecciona el JSON.

## Cómo cargar imágenes de recetas

La página busca imágenes dentro de la carpeta `recetas/`.

Usa nombres normalizados como estos ejemplos:
- `recetas/avena-proteica-con-yogurt-chia-y-fruta.jpg`
- `recetas/pollo-al-limon-con-arroz-integral-y-brocoli.jpg`

La página intenta leer, en este orden:
- `.jpg`
- `.jpeg`
- `.png`
- `.webp`

## Nota práctica

Si cambias los precios en la página, **no se actualiza el código del repositorio**. Se guardan solo en el navegador hasta que exportes el JSON.
