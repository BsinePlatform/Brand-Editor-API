module.exports = {    
    formatBucketS3Name: function (nm_company) {
        return nm_company.split(" ").join("").toLowerCase();
    },

    formatNumber: function (clearNumber) {
        return clearNumber.replace(/[^\d]+/g, '')
    },

    generateRandomName: function () {
        const uniqid = require('uniqid');
        return uniqid();
    },

    getBucket: async function (user_id) {
        const Database = use('Database');
        const bucketUser = await Database.select('*').from('users')
            .innerJoin('stores', 'users.id_store', 'stores.id')
            .innerJoin('companies', 'companies.id', 'stores.id_company')
            .where('users.id', user_id);

        if(bucketUser) {
            return bucketUser[0].bucket_name
        }

        throw 'Error: Bucket not found!'
    }   
}

