/**
 * Created by stasi on 06.02.2017.
 */
var CountrysH = {};

function AddCountry(CountryName, CapitalName) {
    CountrysH[CountryName] = CapitalName;
}

function DeleteCountry(CountryName) {
    delete CountrysH[CountryName];
}

function GetCountryInfo(CountryName) {
    if (CountryName in CountrysH)
        return 'страна: ' + CountryName + ' столица: ' + CountrysH[CountryName];
    else
        return 'нет информации о стране ' + CountryName + '!';
}

function ListCountrys() {
    var Res = "";
    for (var CN in CountrysH)
        Res += '\n' + GetCountryInfo(CN);
    return Res;
}

AddCountry('Германия', 'Берлин');
AddCountry('Венгрия', 'Будапешт');
AddCountry('Франция', 'Париж');

console.log("список стран:" + ListCountrys());

