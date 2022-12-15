import image1 from '../images/card/image-1.png'
import image2 from '../images/card/image-2.png'
import image3 from '../images/card/image-3.png'
import image4 from '../images/card/image-4.png'
import image5 from '../images/card/image-5.png'
import image6 from '../images/card/image-6.png'
import image7 from '../images/card/image-7.png'
import image8 from '../images/card/image-8.png'
import image9 from '../images/card/image-9.png'
import image10 from '../images/card/image-10.png'
import image11 from '../images/card/image-11.png'
import image12 from '../images/card/image-12.png'
import image13 from '../images/card/image-13.png'
import image14 from '../images/card/image-14.png'
import image15 from '../images/card/image-15.png'
import image16 from '../images/card/image-16.png'
import image17 from '../images/card/image-17.png'
import image18 from '../images/card/image-18.png'
import image19 from '../images/card/image-19.png'
import image20 from '../images/card/image-20.png'
import image21 from '../images/card/image-21.png'
import image22 from '../images/card/image-22.png'
import image23 from '../images/card/image-23.png'
import image24 from '../images/card/image-24.png'

import image25 from '../images/carousel/image1-2.png'
import image26 from '../images/carousel/image2-2.png'
import image27 from '../images/carousel/image3-2.png'
import image28 from '../images/carousel/image4-2.png'
import image29 from '../images/carousel/image5-2.png'

import imgCarousel1 from '../images/carousel/image1-1.png'
import imgCarousel2 from '../images/carousel/image2-1.png'
import imgCarousel3 from '../images/carousel/image3-1.png'
import imgCarousel4 from '../images/carousel/image4-1.png'
import imgCarousel5 from '../images/carousel/image5-1.png'

const cardsObj = [
    {
        name: 'The Great Lands',
        year: '2019',
        category: 'Movie',
        category2: 'PG',
        img: image1,
        marked: false
    },
    {
        name: 'The Diary',
        year: '2019',
        category: 'TV Series',
        category2: 'PG',
        img: image2,
        marked: false
    },
    {
        name: 'Earth\'s Untouched',
        year: '2019',
        category: 'Movie',
        category2: 'E',
        img: image3,
        marked: false
    },
    {
        name: 'No Land Beyond',
        year: '2019',
        category: 'Movie',
        category2: 'PG',
        img: image4,
        marked: false
    },
    {
        name: 'During The Hunt',
        year: '2016',
        category: 'TV Series',
        category2: 'PG',
        img: image5,
        marked: false
    },
    {
        name: 'Autosport The Series',
        year: '2016',
        category: 'TV Series',
        category2: 'PG',
        img: image6,
        marked: false
    },
    {
        name: 'Same Answer II',
        year: '2017',
        category: 'Movie',
        category2: 'E',
        img: image7,
        marked: false
    },
    {
        name: 'Below Echo',
        year: '2016',
        category: 'TV Series',
        category2: 'PG',
        img: image8,
        marked: false
    },
    {
        name: 'The Rockies',
        year: '2015',
        category: 'TV Series',
        category2: 'E',
        img: image9,
        marked: false
    },
    {
        name: 'Relentless',
        year: '2017',
        category: 'Movie',
        category2: 'PG',
        img: image10,
        marked: false
    },
    {
        name: 'Community of Ours',
        year: '2018',
        category: 'TV Series',
        category2: '18+',
        img: image11,
        marked: false
    },
    {
        name: 'Van Life',
        year: '2015',
        category: 'Movie',
        category2: 'PG',
        img: image12,
        marked: false
    },
    {
        name: 'The Heiress',
        year: '2021',
        category: 'Movie',
        category2: 'PG',
        img: image13,
        marked: false
    },
    {
        name: 'Off the Track',
        year: '2017',
        category: 'Movie',
        category2: '18+',
        img: image14,
        marked: false
    },
    {
        name: 'Whispering Hill',
        year: '2017',
        category: 'Movie',
        category2: 'E',
        img: image15,
        marked: false
    },
    {
        name: '112',
        year: '2013',
        category: 'TV Series',
        category2: 'PG',
        img: image16,
        marked: false
    },
    {
        name: 'Lone Heart',
        year: '2017',
        category: 'Movie',
        category2: 'E',
        img: image17,
        marked: false
    },
    {
        name: 'Production Line',
        year: '2019',
        category: 'TV Series',
        category2: 'PG',
        img: image18,
        marked: false
    },
    {
        name: 'Dogs',
        year: '2016',
        category: 'TV Series',
        category2: 'E',
        img: image19,
        marked: false
    },
    {
        name: 'Asia in 24 Days',
        year: '2020',
        category: 'TV Series',
        category2: 'PG',
        img: image20,
        marked: false
    },
    {
        name: 'The Tasty Tour',
        year: '2016',
        category: 'TV Series',
        category2: 'PG',
        img: image21,
        marked: false
    },
    {
        name: 'Darker',
        year: '2017',
        category: 'Movie',
        category2: '18+',
        img: image22,
        marked: false
    },
    {
        name: 'Unresolved Cases',
        year: '2018',
        category: 'TV Series',
        category2: '18+',
        img: image23,
        marked: false
    },
    {
        name: 'Mission: Saturn',
        year: '2017',
        category: 'Movie',
        category2: 'PG',
        img: image24,
        marked: false
    },
    {
        name: 'The Deep',
        year: '2019',
        category: 'Movie',
        category2: 'PG',
        img: image25,
        imgCarousel: imgCarousel1,
        marked: false,
        carousel: true
    },
    {
        name: 'Bottom Gear',
        year: '2021',
        category: 'Movie',
        category2: 'PG',
        img: image26,
        imgCarousel: imgCarousel2,
        marked: false,
        carousel: true
    },
    {
        name: 'Undiscovered Cities',
        year: '2019',
        category: 'TV Series',
        category2: 'E',
        img: image27,
        imgCarousel: imgCarousel3,
        marked: false,
        carousel: true
    },
    {
        name: '1998',
        year: '2021',
        category: 'Movie',
        category2: '18+',
        img: image28,
        imgCarousel: imgCarousel4,
        marked: false,
        carousel: true
    },
    {
        name: 'Dark Side Of The Moon',
        year: '2018',
        category: 'TV Series',
        category2: 'PG',
        img: image29,
        imgCarousel: imgCarousel5,
        marked: false,
        carousel: true
    }
]

export default cardsObj