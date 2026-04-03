import React,{Suspense, useState} from "react";

const HomePage = React.lazy(() => import('./lazyLoadingComponentB'));
const SettingsPage = React.lazy(() => import('./lazyLoadingComponentC'))

export const LazyLoadingComponentA = () => {
    const [showHomePage,setShowHomePage] = useState(false);
    const [showSettingsPage,setShowSettingsPage] = useState(false);

    return(
        <>
            <button onClick={() => setShowHomePage(true)}>Toggle Home page</button>
            
            <button onClick={() => setShowSettingsPage(true)}>Toogle Settings Page</button>

            <Suspense fallback={<div>Loading.......</div>}>
                {showHomePage && <HomePage/>}
                {showSettingsPage && <SettingsPage/>}
            </Suspense>
            
        </>
    )
}