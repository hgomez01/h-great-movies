FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongo_db --db testdb01 --collection test01 --type json --file /init.json --jsonArray