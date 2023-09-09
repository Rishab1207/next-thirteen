# Observations

1. Dev mode - In case of static, dynamic page and on both client and server side all the 3 methods (fetch, cached axios, uncached axios) returned updated data
2. Local prod mode 
   1. Client side static page - updated data was served
   2. Server side dynamic page - fetch cached the request, cached axios still returned updated data
   3. Server side static page - fetch cached the request, cached axios still returned updated data
