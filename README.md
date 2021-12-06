# TODO APP
Yapılacaklar listesi uygulaması.

## Build
Gerekli paketlerin yüklenebilmesi için
```
npm install
```
komutu çalıştırılması gereklidir.

## Test
Proje her iki yüz için A-TDD ile geliştirilmiştir.

Frontendde yer alan component, unit ve contract testlerini çalıştırmak için
```
npm run test
```
komutu çalıştırılması yeterlidir.

Backendde yer alan CDC test ve -ilave olarak eklenen- integration testini çalıştırmak için 
```
npm run test
```
komutu çalıştırılması yeterlidir.

## Start
Testler tamamlandıktan sonra iki projeyi de başlatmak için
```
npm run start
```
komutu çalıştırılması yeterlidir.

## Deployment
Proje frontend ve backend kısımları için Github repoları eşleştirilerek ayrı ayrı Heroku üzerinde deploy edilmiştir.

###### Uygulamanın güncel versiyonlarının direkt erişim linklerine aşağıdan ulaşabilirsiniz.
FRONTEND: eklenecek...
BACKEND: eklenecek...

Github repoları güncellendiğinde Cloud Server(Heroku) build ve deploy aşamalarını yeni versiyon üzerinden çalıştıracak şekilde otomatize edilmiştir.

## Docker
Dockerfile dosyaları her iki projenin içinde yer almaktadır.
###### Not: Geliştirme yapılan bilgisayarda docker kurulamaması sebebiyle docker image dosyaları oluşturulamamıştır.

## Architect
### FRONTEND
Frontend projesi ReactJS ile geliştirilmiştir.
Testler Jest, Enzyme ve Pact ile geliştirilmiştir.
Client request Axios ile geliştirilmiştir.
### BACKEND
Backend projesi NodeJS/ExpressJS ile geliştirilmiştir.
Veritabanı olarak MongoDb Atlas kullanılmıştır.
ODM olarak Mongoose kullanılmıştır.
Testler Jest, Supertest ve Pact ile geliştirilmiştir.
### CLOUD PROVIDER
Projeler Heroku üzerinden Github aracılığıyla deploy edilmiştir.