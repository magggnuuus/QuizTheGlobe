FROM openjdk:15

MAINTAINER Magnus Schengel <19mag.nus87@gmail.com>

ADD backend/target/quotywood.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -jar /app.jar"]