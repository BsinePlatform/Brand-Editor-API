const Database = use('Database');

module.exports = async function(user_id){
    const bucketUser = await Database.select('*').from('users')
                        .innerJoin('stores', 'users.id_store', 'stores.id')
                        .innerJoin('companies', 'companies.id', 'stores.id_company')
                        .where('users.id', user_id);

    

    let bucket = false;
    bucketUser.filter(item => {
        bucket = item.bucket_name;
    });
    
    return bucket;
}