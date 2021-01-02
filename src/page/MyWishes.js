import React from 'react';
import Wish from '../component/Wish';
const wishDataList = [{
  title: "아크네 파랑 니트",
  img: "https://www.acnestudios.com/on/demandware.static/-/Sites-acne-product-catalog/default/dwfd6737f4/images/A6/A60195-/750x/A60195-AAJ_A.jpg",
  tags: ["니트류", "아크네", "새해 설빔"]
},
{
  title: "가습기 (4L)",
  img: "https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/358000870711000-6bac9bd9-83ec-42ba-b864-e6c8a36075e6.jpg",
  tags: ["가습기", "쿠팡", "전자제품"]
},{
  title: "프비 알록달록이 니트",
  img: "http://www.beginning.kr/shopimages/beginning1/0670000012272.jpg?1606377372",
  tags: ["니트류", "프롬비기닝", "새해 설빔"]
},
{
  title: "아크네 파랑 니트",
  img: "https://www.acnestudios.com/on/demandware.static/-/Sites-acne-product-catalog/default/dwfd6737f4/images/A6/A60195-/750x/A60195-AAJ_A.jpg",
  tags: ["니트류", "아크네", "새해 설빔"]
},
{
  title: "가습기 (4L)",
  img: "https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/358000870711000-6bac9bd9-83ec-42ba-b864-e6c8a36075e6.jpg",
  tags: ["가습기", "쿠팡", "전자제품"]
},{
  title: "프비 알록달록이 니트",
  img: "http://www.beginning.kr/shopimages/beginning1/0670000012272.jpg?1606377372",
  tags: ["니트류", "프롬비기닝", "새해 설빔"]
}];

const MyWishes = () => {
  const wishList = wishDataList.map(wishData => <Wish data={wishData}/>);
  return (
    <ul className="wishes">
      {wishList}
    </ul>

  )
}

export default MyWishes;
