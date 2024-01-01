type ControlValue = string;

interface ControlValidators {
    required: boolean;
    minLength: number;
    maxLength: number;
}; 

interface ControlAsyncValidators {
    required: boolean;
    minLength: number;
    maxLength: number;
};

type Control = [ControlValue, ControlValidators, ControlAsyncValidators];

// @ts-expect-error
const control: Control = [  ]