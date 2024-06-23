import { Suspense } from 'react';
import { classNames } from 'shared/lib';

import { AppRouter } from './providers';

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                {/* <Navbar /> */}
                <div className="content-page">
                    {/* <Sidebar /> */}
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
