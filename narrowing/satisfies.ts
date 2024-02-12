const config: Record<string, string | number> = {
  name: "John Doe",
  age: 42,
  occupation: "Software Engineer",
};

config.fname = "John";

const configSatisfies = {
  name: "John Doe",
  age: 42,
  occupation: "Software Engineer",
} satisfies Record<string, string | number>;

// @ts-expect-error
configSatisfies.fname = "John";

type Control = {
  errors: ValidationErrors | null;
}

type ValidationErrors = {
    [key: string]: any;
};

function getControlErrors(control: Control) {
  return control.errors satisfies null | ValidationErrors | { required: boolean };
}