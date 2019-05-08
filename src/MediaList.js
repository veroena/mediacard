import React from 'react';
import './App.scss';
import MediaCard from './MediaCard'


const MediaList = () => {
  return (
    <ul>
      <li>
        <MediaCard userImage={'https://www.bemanistyle.com/wp-content/uploads/2018/01/Linux-Avatar-300px.png'} userName={'Enrique'} userDate={'Lunes 26 de junio de 2017'} userInfo={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae delectus dolore, nulla consectetur perspiciatis, ad impedit illum unde eum sed reiciendis libero obcaecati rerum! Ipsa obcaecati officiis adipisci et Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae delectus dolore, nulla consectetur perspiciatis, ad impedit illum unde eum sed reiciendis libero obcaecati rerum! Ipsa obcaecati officiis adipisci et.'} userLikes={36} heartClass={'far fa-heart'} />
      </li>
      <li>
        <MediaCard userImage={'https://i.dlpng.com/static/png/1449161_thumb.png'} userName={'Paquito'} userDate={'Martes 27 de diciembre de 2019'} userInfo={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae delectus dolore, nulla consectetur perspiciatis, ad impedit illum unde eum sed reiciendis libero obcaecati rerum! Ipsa obcaecati officiis adipisci et Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae delectus dolore, nulla consectetur perspiciatis, ad impedit illum unde eum sed reiciendis libero obcaecati rerum! Ipsa obcaecati officiis adipisci et.'} userLikes={79} heartClass={'fas fa-heart'} />
      </li>
      <li>
        <MediaCard userImage={'https://a.thrilled.com/brands/1/avatar_small?v=1456785641'} userName={'Carmina'} userDate={'Miércoles 28 de enero de 2018'} userInfo={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae delectus dolore, nulla consectetur perspiciatis, ad impedit illum unde eum sed reiciendis libero obcaecati rerum! Ipsa obcaecati officiis adipisci et Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae delectus dolore, nulla consectetur perspiciatis, ad impedit illum unde eum sed reiciendis libero obcaecati rerum! Ipsa obcaecati officiis adipisci et.'} userLikes={12} heartClass={'far fa-heart'} />
      </li>
    </ul>
  )
}

export default MediaList;