import { cn } from '../../../../public/lib/utils';
import Marquee from '../../../assets/Components/marquee';
import Mirjalol from "../../../assets/Images/mirjalol.jpg"
import './Testimonials.css';
const reviews = [
  {
    name: 'Mirjalol',
    username: '@mirjalol',
    body: "Sizning kompaniyangiz bilan hamkorlik qilish biz uchun katta sharaf bo'ldi. Loyihamiz muvaffaqiyatli amalga oshirildi.",
    img: {Mirjalol},
  },
  {
    name: 'Mirjalol',
    username: '@mirjalol',
    body: "Sizning kompaniyangiz bilan hamkorlik qilish biz uchun katta sharaf bo'ldi. Loyihamiz muvaffaqiyatli amalga oshirildi.",
    img: {Mirjalol},
  },
  {
    name: 'Mirjalol',
    username: '@mirjalol',
    body: "Sizning kompaniyangiz bilan hamkorlik qilish biz uchun katta sharaf bo'ldi. Loyihamiz muvaffaqiyatli amalga oshirildi.",
    img: {Mirjalol},
  },
  {
    name: 'Mirjalol',
    username: '@mirjalol',
    body: "Sizning kompaniyangiz bilan hamkorlik qilish biz uchun katta sharaf bo'ldi. Loyihamiz muvaffaqiyatli amalga oshirildi.",
    img: {Mirjalol},
  },
  {
    name: 'Mirjalol',
    username: '@mirjalol',
    body: "Sizning kompaniyangiz bilan hamkorlik qilish biz uchun katta sharaf bo'ldi. Loyihamiz muvaffaqiyatli amalga oshirildi.",
    img: {Mirjalol},
  },
  {
    name: 'Mirjalol',
    username: '@mirjalol',
    body: "Sizning kompaniyangiz bilan hamkorlik qilish biz uchun katta sharaf bo'ldi. Loyihamiz muvaffaqiyatli amalga oshirildi.",
    img: {Mirjalol},
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => (
  <figure
    className={cn(
      'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 hello',
      'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
      'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
    )}
  >
    <div className="flex flex-row items-center gap-2">
      <img className="rounded-full" width="32" height="32" alt="" src={Mirjalol} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
        <p className="text-xs font-medium dark:text-white/40">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm">{body}</blockquote>
  </figure>
);

const MarqueeDemo = () => (
  
  <div className="testimonials relative flex h-full w-full flex-col items-center justify-center overflow-hidden   md:shadow-xl">
    <h2 className="testimonials-title">Mijozlarimiz fikri </h2>
    <Marquee pauseOnHover className="[--duration:20s]">
      {firstRow.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>
    <Marquee reverse pauseOnHover className="[--duration:20s]">
      {secondRow.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black dark:from-background"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black dark:from-background"></div>
  </div>
);

export default MarqueeDemo;