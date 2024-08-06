import React, { useState } from 'react';
import Header from '../../Components/Header';
import { Modal, Box } from '@mui/material';
import PTG1 from '../Phutunggam/images/PTGchanmaytruocCreta.jpg';
import PTG2 from '../Phutunggam/images/PTGchanmaytruoc.jpg';
import PTG3 from '../Phutunggam/images/PTGchanmaysau.jpg';
import PTG4 from '../Phutunggam/images/PTGchanmaydau.jpg';
import PTG5 from '../Phutunggam/images/PTGchanmayMer.jpg';
import PTG6 from '../Phutunggam/images/PTGchanhopso.jpg';
import PTG7 from '../Phutunggam/images/PTGchanbungammay.jpg';
import PTG8 from '../Phutunggam/images/PTGchanbunbanhsau.jpg';
import PTG9 from '../Phutunggam/images/PTGcaosutreoongxa.jpg';
import '../../Pages/Phutung.css';
import Trademark from '../../Components/Trademark';
import Footer from '../../Components/Footer';


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
        { name: 'Chân máy trước Creta 2016', imageUrl: PTG2, description: 'Chân máy trước Creta 2016 (RH) - 21810A0100 - 21810A0000', price: '1,500,000 VND' },
        { name: 'Chân máy sau Equues', imageUrl: PTG3, description: 'Chân máy sau Equues 2009-2015 - 218323M100', price: '1,500,000 VND' },
        { name: 'Chân máy dầu trước Equues', imageUrl: PTG4, description: 'Chân máy dầu trước Equues 2009-2015 - 218123N000', price: '1,500,000 VND' },
        { name: 'Chân máy Mercedes S600 Maybach', imageUrl: PTG5, description: 'Chân máy Mercedes S600 Maybach 2016 - A2222403400 - A2222403300', price: '1,500,000 VND' },
        { name: 'Chân hộp số Forester', imageUrl: PTG6, description: 'Chân hộp số Forester 2014-2016 - 41022YC000', price: '1,500,000 VND' },
        { name: 'Chắn bùn gầm máy trước Rush', imageUrl: PTG7, description: 'Chắn bùn gầm máy trước Rush 2019 - 51441BZ240', price: '1,500,000 VND' },
        { name: 'Chắn bùn bánh sau Elantra', imageUrl: PTG8, description: 'Chắn bùn bánh sau Elantra 2016 - 86841F2000 - 86842F2000', price: '1,500,000 VND' },
        { name: 'Cao su treo ống xả Toyota', imageUrl: PTG9, description: 'Cao su treo ống xả Toyota - - 41022AG02B9E', price: '1,500,000 VND' },
    ];

    return (
        <section id="product">
            <div>
                <Header />
            </div>
            <div className="product-container">
                <h1>Danh sách sản phẩm phụ tùng gầm (moay ơ, giảm sốc, má phanh, rô tuyn...)</h1>
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
