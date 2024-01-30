/// <reference types="react" />
import { ChalkInstance } from 'chalk';
import type { Except } from 'type-fest';
export type Props = {
    /**
     * Text to display when `value` is empty.
     */
    placeholder?: string;
    /**
     * Color to use when rendering placeholders.
     */
    placeholderColor?: ChalkInstance;
    /**
     * Listen to user's input. Useful in case there are multiple input components
     * at the same time and input must be "routed" to a specific component.
     */
    focus?: boolean;
    /**
     * Replace all chars and mask the value. Useful for password inputs.
     */
    mask?: string;
    /**
     * Whether to show cursor and allow navigation inside text input with arrow keys.
     */
    showCursor?: boolean;
    /**
     * Highlight pasted text
     */
    highlightPastedText?: boolean;
    /**
     * Value to display in a text input.
     */
    value: string;
    /**
     * Function to call when value updates.
     */
    onChange: (value: string) => void;
    /**
     * Function to call when `Enter` is pressed, where first argument is a value of the input.
     */
    onSubmit?: (value: string) => void;
};
declare function TextInput({ value: originalValue, placeholder, placeholderColor, focus, mask, highlightPastedText, showCursor, onChange, onSubmit }: Props): JSX.Element;
export default TextInput;
type UncontrolledProps = {
    /**
     * Initial value.
     */
    initialValue?: string;
} & Except<Props, 'value' | 'onChange'>;
export declare function UncontrolledTextInput({ initialValue, ...props }: UncontrolledProps): JSX.Element;
