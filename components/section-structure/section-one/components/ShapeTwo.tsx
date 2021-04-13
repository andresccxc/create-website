
const ShapeTwo = ({ setComponent }: any) => {
    return (
        <div className="section-structure structure-two flex" onClick={setComponent}>
            <img className='w-1/4 h-full product-image' src="https://cdn.shopify.com/s/files/1/0485/4566/1094/products/RedmiNote9T-6_6fefa032-9c80-468f-825f-14f69e77a2d0_900x.jpg?v=1613853936" alt="cellphone" />
            <img className='w-1/4 h-full product-image' src="https://cdn.shopify.com/s/files/1/0485/4566/1094/products/SamsungGalaxyS21Ultra-7_900x.jpg?v=1611435524" alt="cellphone" />
            <img className='w-1/4 h-full product-image' src="https://cdn.shopify.com/s/files/1/0485/4566/1094/products/iPhoneXR-3_900x.jpg?v=1612456921" alt="cellphone" />
            <img className='w-1/4 h-full product-image' src="https://cdn.shopify.com/s/files/1/0485/4566/1094/products/Mi10-1_900x.jpg?v=1605797253" alt="cellphone" />
        </div>
    );
}

export default ShapeTwo;