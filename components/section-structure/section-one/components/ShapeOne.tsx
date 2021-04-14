import { ContainerShapeOne } from '../Styles';

const ShapeOne = ({ setComponent }: any) => {
    return (
        <ContainerShapeOne className='text-white rounded  py-4 px-3 flex items-center justify-between mb-3' onClick={setComponent}>
            <i className="fab fa-apple shapeone-logo"></i>
            <nav className='shapeone-nav flex'>
                <p className='shapeone-link'>Ingresar</p>
                <p className='shapeone-link'>Mis compras</p>
                <i className="fas fa-shopping-cart shapeone-link pt-1" />
            </nav>
        </ContainerShapeOne>
    );
}

export default ShapeOne;