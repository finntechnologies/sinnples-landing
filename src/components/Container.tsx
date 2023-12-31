import clsx from 'clsx'
import { ReactNode } from 'react';

type ContainerProps = {
    className?: string;
    children: ReactNode
}

export function Container({ className, ...props }: ContainerProps) {
    return (
        <div
            className={clsx('mx-auto px-4 sm:px-6 lg:px-8 max-w-full overflow-x-hidden', className)}
            {...props}
        />
    )
}
