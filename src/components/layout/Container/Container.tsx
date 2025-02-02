import React from 'react';
import cls from './Container.module.scss'

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
    return (
        <div className={cls.Container}>
            {children}
        </div>
    );
};

export default Container;