import React from 'react'
import { ShoppingCartIcon,PlusSmallIcon,MinusSmallIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from "react-router-dom";
function Item() {
  return (
    <div className="flex flex-col  mt-10 px-[10%] items-center w-full  ">
      <div className="mb-10 flex w-full  text-left">
        {'Home > category 1 > category2 > product namme'}
      </div>
        <Link to="/category" className="bg-limegreen text-black py-2 px-4 rounded">
          Go to category
        </Link>
      <div className="flex flex-row space-x-32 w-full  h-full ">
        <div>
          <img src="https://picsum.photos/700/300 " alt="" />
        </div>
        <div className="flex flex-col justify-between  ">
          <div>
            <h1>Product name1</h1>
            <span>4,xxx credits</span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row space-x-5 items-center mb-5">
              <h1>Quantity</h1>
              <div className="flex flex-row border-gray-600 items-center justify-center">
                <h1 className="border-2 px-3  border-gray-600 hover:bgmain cursor-pointer">
                  -
                </h1>
                <h1 className="border-y-2 px-3 h-full border-gray-600 ">1</h1>
                <h1 className="border-2 px-3  border-gray-600 hover:bgmain cursor-pointer">
                  +
                </h1>
                {/* <button className="hover:bg-gray-500 px-1 border-[1px] border-gray-500">
                  <PlusSmallIcon class="h-full w-6" />
                </button>
                <button
                  className=" px-1 border-[1px] border-gray-500"  >
                  1
                </button>
                <button className="hover:bg-gray-500 px-1 border-[1px] border-gray-500">
                  <MinusSmallIcon class="h-full w-6" />
                </button> */}
              </div>
              <p>xx pieces available</p>
            </div>
            <div className="flex flex-row space-x-5">
              <div className="flex flex-row border-2 border-gray-500 p-2 rounded-md hover:bgmain">
                <ShoppingCartIcon class="h-6 w-6" />
                <h1>Add to cart</h1>
              </div>
              <div className="border-2 border-gray-500 p-2 rounded-md hover:bgmain">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
                
      <div className="text-left flex flex-row     w-full mt-10">
        <div className=" w-4/6">
          <h1>Product details</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nemo
            beatae iure? Velit quae eos dolorem, suscipit quo optio sit dolore
            totam ratione repudiandae doloremque distinctio, nobis laboriosam
            cupiditate inventore! Repudiandae cumque necessitatibus corrupti
            suscipit voluptatum similique tempore molestiae eligendi quae omnis
            assumenda deserunt velit, nemo provident expedita alias molestias
            voluptates earum animi ratione dignissimos est optio sunt?
            Molestias, dicta. Placeat minima consectetur dolorum vitae iure
            illum? At nam nemo tenetur nulla autem modi, reprehenderit odit
            doloremque, quae provident eaque ipsa unde facere itaque
            exercitationem. Modi quia dolores quos iure. Repudiandae ipsa
            facilis voluptates exercitationem nobis odio quod. Odio,
            voluptatibus. Quod dicta voluptatem fuga exercitationem consectetur
            ipsum cumque pariatur distinctio, maxime voluptas. Quae magnam
            nesciunt aperiam iure ad, saepe porro. Accusamus eligendi dolor nemo
            numquam fugit, aspernatur minus facere ex laborum dicta sapiente
            porro sunt atque non qui vel vitae assumenda modi omnis provident ad
            dignissimos? Animi fuga deserunt aperiam! Suscipit, dolore nam? Modi
            ad error adipisci iusto earum aliquam ea numquam alias repellendus,
            praesentium, velit veniam molestias saepe laudantium? Vel ut
            praesentium ipsum quisquam magnam sapiente, fuga totam. Numquam.
            Enim rerum, optio, numquam doloribus et, ab sequi eum esse
            exercitationem laboriosam fuga. Perferendis quaerat dolorem ducimus
            maxime nam nulla repellendus molestiae rem? Fugit porro hic fugiat
            sed repudiandae explicabo. Harum nesciunt reiciendis pariatur
            necessitatibus beatae sed suscipit fugit, a nam possimus enim natus
            eaque tenetur officia adipisci laboriosam veritatis. Amet
            voluptatibus aliquid voluptate in ea, sequi fugit distinctio atque.
            Ratione sequi voluptates animi quis consequatur reprehenderit esse
            quod provident nisi explicabo magni aperiam molestiae, excepturi
            neque dolor autem? Voluptatum voluptatibus exercitationem assumenda,
            enim tempora recusandae vero maxime ut unde? Expedita, libero vel
            molestias dolorum adipisci assumenda aspernatur, porro similique
            blanditiis, fugit reiciendis! Vitae necessitatibus sed reprehenderit
            aperiam voluptatem deleniti provident, illum fugiat nobis aliquid
            molestias, tenetur aliquam blanditiis ipsum? Nesciunt quo voluptatem
            minima obcaecati cumque delectus necessitatibus quae vel voluptatum
            qui quasi accusantium dolor consequatur, pariatur consequuntur
            dignissimos corrupti reprehenderit nulla nam blanditiis. Dolore,
            deserunt aspernatur? Ab, error debitis. Vitae molestiae quidem
            distinctio aliquid assumenda sit dolores saepe omnis architecto


          </p>
        </div>
        <div className=" w-1/6">
     
        </div>
        <div className=" w-1/6 space-y-12">
          <h1>You may like</h1>
          <img src="https://picsum.photos/150/150 " alt="" />
          <img src="https://picsum.photos/150/150 " alt="" />
        </div>
      </div>
    </div>
  )
}

export default Item