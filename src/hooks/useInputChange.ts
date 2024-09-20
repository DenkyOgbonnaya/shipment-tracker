import {useState} from 'react';

// Handles dynamic form input change
export type InputChangeHandler = (name: string, value: any) => void;

export type StatePatcher = (state: any) => void;

export default function useInputChange<T>(val: T) {
  const [input, setInput] = useState<T>(val);

  const onChange = (name: keyof T, value: any) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const patchState = (state: T) => {
    setInput(state);
  };

  return {input, onChange, patchState};
}
