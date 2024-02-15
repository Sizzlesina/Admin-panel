import { AiOutlineLineChart, AiOutlineUser } from 'react-icons/ai';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';
import { HiCog } from 'react-icons/hi';
import { ImExit } from 'react-icons/im';

export const FAKE_NOTIFICATION = [
  {
    title: 'محمد هاشمی',
    message: 'این یک متن تستی است ',
    createdAt: '30 دقیقه پیش',
    src: './images/avatar-2.jpg',
    id: 1,
  },
  {
    title: 'محمد هاشمی',
    message: 'این یک متن تستی است ',
    createdAt: '30 دقیقه پیش',
    src: './images/avatar-2.jpg',
    id: 2,
  },
  {
    title: 'محمد هاشمی',
    message: 'این یک متن تستی است ',
    createdAt: '30 دقیقه پیش',
    src: './images/avatar-2.jpg',
    id: 3,
  },
];

export const FAKE_COMMENTS = [
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 1,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 2,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 3,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 4,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 5,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 6,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 7,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 8,
  },
];

export const PROFILE_OPTIONS = [
  {
    title: 'تنظیمات',
    icon: <HiCog className="ml-1 inline cursor-pointer select-none" />,
    id: 1,
  },
  {
    title: 'کاربر',
    icon: <AiOutlineUser className="ml-1 inline cursor-pointer select-none " />,
    id: 2,
  },
  {
    title: 'پیام ها',
    icon: (
      <BsFillEnvelopeFill className="ml-1 inline cursor-pointer select-none " />
    ),
    id: 3,
  },
  {
    title: 'قفل صفحه',
    icon: <FaLock className="ml-1 inline cursor-pointer select-none " />,
    id: 4,
  },
  {
    title: 'خروج',
    icon: <ImExit className="ml-1 inline cursor-pointer select-none " />,
    id: 5,
  },
];

export const TEXTS_LIST = [
  {
    title: 'مقالات',
    id: 1,
  },
  {
    title: 'پست ها',
    id: 2,
  },
  {
    title: 'دوره ها',
    id: 3,
  },
];
export const USERS_LIST = [
  {
    title: 'ادمین',
    id: 1,
  },
  {
    title: 'مدرس ها',
    id: 2,
  },
  {
    title: 'دانشجو',
    id: 3,
  },
];
export const SETTINGS_LIST = [
  {
    title: 'منوی هدر',
    id: 1,
  },
  {
    title: 'منوی فوتر',
    id: 2,
  },
];
export const CARD_ITEMS = [
  {
    title: '30,200 تومان',
    text: 'سود خالص ',
    footer: ' به روز رسانی شده در 21:42 بعد از ظهر',
    className: 'bg-custom-yellow',
    id: 1,
  },
  {
    title: '30,200 تومان',
    text: 'سود خالص ',
    footer: ' به روز رسانی شده در 21:42 بعد از ظهر',
    className: 'bg-custom-green',
    id: 2,
  },
  {
    title: '30,200 تومان',
    text: 'سود خالص ',
    footer: ' به روز رسانی شده در 21:42 بعد از ظهر',
    className: 'bg-custom-pink',
    id: 3,
  },
  {
    title: '30,200 تومان',
    text: 'سود خالص ',
    footer: ' به روز رسانی شده در 21:42 بعد از ظهر',
    className: 'bg-custom-blue',
    id: 4,
  },
  {
    title: '30,200 تومان',
    text: 'سود خالص ',
    footer: ' به روز رسانی شده در 21:42 بعد از ظهر',
    className: 'bg-red-500',
    id: 5,
  },
  {
    title: '30,200 تومان',
    text: 'سود خالص ',
    footer: ' به روز رسانی شده در 21:42 بعد از ظهر',
    className: 'bg-green-600',
    id: 6,
  },
  {
    title: '30,200 تومان',
    text: 'سود خالص ',
    footer: ' به روز رسانی شده در 21:42 بعد از ظهر',
    className: 'bg-yellow-500',
    id: 7,
  },
  {
    title: '30,200 تومان',
    text: 'سود خالص ',
    footer: ' به روز رسانی شده در 21:42 بعد از ظهر',
    className: 'bg-blue-600',
    id: 8,
  },
];
export const TEXT = [
  {
    text: '  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این   صورت می توان امید داشت که تمام و دشواری موجود در ارائه  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    id: 1,
  },
  {
    text: '  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این   صورت می توان امید داشت که تمام و دشواری موجود در ارائه  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    id: 2,
  },
  {
    text: '  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این   صورت می توان امید داشت که تمام و دشواری موجود در ارائه  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    id: 3,
  },
];
