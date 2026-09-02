import { AnimationContext } from "app/context";
import { useContext } from "react";
import { Button } from "shared/UIKit/Button";

export const ResetAnimationButton = () => {
    const {resetSettings} = useContext(AnimationContext);

    const onClick = () => {
        resetSettings();
    }

    return (
        <Button onClick={onClick}>Reset</Button>
    );
}