//? EXTENDING TYPES ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
    unit: string;
}

interface CompanyAddress extends BasicAddress {
    companyName: string;
}

// Dictionary of addresses only
interface AddressDictionary {
    [index: string]: AddressWithUnit | CompanyAddress;
    home: AddressWithUnit;
    work: CompanyAddress;
}

const addressDictionary: AddressDictionary = {
    home: { street: "123", city: "London", country: "UK", postalCode: "SW12", unit: "1" },
    work: { street: "456", city: "London", country: "UK", postalCode: "SW12", companyName: "Microsoft" }
};