# Backend encuestas NDT

Necesitamos crear un backend con las sigentes characteristicas:
-Servir archivos estaticos (index, login, vizualizaciones...)
-Poder almanezar users
-Poder almanezar reviews

## Base de Datos

-Utilizamos SQLlite, con dos tablas, `users` y `reviews`.

-user
    -name
    -passwords
-reviews
    -rating
    -message


## api

### POST/api/reviews?rating="good"&message="ta flama"

-Endpoint para recibir los datos del usuario

```json
    "rating": "good",
    "message": "lo que sea"
´´´