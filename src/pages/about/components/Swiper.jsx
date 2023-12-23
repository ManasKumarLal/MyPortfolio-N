import './Swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <div className='about_swiper_container'>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper'
            >
                <SwiperSlide className='swiperSlide'>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, animi? Voluptates veniam dicta suscipit reiciendis recusandae dolor quas esse placeat?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit nisi, accusantium sunt obcaecati ex neque labore architecto velit. Dolor neque quasi necessitatibus dolore?
                    </p>
                    <h1>- As a Web Designer</h1>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, animi? Voluptates veniam dicta suscipit reiciendis recusandae dolor quas esse placeat?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure dicta animi? Amet distinctio repellat quis corrupti neque nulla animi inventore ducimus ut?
                    </p>
                    <h1>- As a Logic Builder</h1>
                </SwiperSlide>

            </Swiper>

            <img src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/1-4.jpg" alt="" />
            <img src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/2-1.jpg" alt="" />
            <img src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/4-1.jpg" alt="" />
            <img src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/3-1.jpg" alt="" />
            <img src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/5.jpg" alt="" />
            <img src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/7.jpg" alt="" />
            <img src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/6.jpg" alt="" />

            <FontAwesomeIcon
                className='font_icon'
                icon={faCircle}
                beatFade
            />
            <FontAwesomeIcon
                className='font_icon '
                icon={faCircle}
                beatFade
            />
            <FontAwesomeIcon
                className='font_icon '
                icon={faCircle}
                beatFade
            />
            <FontAwesomeIcon
                className='font_icon '
                icon={faCircle}
                beatFade
            />
            <FontAwesomeIcon
                className='font_icon '
                icon={faCircle}
                beatFade
            />
        </div>
    );
};