const Database = use('Database');

module.exports = async function(user_id){
    const bucketUser = await Database.select('*').from('users')
                        .innerJoin('companies', 'users.id_company', 'companies.id')
                        .where('users.id', user_id);

    let bucket = false;
    bucketUser.filter(item => {
        bucket = item.bucket_name;
    });
    
    return bucket;
}