![footer](https://user-images.githubusercontent.com/102321874/163689065-b8e786e9-bc89-4745-ab73-2a3efd84d483.png)

npm run dev - to run on localhost

npm run export - to build and export

Use 'Out' folder to host static site

Site hosted on AWS S3 - anthropolo.io

one bucket for non-www & one bucket for www domain with public access and bucket policy enabled

S3 is served through CloudFront distribution

CloudFront maps ACM certificate for domain names

Route 53 has two separate A(mapped to CloudFront Distribution) & CNAME records(mapped to ACM)
