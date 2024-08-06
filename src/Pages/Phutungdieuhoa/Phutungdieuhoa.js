import React, { useState } from 'react';
import Header from '../../Components/Header';
import { Modal, Box } from '@mui/material';
import PTG1 from '../Phutungdieuhoa/images/Dau-lanh-Denso.jpg';
import PTG2 from '../Phutungdieuhoa/images/Gian-nong-Altis.jpg';
import PTG3 from '../Phutungdieuhoa/images/Gian-nong-Creta.jpg';
import PTG4 from '../Phutungdieuhoa/images/Gian-nong-Crown.jpg';
import PTG5 from '../Phutungdieuhoa/images/Hop-quat-gian-lanh-Fortuner.jpg';
import PTG6 from '../Phutungdieuhoa/images/Hop-quat-gian-lanh-Hiace.jpg';
import PTG7 from '../Phutungdieuhoa/images/Loc-khi-dieu-hoa-Fortuner.jpg';
import PTG8 from '../Phutungdieuhoa/images/Loc-lanh-Grand-I10.jpg';
import PTG9 from '../Phutungdieuhoa/images/Quat-gian-lanh-truoc-Hilux.jpg';
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
        { name: 'Dầu lạnh Denso ND oil 8 250ml', imageUrl: PTG1, description: 'Dầu lạnh Denso ND oil 8 250ml', price: '1,500,000 VND' },
        { name: 'Giàn nóng Altis 2019', imageUrl: PTG2, description: 'Giàn nóng Altis 2019 - 884A0F4040', price: '1,500,000 VND' },
        { name: 'Giàn nóng Creta', imageUrl: PTG3, description: 'Giàn nóng Creta - 97606A0500', price: '1,500,000 VND' },
        { name: 'Giàn nóng Crown 3.0', imageUrl: PTG4, description: 'Giàn nóng Crown 3.0 JZS133 - 8846030620', price: '1,500,000 VND' },
        { name: 'Hộp quạt giàn lạnh Fortune', imageUrl: PTG5, description: 'Hộp quạt giàn lạnh Fortuner 2016-2017 (cơ)', price: '1,500,000 VND' },
        { name: 'Hộp quạt giàn lạnh Hiace', imageUrl: PTG6, description: 'Hộp quạt giàn lạnh Hiace 2007-2013', price: '1,500,000 VND' },
        { name: 'Lọc gió điều hòa Fortuner', imageUrl: PTG7, description: 'Lọc gió điều hòa Fortuner 2017-2019 2GD (Lọc khí giàn lạnh) - 871390K040', price: '1,500,000 VND' },
        { name: 'Lốc lạnh Huyndai I10', imageUrl: PTG8, description: 'Lốc lạnh Huyndai I10 (Lốc điều hòa) - 97701B9000', price: '1,500,000 VND' },
        { name: 'Quạt giàn lạnh trước Hilux', imageUrl: PTG9, description: 'Quạt giàn lạnh trước Hilux 2018 - 871030K400', price: '1,500,000 VND' },
    ];

    return (
        <section id="product">
            <div>
                <Header />
            </div>
            <div className="product-container">
                <h1>Danh sách sản phẩm phụ tùng ô tô điều hoà</h1>
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
