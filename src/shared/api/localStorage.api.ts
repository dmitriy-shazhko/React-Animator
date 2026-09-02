import { AnimationSettings } from "app/context"

export const getSettingsFromLS = (elementId: string) => {
    const settings = localStorage.getItem(elementId)
    if(settings) {
        return JSON.parse(settings)
    }
}

export const setSettingsToLS = (elementId: string, settings: AnimationSettings) => {
    localStorage.setItem(elementId, JSON.stringify(settings))
}

export const resetSettingsInLS = (elementId: string) => {
    localStorage.removeItem(elementId);
}
