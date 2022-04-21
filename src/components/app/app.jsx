import Layout from '../layout/layout';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/main';
import Faq from '../../pages/faq/faq';
import Error from '../../pages/error/error';
import Feedback from '../../pages/feedback/feedback';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="*" element={<Error />} />
                </Route>

            </Routes>
        </>
    );
}

export default App;
