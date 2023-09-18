//? EXTENDING TYPES ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example 1: Extending object types with interface
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

// Example 2: Extending object types with type intersection

type AddressWithUnitType = BasicAddress & { unit: string };
type CompanyAddressType = BasicAddress & { companyName: string };

/*
    Interface vs Intersection Type
    - The principal difference between the two is how conflicts are handled when an object literal implements multiple types that have overlapping properties.
*/
