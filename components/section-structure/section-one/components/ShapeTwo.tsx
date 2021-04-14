import { ContainerShapeTwo } from '../Styles';

const ShapeTwo = ({ setComponent }: any) => {
    return (
        <ContainerShapeTwo className="rounded  py-3 px-2 flex items-center justify-between" onClick={setComponent}>
            <i className="fas fa-mobile-alt shapetwo-logo relative"/>
            <nav className='shapeone-nav flex items-center'>
                <p className='shapeone-link'>Inicio</p>
                <p className='shapeone-link'>Celulares</p>
                <i className="fas fa-shopping-cart shapeone-link pt-1"/>
                <div className='search-container relative'>
                    <input className='searchbar rounded px-1' type="text" />
                    <i className="fas fa-search forget absolute"/>
                </div>
            </nav>
        </ContainerShapeTwo>
    );
}

export default ShapeTwo;