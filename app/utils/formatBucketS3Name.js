module.exports = function (nm_company, nr_cnpj) {
    let company = nm_company.split(" ").join("").toLowerCase();
    return company+nr_cnpj;
}