import CategoryCardHome from '../../components/CategoryCardHome'
import ItemCardHome from '../../components/ItemCardHome';

function Home() {

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-10">
        <img
          alt="Product-Image"
          src="https://bookings.co.th/wp-content/uploads/%E0%B9%80%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-8.8-%E0%B8%97%E0%B8%B5%E0%B9%88-Shopee.jpg"
          className="rounded-3xl m-10"
        ></img>

        <div className="flex flex-row w-full mt-10   justify-between items-center  ">
          <img
            alt="Product-Image"
            src="https://bookings.co.th/wp-content/uploads/%E0%B9%80%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-8.8-%E0%B8%97%E0%B8%B5%E0%B9%88-Shopee.jpg"
            className="rounded-3xl w-[25%] h-[25%]"
          ></img>
          <img
            alt="Product-Image"
            src="https://bookings.co.th/wp-content/uploads/%E0%B9%80%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-8.8-%E0%B8%97%E0%B8%B5%E0%B9%88-Shopee.jpg"
            className="rounded-3xl w-[25%] h-[25%]"
          ></img>
          <img
            alt="Product-Image"
            src="https://bookings.co.th/wp-content/uploads/%E0%B9%80%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-8.8-%E0%B8%97%E0%B8%B5%E0%B9%88-Shopee.jpg"
            className="rounded-3xl w-[25%] h-[25%]"
          ></img>
        </div>

        <div className="flex flex-col w-full justify-start mt-10 ">
          <div className="text-3xl font-bold mb-10">หมวดหมู่</div>
          <div className="flex flex-row space-x-10">
            <CategoryCardHome
              categoryName={'รองเท้า'}
              srcimage={
                'https://tse3.mm.bing.net/th?id=OIP.uQKSTv0Kk0BUoQBSYGYv0wHaFM&pid=Api&P=0'
              }
            />
            <CategoryCardHome
              categoryName={'เสื้อผ้า'}
              srcimage={
                'https://www.livingpop.com/wp-content/uploads/2019/11/3.jpg'
              }
            />
            <CategoryCardHome
              categoryName={'กางเกง'}
              srcimage={
                'https://tse1.mm.bing.net/th?id=OIP.qISG3NpLXA55BtAV7T1o_gHaHa&pid=Api&P=0'
              }
            />
            <CategoryCardHome
              categoryName={'เครื่องเขียน'}
              srcimage={
                'http://3.bp.blogspot.com/-6FlmfEylXvE/VEOWb_thA7I/AAAAAAAAAFg/3YZrz8f10Sk/s1600/IMG_4057_.jpg'
              }
            />
            <CategoryCardHome
              categoryName={'เครื่องประดับ'}
              srcimage={
                'https://tse4.mm.bing.net/th?id=OIP.2Z2YYKYE5ANtvMv6Yc4A9wHaEb&pid=Api&P=0'
              }
            />
          </div>
        </div>
        <div className="flex flex-col w-full justify-start mt-10 ">
          <div className="text-3xl font-bold mb-10">สินค้าแนะนำประจำวัน</div>
          <div class="grid grid-cols-5 gap-4">
            <ItemCardHome
              titleName={'รองเท้า'}
              srcimage={
                'https://tse3.mm.bing.net/th?id=OIP.uQKSTv0Kk0BUoQBSYGYv0wHaFM&pid=Api&P=0'
              }
            />
            <ItemCardHome
              titleName={'เสื้อผ้า'}
              srcimage={
                'https://www.livingpop.com/wp-content/uploads/2019/11/3.jpg'
              }
            />
            <ItemCardHome
              titleName={'กางเกง'}
              srcimage={
                'https://tse1.mm.bing.net/th?id=OIP.qISG3NpLXA55BtAV7T1o_gHaHa&pid=Api&P=0'
              }
            />
            <ItemCardHome
              titleName={'กางเกง'}
              srcimage={
                'https://tse1.mm.bing.net/th?id=OIP.qISG3NpLXA55BtAV7T1o_gHaHa&pid=Api&P=0'
              }
            />
            <ItemCardHome
              titleName={'เครื่องเขียน'}
              srcimage={
                'http://3.bp.blogspot.com/-6FlmfEylXvE/VEOWb_thA7I/AAAAAAAAAFg/3YZrz8f10Sk/s1600/IMG_4057_.jpg'
              }
            />
            <ItemCardHome
              titleName={'เครื่องประดับ'}
              srcimage={
                'https://tse4.mm.bing.net/th?id=OIP.2Z2YYKYE5ANtvMv6Yc4A9wHaEb&pid=Api&P=0'
              }
            />
            <ItemCardHome
              titleName={'เครื่องประดับ'}
              srcimage={
                'https://tse4.mm.bing.net/th?id=OIP.2Z2YYKYE5ANtvMv6Yc4A9wHaEb&pid=Api&P=0'
              }
            />
            <ItemCardHome
              titleName={'เครื่องประดับ'}
              srcimage={
                'https://tse4.mm.bing.net/th?id=OIP.2Z2YYKYE5ANtvMv6Yc4A9wHaEb&pid=Api&P=0'
              }
            />
            <ItemCardHome
              titleName={'เครื่องประดับ'}
              srcimage={
                'https://tse4.mm.bing.net/th?id=OIP.2Z2YYKYE5ANtvMv6Yc4A9wHaEb&pid=Api&P=0'
              }
            />
          
           
              
          </div>
          
        </div>
      </div>
    </>
  )
}
export default Home;
