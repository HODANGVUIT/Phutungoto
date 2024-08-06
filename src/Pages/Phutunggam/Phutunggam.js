import React, { useState } from 'react';
import Header from '../../Components/Header';
import { Modal, Box } from '@mui/material';
import PTG1 from '../Phutunggam/images/PTGchanmaytruocCreta.jpg';
import PTG2 from '../Phutunggam/images/PTGchanmaytruoc.jpg';
import PTG3 from '../Phutunggam/images/PTGchanmaysau.jpg';
import '../../Pages/Phutung.css';

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
        { name: 'Chân máy trước Tribeca', imageUrl: PTG1, description: 'Chân máy trước Tribeca (RH) - 41022AG02B9E', price: '1,500,000 VND' },
        { name: 'Chân máy trước Tribeca', imageUrl: PTG2, description: 'Chân máy trước Tribeca (RH) - 41022AG02B9E', price: '1,500,000 VND' },
        { name: 'Chân máy trước Tribeca', imageUrl: PTG3, description: 'Chân máy trước Tribeca (RH) - 41022AG02B9E', price: '1,500,000 VND' },
    ];

    return (
        <section id="Phutunggam">
            <div>
                <Header />
            </div>
            <div className="Phutunggam-container">
                <h1>Danh sách sản phẩm phụ tùng gầm (moay ơ, giảm sốc, má phanh, rô tuyn...)</h1>
                <div className="Phutunggam-list-container">
                    <ul className="Phutunggam-list">
                        {phutunggam.slice(0, visiblePhutunggam).map((item, index) => (
                            <li key={index} className="Phutunggam-item">
                                <h3>{item.name}</h3>
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    onClick={() => handleOpenModal(item.imageUrl)}
                                    className="Phutunggam-image"
                                />
                                <p className="Phutunggam-description">{item.description}</p>
                                <p className="Phutunggam-price">{item.price}</p>
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
        </section>
    );
};

export default Phutunggam;
