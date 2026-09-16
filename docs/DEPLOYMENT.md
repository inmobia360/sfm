# Despliegue de la demo

## GitHub Pages

El repositorio contiene `.github/workflows/pages.yml`, que publica el contenido estático de `main`.

Para habilitarlo una sola vez en GitHub:

1. Abrir **Settings → Pages** del repositorio `inmobia360/sfm`.
2. En **Build and deployment**, seleccionar **GitHub Actions**.
3. Esperar a que termine el workflow `Deploy SFM demo to GitHub Pages`.
4. Abrir `https://inmobia360.github.io/sfm/launch.html`.

La demo no necesita variables de entorno, API keys ni servidor backend.

## Comprobación local

```powershell
python -m http.server 4173
```

Después abrir `http://127.0.0.1:4173/launch.html`.

## Límites

GitHub Pages sirve la demo estática. No proporciona autenticación, base de datos, permisos de servidor, almacenamiento seguro ni integraciones productivas; esos elementos pertenecen a la siguiente fase.
