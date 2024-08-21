FROM mongo:4.4.7

# Create a script that initializes the replica set when the container starts
RUN echo "rs.initiate();" > /docker-entrypoint-initdb.d/replica-init.js

# Run MongoDB with replica set enabled
CMD ["mongod", "--replSet", "rs"]
