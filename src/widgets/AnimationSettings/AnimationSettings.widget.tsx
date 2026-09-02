import { ChangeEvent, FC, useCallback, useContext } from 'react';
import styles from './AnimationSettings.module.css';
import { classNames } from 'shared/lib';
import { AnimationProperty } from 'features/AnimationProperty';
import { AnimationContext } from 'app/context';
import { ResetAnimationButton } from 'features/ResetAnimationButton';

interface IAnimationSettings {
    className?: string
}

export const AnimationSettings:FC<IAnimationSettings> = ({className}) => {
    const {settings, changeSettings} = useContext(AnimationContext);

    const setSettingsHandler = useCallback((e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
        if(e.target.type === 'checkbox') {
            changeSettings({...settings, [e.target.name]: e.target.checked})
        } else {
            changeSettings({...settings, [e.target.name]: e.target.value})
        }
    }, [changeSettings, settings])

    return (
        <aside className={classNames(styles.container, className)}>
            <AnimationProperty 
                onChange={setSettingsHandler} 
                name='x'
                type='range' 
                title='X' 
                value={settings.x} 
                textValue={settings.x}
                max={1000}
                min={-1000}
            />
            <AnimationProperty 
                onChange={setSettingsHandler}
                name='y'
                type='range' 
                title='Y' 
                value={settings.y} 
                textValue={settings.y}
                max={1000}
                min={-1000}
            />
            <AnimationProperty 
                onChange={setSettingsHandler}
                name='opacity'
                type='range' 
                title='Opacity' 
                value={settings.opacity} 
                textValue={`${(Number(settings.opacity) * 100).toFixed(0)}%`}
                max={1}
                step={0.01}
            />
            <AnimationProperty 
                onChange={setSettingsHandler}
                name='scale' 
                title='Scale'
                type='range' 
                value={settings.scale} 
                textValue={settings.scale}
                step={0.01}
                max={5}
            />
            <AnimationProperty 
                onChange={setSettingsHandler}
                title='Blur'
                type='range' 
                name='blur' 
                value={settings.blur} 
                textValue={settings.blur}
            />
            <AnimationProperty 
                onChange={setSettingsHandler}
                title='Speed'
                type='range' 
                name='speed' 
                value={settings.speed} 
                textValue={`${settings.speed}s`}
                max={5}
                step={0.1}
            />
            <AnimationProperty 
                onChange={setSettingsHandler}
                title='Delay'
                type='range' 
                name='delay' 
                value={settings.delay} 
                textValue={`${settings.delay}s`}
                max={5}
                step={0.1}
            />
            <AnimationProperty 
                onChange={setSettingsHandler} 
                name='easing' 
                type='select' 
                title='Easing' 
                value={settings.easing}
            >
                <option value="ease">Ease</option>
                <option value="ease-in">Ease-in</option>
                <option value="ease-out">Ease-out</option>
                <option value="ease-in-out">Ease-in-out</option>
                <option value="linear">Linear</option>
                <option value="step-start">Step-end</option>
            </AnimationProperty>
            <ResetAnimationButton />
        </aside>
    );
}