'use strict'

const AWS = require('aws-sdk'); 

AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
AWS.config.region = "us-east-1";

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

class AwsS3 {

    constructor(){
        
    }

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
}

module.exports = AwsS3