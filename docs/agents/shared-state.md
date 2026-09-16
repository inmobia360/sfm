# Estado compartido entre vistas

`data.js` incorpora suscripción a eventos de almacenamiento y `BroadcastChannel`. Esto permite que una futura vista se suscriba a cambios del estado central y refresque sus métricas sin depender de una base de datos durante la demo.

En producción, este mecanismo será sustituido por eventos del backend, colas o websockets con autorización por organización y división. El navegador nunca será la fuente de verdad para permisos o decisiones laborales.
