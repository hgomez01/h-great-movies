FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongo_db --db reach-engine --collection MyDummyCollection --type json --file /init.json --jsonArray