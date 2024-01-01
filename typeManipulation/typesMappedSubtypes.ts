/**
 * @description Mapped Types but extracting subsets of properties
 */

interface Individual {
  age: number;
  name: string;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];
}

type IndividualFormBasic = Pick<Individual, "name" | "age">;

type IndividualAddressForm = Pick<Individual, "address">;

// to ensure that all the properties of Individual are included in IndividualFormBasic and IndividualAddressForm
type GetUnusedProps<BaseType, FTypes> = Exclude<keyof BaseType, keyof FTypes>;

type IndividualUnusedProps = GetUnusedProps<Individual, IndividualFormBasic & IndividualAddressForm>;
//   ^?