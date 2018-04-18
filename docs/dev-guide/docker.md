# Docker

**Build the machine**<br/>
`docker-compose up --build`

**Start the machine**<br/>
`docker-compose start`

**Stop the machine**<br/>
`docker-compose stop`

**SSH into the machine**<br/>
`docker exec -it pitchbook_app_1 /bin/bash`

**Re-build database and seed (all data removed)**<br/>
`docker-compose exec app php artisan migrate:fresh --seed`
