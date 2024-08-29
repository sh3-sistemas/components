import type { IconProps } from "@/types";
export interface Sh3IconButtonProps {
    styling: string;
    icon: IconProps;
}

export type SubmitButton = {
    form: string;
    addStyle: string;
    label: string;
};

import type Sh3Button from "./Sh3Button";

export type { Sh3Button }