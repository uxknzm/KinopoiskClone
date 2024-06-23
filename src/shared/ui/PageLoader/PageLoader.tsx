import { FC } from 'react';
import { classNames } from 'shared/lib';

import cls from './PageLoader.module.sass';

import Loader from '../Loader/Loader';

export interface PageLoaderProps {
    className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
