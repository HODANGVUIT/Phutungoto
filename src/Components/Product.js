import React, { useState } from "react";
import Pro1 from "../Assets/denpha.jpg";
import Pro2 from "../Assets/giamsoc.jpg";
import Pro3 from "../Assets/guongchieuhau.jpg";
import Pro4 from "../Assets/maphanh.jpg";
import Pro5 from "../Assets/trucvolang.jpg";
import Pro6 from "../Assets/vohopso.jpg";
import Pro7 from "../Assets/bomtroluc.jpg";
import Pro8 from "../Assets/bautroluc.jpg";
import Pro9 from "../Assets/banepland.jpg";
import Pro10 from "../Assets/cambienkhixa.jpg";
import Pro11 from "../Assets/Cambiengio.jpg";
import Pro12 from "../Assets/Calangaccent.jpg";
import Pro13 from "../Assets/Bomchankhong.jpg";
import Pro14 from "../Assets/Bomdaucanival.jpg";
import Pro15 from "../Assets/Bomdaucrown.jpg";
import Pro16 from "../Assets/Bomdaurush.jpg";
import Pro17 from "../Assets/Bomxangfor.jpg";
import Pro18 from "../Assets/Locxangpajero.jpg";
import { Modal, Box } from "@mui/material";

const Product = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const [visibleProducts, setVisibleProducts] = useState(6); // Hiển thị 6 sản phẩm ban đầu

    const handleOpenModal = (imageUrl) => {
        setModalImage(imageUrl);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleLoadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
    };

    const products = [
        { name: "Gương chiếu hậu", imageUrl: Pro1, price: "500,000 VND" },
        { name: "Giảm Sốc", imageUrl: Pro2, price: "1,200,000 VND" },
        { name: "Gương chiếu hậu", imageUrl: Pro3, price: "700,000 VND" },
        { name: "Má phanh", imageUrl: Pro4, price: "800,000 VND" },
        { name: "Trục vô lăng", imageUrl: Pro5, price: "1,500,000 VND" },
        { name: "Vỏ hộp số", imageUrl: Pro6, price: "2,000,000 VND" },
        { name: "Bơm trợ lực", imageUrl: Pro7, price: "2,000,000 VND" },
        { name: "Bầu trợ lực phanh", imageUrl: Pro8, price: "1,500,000 VND" },
        { name: "Bàn ép land", imageUrl: Pro9, price: "1,000,000 VND" },
        { name: "Cảm biên khí xả", imageUrl: Pro10, price: "3,000,000 VND" },
        { name: "Cảm biến gió", imageUrl: Pro11, price: "900,000 VND" },
        { name: "Ca lăng Accent", imageUrl: Pro12, price: "2,000,000 VND" },
        { name: "Bơm chân không", imageUrl: Pro13, price: "1,000,000 VND" },
        { name: "Bơm dầu Canival", imageUrl: Pro14, price: "5,000,000 VND" },
        { name: "Bơm dầu Crown", imageUrl: Pro15, price: "4,000,000 VND" },
        { name: "Bơm dầu Rush", imageUrl: Pro16, price: "3,000,000 VND" },
        { name: "Bơm xăng Forte", imageUrl: Pro17, price: "3,500,000 VND" },
        { name: "Lọc xăng Pajero", imageUrl: Pro18, price: "700,000 VND" }
    ];

    return (
        <section id="product">
            <div className="product-container">
                <h1>Danh sách sản phẩm</h1>
                <div className="product-list-container">
                    <ul className="product-list">
                        {products.slice(0, visibleProducts).map((product, index) => (
                            <li key={index} className="product-item">
                                <h3>{product.name}</h3>
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    onClick={() => handleOpenModal(product.imageUrl)}
                                    className="product-image"
                                />
                                <p className="product-price">{product.price}</p>
                                <button className="add-to-cart">Mua hàng</button>
                            </li>
                        ))}
                    </ul>
                    {/*cuộn sản phẩm, xem thêm sản phầm */}
                </div>
                {visibleProducts < products.length && (
                    <button onClick={handleLoadMore} className="load-more">
                        Xem thêm
                    </button>
                )}
            </div>

            {/* Click vào ảnh hiện ảnh to lên */}
            <Modal open={openModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '80%',
                        maxWidth: '800px',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 2,
                        textAlign: 'center'
                    }}
                >
                    <img
                        src={modalImage}
                        alt="Expanded"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
            </Modal>
        </section>
    );
};

export default Product;
