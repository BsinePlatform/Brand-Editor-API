'use strict'

const AWS = require('aws-sdk'); 
const fs = require('fs');

AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
AWS.config.region = "us-east-1";

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

class AwsS3 {

    constructor(){
        
    }

    // Create Bucket in S3
    createBucketInS3(bucketName){
        var bucketParams = {
            Bucket : bucketName,
            ACL : 'private'
        };

          // call S3 to create the bucket
        s3.createBucket(bucketParams, function(err, data) {
            if (err) {
                return err;
            } else {
                return data.Location;
            }
        });
    }

    // Upload file in Bucket
    uploadFileS3(bucketName, file) {
        const fileContent = fs.readFileSync(file);

        // Setting up S3 upload parameters
        const params = {
            Bucket: bucketName,
            Key: 'cat.png', // File name you want to save as in S3
            Body: fileContent
        };

        // Uploading files to the bucket
        s3.upload(params, function(err, data) {
            if (err) {
                throw err;
            }
            console.log(`File uploaded successfully. ${data.Location}`);
        });
    }
}

module.exports = AwsS3