import React, { useState, useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { changeImage, showImage, hideImage, countSelecteds } from '../../utils/Modal';
import { Container } from './Styles';

const Modal = () => {

    const { images, setShowModal, mainImages, setMainImages, action, setAction } = useContext(ModalContext);
    const [viewImage, setViewImage] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [modalImages, setModalImages] = useState(images);
    const [bgsend, setBgsend] = useState('gray');
    const imageHeight = action === 'images' && '130px';
    const sendClass = bgsend === '#075E54' && 'active-button';

    const closeModal = () => {
        setShowModal(false);
        setAction('');
    };

    const selectImage = (index: number) => {
        const newImages = modalImages;
        newImages[index]['selected'] = !newImages[index]['selected'];
        setModalImages(newImages);
        const shadow = document.getElementById(`shadow${index}`);
        shadow.classList.toggle('hidden');
        setBgsend(countSelecteds(newImages))
    };

    const changeImagesBgTwo = () => {
        const saveChanges = bgsend === '#075E54';
        if (saveChanges) {
            const images = modalImages.filter((image: any) => image.selected);
            setMainImages({ ...mainImages, 'main-two': images })
        }

    };


    return (
        <Container selectedImage={selectedImage} imageHeight={imageHeight} bgSend={bgsend}>
            <section className='modal-options m-auto relative'>
                <div className="modal-header flex justify-between text-white p-2">
                    <p className='font-bold'>Cargar imagen</p>
                    <div className="close-modal flex justify-center items-center cursor-pointer rounded-full" onClick={closeModal}>X</div>
                </div>
                <div className='flex flex-wrap images-container'>
                    {modalImages?.map((image: any, index: number) => (
                        <div className='modal-image-container relative' key={`image-${index}`}> <img className='modal-image cursor-pointer' src={image.image} alt="image"
                            onClick={() => !action ? showImage(setViewImage, setSelectedImage, image.image) : selectImage(index)}
                        />
                            <div id={`shadow${index}`} className="shadow-image absolute text-white flex justify-center items-center hidden"
                                onClick={() => selectImage(index)}
                            >✓</div>
                        </div>
                    ))}
                    {action && (
                        <div className={`absolute flex justify-center items-center rounded-full second-send cursor-pointer ${sendClass}`}
                            onClick={changeImagesBgTwo}
                        >
                            <i className="fas fa-paper-plane text-white  send-icon" />
                        </div>
                    )}
                </div>

                {(!action && viewImage) && (
                    <div className="selected-image absolute w-full flex justify-center items-center">
                        <i className="fas fa-arrow-left absolute text-white p-1"
                            onClick={() => hideImage(setViewImage, setSelectedImage)} />
                        <div className="send-button absolute flex justify-center items-center rounded-full"
                            onClick={() => changeImage(setShowModal, setMainImages, mainImages, selectedImage, setAction)}>
                            <i className="fas fa-paper-plane text-white" />
                        </div>
                    </div>
                )}
            </section>
        </Container >
    );
};

export default Modal;



// import React, { useEffect, useState, useContext } from 'react';
// import { ModalContext } from '../../context/ModalContext';
// import { changeImage, showImage, hideImage, countSelecteds } from '../../utils/Modal';
// import { Container } from './Styles';

// const Modal = () => {

//     const { images, setShowModal, mainImages, setMainImages, action, setAction, setImages } = useContext(ModalContext);
//     const [viewImage, setViewImage] = useState<boolean>(false);
//     const [selectedImage, setSelectedImage] = useState<string>('');
//     const [modalImages, setModalImages] = useState(images);
//     const [bgsend, setBgsend] = useState('gray');
//     const imageHeight = action === 'images' && '130px';
//     const sendClass = bgsend === '#075E54' && 'active-button';

//     const closeModal = () => {
//         setShowModal(false);
//         setAction('');
//     };

//     const selectImage = (index: number) => {
//         const newImages = modalImages;
//         newImages[index]['selected'] = !newImages[index]['selected'];
//         setModalImages(newImages);
//         const shadow = document.getElementById(`shadow${index}`);
//         shadow.classList.toggle('hidden');
//         setBgsend(countSelecteds(newImages))
//     };




//     return (
//         <Container selectedImage={selectedImage} imageHeight={imageHeight} bgSend={bgsend}>
//             <section className='modal-options m-auto relative'>
//                 <div className="modal-header flex justify-between text-white p-2">
//                     <p className='font-bold'>Cargar imagen</p>
//                     <div className="close-modal flex justify-center items-center cursor-pointer rounded-full" onClick={closeModal}>X</div>
//                 </div>
//                 <div className='flex flex-wrap images-container'>
//                     {modalImages?.map((image: any, index: number) => (
//                         <div className='modal-image-container relative' key={`image-${index}`}> <img className='modal-image cursor-pointer' src={image.image} alt="image"
//                             onClick={() => !action ? showImage(setViewImage, setSelectedImage, image.image) : selectImage(index)}
//                         />
//                             <div id={`shadow${index}`} className="shadow-image absolute text-white flex justify-center items-center hidden"
//                                 onClick={() => selectImage(index)}
//                             >✓</div>
//                         </div>
//                     ))}
//                     {action && (
//                         <div className={`absolute flex justify-center items-center rounded-full second-send cursor-pointer ${sendClass}`}>
//                             <i className="fas fa-paper-plane text-white  send-icon" />
//                         </div>
//                     )}
//                 </div>

//                 {(!action && viewImage) && (
//                     <div className="selected-image absolute w-full flex justify-center items-center">
//                         <i className="fas fa-arrow-left absolute text-white p-1"
//                             onClick={() => hideImage(setViewImage, setSelectedImage)} />
//                         <div className="send-button absolute flex justify-center items-center rounded-full"
//                             onClick={() => changeImage(setShowModal, setMainImages, mainImages, selectedImage, setAction)}>
//                             <i className="fas fa-paper-plane text-white" />
//                         </div>
//                     </div>
//                 )}
//             </section>
//         </Container >
//     );
// };

// export default Modal;