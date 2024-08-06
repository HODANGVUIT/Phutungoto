import React, { useState } from 'react';
import Header from '../../Components/Header';
import { Modal, Box } from '@mui/material';
import PTG1 from '../Phutungdien/images/Bugi-Accent.jpg';
import PTG2 from '../Phutungdien/images/Cam-bien-ABS-truoc.jpg';
import PTG3 from '../Phutungdien/images/Cam-bien-khi-xa-Accent.jpg';
import PTG4 from '../Phutungdien/images/Cam-bien-khi-xa-G4NA-Tucson.jpg';
import PTG5 from '../Phutungdien/images/Cam-bien-khi-xa-lien-hop-Audi.jpg';
import PTG6 from '../Phutungdien/images/Cau-chi-trung-tam-Venza.jpg';
import PTG7 from '../Phutungdien/images/Tiep-diem-vo-lang-Accent.jpg';
import PTG8 from '../Phutungdien/images/Tui-khi-vo-lang-Solati.jpg';
import PTG9 from '../Phutungdien/images/Van-dieu-khien-khi-nap-Lexus.jpg';
import '../../Pages/Phutung.css';
import Footer from "../../Components/Footer";
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
        { name: 'Bugi Accent 2018-2020', imageUrl: PTG1, description: 'Bugi Accent 2018-2020 - 1884310062 - 1882709080', price: '1,500,000 VND' },
        { name: 'Cảm biến ABS phanh trước', imageUrl: PTG2, description: 'Cảm biến ABS phanh trước Chairman 2009 - 4460114000', price: '1,500,000 VND' },
        { name: 'Cảm biến khí xả Accent 2022', imageUrl: PTG3, description: 'Cảm biến khí xả Accent 2022 (Cảm biến Oxy) - 3921003755', price: '1,500,000 VND' },
        { name: 'Cảm biến khí xả G4NA', imageUrl: PTG4, description: 'Cảm biến khí xả G4NA Tucson/Cerato/K3 2015-2020 (Cảm biến Oxy) - 392102E151', price: '1,500,000 VND' },
        { name: 'Cảm biến khí xả Audi Q7', imageUrl: PTG5, description: 'Cảm biến khí xả Audi Q7 (Cảm biến Oxy) - 059907807C', price: '1,500,000 VND' },
        { name: 'Cầu chì trung tâm Venza', imageUrl: PTG6, description: 'Cầu chì trung tâm Venza - 827200T020 - 5690059000TRY', price: '1,500,000 VND' },
        { name: 'Tiếp điểm vô lăng Accent 2018', imageUrl: PTG7, description: 'Tiếp điểm vô lăng Accent 2018 (Cuộn điện còi, Cuộn kèn, Cáp còi) - 93490H8210', price: '1,500,000 VND' },
        { name: 'Túi khí vô lăng Solati', imageUrl: PTG8, description: 'Túi khí vô lăng Solati (Phím còi liền túi khí) - 5690059000TRY', price: '1,500,000 VND' },
        { name: 'Van điều khiển khí nạp Lexus', imageUrl: PTG9, description: 'Van điều khiển khí nạp Lexus GX460 2010 (RH) - 2570138100', price: '1,500,000 VND' },
    ];

    return (
        <section id="product">
            <div>
                <Header />
            </div>
            <div className="product-container">
                <h1>Danh sách sản phẩm phụ tùng ô tô điện</h1>
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
