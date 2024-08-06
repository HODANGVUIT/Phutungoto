import React, { useState } from 'react';
import Header from '../../Components/Header';
import { Modal, Box } from '@mui/material';
import PTG1 from '../Phutungmay/images/Ong-gio-co-hut- Mercedes.jpg';
import PTG2 from '../Phutungmay/images/Co-hut-Matiz-Groove.jpg';
import PTG3 from '../Phutungmay/images/Co-hut-K3-Elantra.jpg';
import PTG4 from '../Phutungmay/images/Co-hut-Altis-2021.jpg';
import PTG5 from '../Phutungmay/images/Cam-bien-gio.jpg';
import PTG6 from '../Phutungmay/images/Cam-bien-gio-Carnival.jpg';
import PTG7 from '../Phutungmay/images/Bom-xang-Forte.jpg';
import PTG8 from '../Phutungmay/images/Bom-nuoc-Chairman.jpg';
import PTG9 from '../Phutungmay/images/Bom-dau-Rush.jpg';
import '../../Pages/Phutung.css';
import Footer from '../../Components/Footer';
import Trademark from '../../Components/Trademark';

const Phutunggam = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [visiblePhutunggam, setVisiblePhutunggam] = useState(6);

    const handleOpenModal = (imageUrl) => {
        setModalImage(imageUrl);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleLoadMore = () => {
        setVisiblePhutunggam((prevVisiblePhutunggam) => prevVisiblePhutunggam + 6);
    };

    const phutunggam = [
        { name: 'Ống gió cổ hút Mercedes E240', imageUrl: PTG1, description: 'Ống gió cổ hút Mercedes E240 - A1120943482 - A1120943482', price: '1,500,000 VND' },
        { name: 'Cổ hút Matiz Groove', imageUrl: PTG2, description: 'Cổ hút Matiz Groove - 25192807', price: '1,500,000 VND' },
        { name: 'Cổ hút gió Kia Rondo', imageUrl: PTG3, description: 'Cổ hút gió Kia Rondo - 283102E050', price: '1,500,000 VND' },
        { name: 'Cổ hút Altis 2021', imageUrl: PTG4, description: 'Cổ hút Altis 2021 1.8 - 171200T100 - 1622006901', price: '1,500,000 VND' },
        { name: 'Cảm biến gió 6G72 Pajero V33', imageUrl: PTG5, description: 'Cảm biến gió 6G72 Pajero V33 (Cảm biến lưu lượng khí nạp) - MD357338', price: '1,500,000 VND' },
        { name: 'Cảm biến gió Carniva', imageUrl: PTG6, description: 'Cảm biến gió Carnival 2.5 2004 - 2816437200 - 2816437100 - 0K55813210', price: '1,500,000 VND' },
        { name: 'Bơm xăng Forte', imageUrl: PTG7, description: 'Bơm xăng Forte - 311101M000 - 311101M500 - 311101M000', price: '1,500,000 VND' },
        { name: 'Bơm nước Chairman 2009', imageUrl: PTG8, description: 'Bơm nước Chairman 2009 - 1622006901 - 311101M000', price: '1,500,000 VND' },
        { name: 'Bơm dầu Rush 2019 (Bơm nhớt)', imageUrl: PTG9, description: 'Bơm dầu Rush 2019 (Bơm nhớt) - 11310BZ130', price: '1,500,000 VND' },
    ];

    return (
        <section id="product">
            <div>
                <Header />
            </div>
            <div className="product-container">
                <h1>Danh sách sản phẩm phụ tùng máy ô tô</h1>
                <div className="product-list-container">
                    <ul className="product-list">
                        {phutunggam.slice(0, visiblePhutunggam).map((item, index) => (
                            <li key={index} className="product-item">
                                <h3>{item.name}</h3>
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    onClick={() => handleOpenModal(item.imageUrl)}
                                    className="product-image"
                                />
                                <p className="product-description">{item.description}</p>
                                <p className="product-price">{item.price}</p>
                                <button className="add-to-cart">Mua Hàng</button>
                            </li>
                        ))}
                    </ul>
                </div>
                {visiblePhutunggam < phutunggam.length && (
                    <button onClick={handleLoadMore} className="load-more">
                        Xem thêm
                    </button>
                )}
            </div>

            <Modal open={openModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '80%',
                        maxWidth: '800px',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 2,
                        textAlign: 'center',
                    }}
                >
                    <img src={modalImage} alt="Expanded" style={{ width: '100%', height: 'auto' }} />
                </Box>
            </Modal>
            <Trademark></Trademark>
            <Footer></Footer>
        </section>
    );
};

export default Phutunggam;
