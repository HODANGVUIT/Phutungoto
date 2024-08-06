import React, { useState } from 'react';
import Header from '../../Components/Header';
import { Modal, Box } from '@mui/material';
import PTG1 from '../Phutungtro/images/Den-pha-Lexus.jpg';
import PTG2 from '../Phutungtro/images/Den-pha-Prado.jpg';
import PTG3 from '../Phutungtro/images/Den-pha-Rush.jpg';
import PTG4 from '../Phutungtro/images/Den-pha-Venza.jpg';
import PTG5 from '../Phutungtro/images/Giam-xoc-sau-Santafe.jpg';
import PTG6 from '../Phutungtro/images/Guong-chieu-hau-Rush.jpg';
import PTG7 from '../Phutungtro/images/Thuoc-lai-Altis.jpg';
import PTG8 from '../Phutungtro/images/Thuoc-lai-Vios.jpg';
import PTG9 from '../Phutungtro/images/Ty-do-cua-hau.jpg';
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
        { name: 'Đèn pha Lexus GX470 2005-2009', imageUrl: PTG1, description: 'Đèn pha Lexus GX470 2005-2009 (Đèn lái trước) - 811706A070 - 811306A240', price: '1,500,000 VND' },
        { name: 'Đèn pha Prado 2010-2012', imageUrl: PTG2, description: 'Đèn pha Prado 2010-2012- 8113060L90 - 8117060L70 - 8113060E40 - 8117060E00', price: '1,500,000 VND' },
        { name: 'Đèn pha Rush 2020-2022', imageUrl: PTG3, description: 'Đèn pha Rush 2020-2022- 81110BZ630 - 81150BZ630 - 81130BZ630 - 81170BZ630', price: '1,500,000 VND' },
        { name: 'Đèn pha Toyota Venza không Xenon', imageUrl: PTG4, description: 'Đèn pha Toyota Venza không Xenon (Đèn lái trước) - 811100T020 - 811500T020', price: '1,500,000 VND' },
        { name: 'Giảm xóc sau Santafe 2019-2022', imageUrl: PTG5, description: 'Giảm xóc sau Santafe 2019-2022 (Phuộc nhún sau) - 55367S1AA0 - 55367S9450', price: '1,500,000 VND' },
        { name: 'Gương chiếu hậu Rush 2018', imageUrl: PTG6, description: 'Gương chiếu hậu Rush 2018 (Kính chiếu hậu Rush) - 87940BZC90 - 87910BZD30', price: '1,500,000 VND' },
        { name: 'Thước lái Altis', imageUrl: PTG7, description: 'Thước lái Altis 2014-2018 - 4551002620 - 8117060E00', price: '1,500,000 VND' },
        { name: 'Thước lái Vios', imageUrl: PTG8, description: 'Thước lái Vios 2014-2021 - 455100D490 - 455100D491', price: '1,500,000 VND' },
        { name: 'Ty chống cửa hậu RX350/RX450H', imageUrl: PTG9, description: 'Ty chống cửa hậu RX350/RX450H 2010-2012 - 689500E030 - 689600E030', price: '1,500,000 VND' },
    ];

    return (
        <section id="product">
            <div>
                <Header />
            </div>
            <div className="product-container">
                <h1>Danh sách sản phẩm phụ tùng ô tô phụ trợ bán chạy nhất</h1>
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
