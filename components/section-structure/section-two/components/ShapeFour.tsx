


const ShapeFour = ({ setComponent }: any) => {
    return (
        <div className='section-structure structure-four flex justify-between items-center py-3 pr-1' onClick={setComponent}>
            <img className='w-1/3 four-item' src="https://cdn.shopify.com/s/files/1/0485/4566/1094/products/SamsungGalaxyS21Ultra-7_900x.jpg?v=1611435524" alt="cellphone" />
            <p className='text-xs four-item pt-1'>Ya no volverás a perderte esa toma perfecta. Conoce los Galaxy S21 5G y S21+ 5G. Están diseñados para revolucionar el video y la fotografía, con una resolución cinematográfica de 8K para que puedas tomar fotos épicas mientras haces un video.</p>
        </div>
    );
}

export default ShapeFour;