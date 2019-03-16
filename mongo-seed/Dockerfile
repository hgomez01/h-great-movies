FROM mongo

# Creating folder which will be used as working directory
RUN mkdir -p /usr/src/seeds

# Setting work directory
WORKDIR /usr/src/seeds

# Copying the seeds file to container
COPY . /usr/src/seeds

# Inserting movies in database
CMD mongoimport --host mongo_db --db greatmovies --collection test01 --type json --file seeds/movies-seeds.json --jsonArray
