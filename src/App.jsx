import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

import Gallery from './pages/Gallery';
import Product from './pages/Product';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />

                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="product" element={<Product />} />
                        <Route path="gallery" element={<Gallery />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
