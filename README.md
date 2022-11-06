This is a pet project.

## Getting Started

First, run the development server:

```bash
npm i
```

Run backend

```bash
docker-compose up -d
```

```bash
npm run dev
```

```bash
npx hasura server
```

server/csv.scv file is downloaded from
https://tyresaddict.com/help/databases/cars/

Models can be downloaded from https://www.back4app.com/database/back4app/car-make-model-dataset

Download backups

```bash
docker cp -L backups:/backups/last/db-latest.sql.gz ./backup.sql.gz
```

Copy backups from ssh

```bash
ssh autolist.lt "docker cp -L backups:/backups/last/db-latest.sql.gz ./backup.sql.gz" && scp autolist.lt:./backup.sql.gz .
```
