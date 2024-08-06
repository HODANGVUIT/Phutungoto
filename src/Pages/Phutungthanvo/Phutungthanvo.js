import React, { useState } from 'react';
import Header from '../../Components/Header';
import { Modal, Box } from '@mui/material';
import PTG1 from '../Phutungthanvo/images/Ca-lang-Accent-2018.jpg';
import PTG2 from '../Phutungthanvo/images/Ca-lang-Lexus-RX350.jpg';
import PTG3 from '../Phutungthanvo/images/Ca-lang-Swift-2022.jpg';
import PTG4 from '../Phutungthanvo/images/Choi-gat-mua-truoc-K3.jpg';
import PTG5 from '../Phutungthanvo/images/Chup-dau-moay-o-sau-Land.jpg';
import PTG6 from '../Phutungthanvo/images/Co-cau-cua-lua-sau-Sedona.jpg';
import PTG7 from '../Phutungthanvo/images/Co-cau-cua-hau-CX9.jpg';
import PTG8 from '../Phutungthanvo/images/Co-cau-cua-truoc-Raize.jpg';
import PTG9 from '../Phutungthanvo/images/Co-cau-khoa-cop-sau-tren-Lux.jpg';
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
        { name: 'Ca lăng Accent 2018', imageUrl: PTG1, description: 'Ca lăng Accent 2018 (có mạ) (Mặt galant) - 86350H6010', price: '1,500,000 VND' },
        { name: 'Ca lăng Lexus RX350', imageUrl: PTG2, description: 'Ca lăng Lexus RX350 2019-2022 (Mặt galant) - 5310148A10', price: '1,500,000 VND' },
        { name: 'Ca lăng Suzuki Swift', imageUrl: PTG3, description: 'Ca lăng Suzuki Swift 2022 (Mặt galant) - 7174079S00C48', price: '1,500,000 VND' },
        { name: 'Chổi gạt mưa trước K3/Cerato', imageUrl: PTG4, description: 'Chổi gạt mưa trước K3/Cerato 2014-2016 - 983503S300 - 98360A5000', price: '1,500,000 VND' },
        { name: 'Chụp đầu moay ơ sau Land Cruiser', imageUrl: PTG5, description: 'Chụp đầu moay ơ sau Land Cruiser FZJ100 (Nắp chụp lazang) - 4260360250', price: '1,500,000 VND' },
        { name: 'Cơ cấu cửa lùa sau Sedona', imageUrl: PTG6, description: 'Cơ cấu cửa lùa sau Sedona 2014-2018 - 81410A9010 - 81420A9010', price: '1,500,000 VND' },
        { name: 'Cơ cấu cửa hậu Mazda CX9', imageUrl: PTG7, description: 'Cơ cấu cửa hậu Mazda CX9 (liền mô tơ) - KD353438X', price: '1,500,000 VND' },
        { name: 'Cơ cấu cửa trước Raize', imageUrl: PTG8, description: 'Cơ cấu cửa trước Raize 2021 - 69320BZ490 - 5310148A10', price: '1,500,000 VND' },
        { name: 'Cơ cấu khóa cốp sau', imageUrl: PTG9, description: 'Cơ cấu khóa cốp sau trên Vinfast Lux A2.0 - Lux SA2.0 - BIW10001517', price: '1,500,000 VND' },
    ];

    return (
        <section id="product">
            <div>
                <Header />
            </div>
            <div className="product-container">
                <h1>Danh sách sản phẩm phụ tùng ô tô thân vỏ</h1>
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
