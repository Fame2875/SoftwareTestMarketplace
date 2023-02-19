

function Home() {
  return (
    <>
      <div className="m-52 ml-96">
        <h1 role="heading" aria-level="1" className="text-3xl font-bold mb-10 ">
          <center>Home</center>
        </h1>
        <img
          alt="Product-Image"
          src="https://bookings.co.th/wp-content/uploads/%E0%B9%80%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-8.8-%E0%B8%97%E0%B8%B5%E0%B9%88-Shopee.jpg"
          style={{ borderRadius: '30px' }}
        ></img>
        <br></br>
        <br></br>
        <h2>หมวดหมู่</h2>
        <br></br>
        <table>
          <td>
            <img
              alt="Product-Image"
              src="https://cf.shopee.co.th/file/ed717f1a6930d2aa5b23e481a93ad6e0"
              width="200"
              height="150"
              style={{ borderRadius: '30px' }}
            ></img>
          </td>

          <td>
            <img
              alt="Product-Image"
              src="https://image.uniqlo.com/UQ/ST3/th/imagesgoods/452182/item/thgoods_09_452182.jpg?width=750"
              width="200"
              height="150"
              style={{ borderRadius: '30px' }}
            ></img>
          </td>

          <td>
            <img
              alt="Product-Image"
              src="https://cf.shopee.co.th/file/f29b373cdb4e97f8b16e829791fa0f69"
              width="200"
              height="150"
              style={{ borderRadius: '30px' }}
            ></img>
          </td>

          <td>
            <img
              alt="Product-Image"
              src="https://f.btwcdn.com/store-43839/product/b151423b-3098-da26-f1bc-62c68cba0cd3.jpg"
              width="200"
              height="150"
              style={{ borderRadius: '30px' }}
            ></img>
          </td>
        </table>

        <br></br>

        <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Order Summary
          </h5>
        </div>
      </div>
    </>
  )
}
export default Home;
