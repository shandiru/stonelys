// Review.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Review() {
  const testimonials = [
    {
      quote:
        "excellent service friendly staff job completed with a hint of professionalism reserved normally for the rich defiantly making them my main garage for work on my car.",
      name: "nukeit gaming",
    },
    {
      quote:
        "Very happy with the service! Adam was professional and efficient and sorted my car in no time after being turned away by two garages due to severity of issue! 10/10 ☺️🙏.",
      name: "Laura Davies",
    },
    {
      quote:
        "I brought my Hyundai here today for it’s MOT as recommended by family. I am very happy with the service. I took my car in around 8AM and collected around 4:30PM but they was happy for collection before 5:30PM. The staff was friendly and explained advisories which was very helpful. Feeling confident that I am driving a safe car after a trustworthy MOT. Thank you, I will be coming back for any future car needs :).",
      name: "Marie Collinson",
    },
    {
      quote:
        "This is the only garage I feel happy about using for my vehicle. The staff are polite and knowledgable. They pulled my van in at super short notice today due to a starter motor issue. All resolved in 3 hours. I cannot recommend them highly enough. Thankyou",
      name: "Max Domleo",
    },
    {
      quote:
        "I have been going to Stoneley's garage now for some 8 years and i have to say that from day 1 i have been very impressed with all the work carried on my car. Reliable, honest, trustworthy and always at hand to give advice on any question / concerns i have had regarding mechanical work. On numerous occasions i have been able to get booked in last minute in order to get me back on the road. If you are looking for mechanics who you can rely on then look no further than Stoneley's.",
      name: "Justian Mcloughlin",
    },
    {
      quote:
        "Took my Audi here after being quoted £600 for a service by the dealership (for a car that has done less than 7000 miles). I got EXACTLY the same service that Audi said I needed for less than half the price. I would highly recommend Stoneley's.",
      name: "Rebecca Franklin",
    },
    {
      quote:
        "Trusted service from Stoneley’s yet again. Diagnostics carried out, followed by repairs. The difference when driving the car now is so very noticeable. Thank you for your quality service and care.",
      name: "Simon Gardner",
    },
    {
      quote:
        "Used this service for the first time for my micra with little time given to them due to my mot failing at another garage shortly beforehand. The original garage weren't able to do any welding but this garage had offered to squeeze the fixes for my caf between their schedule thus getting all the work done as soon as possible. Price was fair but the service and reliability is certainly something to be noticed here, thank you!",
      name: "Damian Perez",
    },
    {
      quote:
        "Great service, allowed tow truck to drop van into yard until work could be carried out. Quoted before any work carried out , was updated when work would commence and estimated collection day..",
      name: "Ali Clapham",
    },
    {
      quote:
        "Brilliant service and customer care. Found the staff at Stoneley's garage very honest and reliable, they have serviced, MOT'd, and helped out in emergency situations many times over the last few year..... highly recommended!.",
      name: "Larry F",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Real feedback from clients who trust <strong>STONELEY</strong>.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          loop
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="flex flex-col h-full min-h-[250px] bg-green-600 text-white p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300 dark:bg-green-700">
                <p className="mb-4 flex-grow">"{t.quote}"</p>
                <div className="text-sm font-semibold mt-auto">&ndash; {t.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom pagination color */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #16a34a;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #16a34a;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
