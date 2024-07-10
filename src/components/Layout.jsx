import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainCon = styled.main`
    height: auto;
    
`;

const Layout = () => {
    return (
        <div>
            <Header />
            <MainCon>
                <Outlet />
                {/* 이곳은 자식 라우터들이 렌더링 되어 교체되는 곳 */}
            </MainCon>
            <Footer />
        </div>
    );
};

export default Layout;
