import { createContext, Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAosVP_XXWb_y3e3ieM2wjMCeuwA2dDf6g',
    authDomain: 'tiktok-ui-demo.firebaseapp.com',
    projectId: 'tiktok-ui-demo',
    storageBucket: 'tiktok-ui-demo.appspot.com',
    messagingSenderId: '87567196965',
    appId: '1:87567196965:web:833edf3def6aebabb9f0cc',
    measurementId: 'G-368B9QCJBJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <GlobalContext.Provider value={{ fullscreen, setFullscreen }}>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </GlobalContext.Provider>
    );
}

export default App;
export const GlobalContext = createContext();
