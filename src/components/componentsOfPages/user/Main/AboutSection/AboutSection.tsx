import { FC } from "react";
import HeadingOfSection from "../../../../UI/text/HeadingOfSection";
import H2 from "../../../../UI/text/H2";
import Subtitle from "../../../../UI/text/Subtitle";
import ButtonLink from "../../../../UI/button/ButtonLink";
import cake_about_small from '../../../../../assets/jpg/cake_about_small.jpg';
import cake_about from '../../../../../assets/jpg/cake_about.jpg';
import AnimatedElementFade from "../../../../Animation/AnimatedElementFade";
// import circle_SVG from '../../../../../assets/svg/circle.svg';


const AboutSection: FC = () => {
    return (
        <>
            <section id="aboutSection" className="mt-[130px] T:mt-[100px] TS:mt-[70px] px-[12%] L:px-[20px] P:px-[10px] relative flex flex-row gap-[75px]">
                <div className="w-1/2 T:w-full ">
                    <AnimatedElementFade animateFade="animate-fade">
                        <img src={cake_about_small} alt="cake_about_small" className='w-full z-10' loading="lazy" />
                    </AnimatedElementFade>
                    <div className="relative mt-[30px]">
                        <AnimatedElementFade animateFade="animate-fade">
                            <HeadingOfSection>О нас</HeadingOfSection>
                        </AnimatedElementFade>
                        <AnimatedElementFade animateFade="animate-fade-left">
                            <H2 className="text-left T:hidden mt-[4px]">История<br /> нашего пути</H2>
                            <H2 className="text-left hidden T:block mt-[4px]">Наша история</H2>
                        </AnimatedElementFade>
                        <div className="pl-[40px] mt-[18px] T:mt-[12px] T:pl-[30px] P:mt-[8px] P:pl-[20px] T:w-2/3 TS:w-5/6 P:w-11/12 ">
                            <AnimatedElementFade animateFade="animate-fade-left">
                                <div className="mb-[40px] T:mb-[30px] P:mb-[20px]">
                                    <Subtitle>Начиная с 2014 года, наша кондитерская радует всех неравнодушных к сладкому, и оценивших наши десерты постоянных посетителей.</Subtitle>
                                </div>
                            </AnimatedElementFade>
                            <AnimatedElementFade animateFade="animate-fade-left">
                                <div className="w-[164px] P:w-[120px]">
                                    <ButtonLink>Заказать</ButtonLink>
                                </div>
                            </AnimatedElementFade>
                        </div>
                    </div>
                </div>
                <div className="relative w-1/2 T:hidden">
                    <AnimatedElementFade animateFade="animate-fade" additionallyClasses="relative w-full z-30">
                        <img src={cake_about} alt="cake_about" loading="lazy" />
                    </AnimatedElementFade>
                    <AnimatedElementFade threshold={0.5} animateFade="animate-fade" additionallyClasses="absolute z-20 -top-36 right-0 w-[700px] h-[700px]">
                        <svg viewBox="0 0 697 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M453.19 664.259C426.316 674.105 398.366 679.224 369.979 681.859C339.818 684.641 309.975 683.155 280.142 678.842C260.72 676.028 240.795 675.815 217.124 674.156C277.518 699.472 338.079 698.78 399.142 695.522C379.793 699.384 360.803 705.632 341.676 706.564C265.509 710.288 198.479 687.24 139.537 644.743C70.2403 594.789 27.233 528.475 9.67278 447.767C-11.8338 348.897 5.50125 254.768 60.2928 165.908C75.0284 142.024 93.2521 120.436 113.624 100.492C125.773 88.6047 137.2 75.5338 151.198 65.9328C183.945 43.4874 219.52 25.6729 257.899 13.1693C387.981 -29.2049 547.275 11.1249 634.821 144.451C658.417 180.383 675.196 218.988 683.995 260.758C685.895 269.741 688.957 278.477 691.193 287.409C698.922 318.373 698.411 349.762 692.296 381.15C684.342 421.975 673.98 462.283 654.887 500.344C619.19 571.486 566.339 627.958 492.277 666.148C485.299 669.751 477.394 671.729 468.617 671.969C473.147 669.545 477.599 666.976 482.218 664.711C510.925 650.608 537.033 633.049 560.585 612.085C565.128 608.033 570.34 604.498 570.784 597.518C570.968 594.65 573.923 591.757 575.921 589.064C580.585 582.739 584.74 575.915 590.313 570.351C634.109 526.662 651.937 472.861 662.989 416.338C664.355 409.365 665.884 402.423 667.454 395.486C674.123 366.16 673.799 337.071 665.45 308.532C663.953 303.382 666.859 294.515 656.247 293.978C655.732 293.957 655.089 291.232 655.125 289.759C655.619 270.789 647.203 254.037 641.272 236.734C636.437 222.619 630.319 208.922 623.81 192.648C628.601 196.649 631.399 198.991 634.957 201.964C630.144 180.333 622.508 160.922 610.062 143.324C593.648 120.117 578.663 95.9043 556.267 77.0377C552.039 73.4692 548.196 69.4325 543.615 66.3261C462.649 11.3652 372.762 -4.44175 274.366 20.8483C229.417 32.3996 188.998 53.2914 152.64 81.2386C144.367 87.5942 137.074 94.3222 134.485 105.437C138.063 103.487 141.057 101.861 144.042 100.237C117.238 128.126 96.6348 158.745 87.0026 195.117C100.539 177.849 113.633 160.179 127.836 143.315C141.807 126.737 157.928 112.022 177.583 100.985C175.3 103.237 173.092 105.581 170.707 107.737C138.403 136.901 109.547 168.576 87.9519 205.609C85.7984 209.293 82.8569 213.034 79.3104 215.477C71.1364 221.092 67.066 229.118 64.759 237.398C57.862 262.112 52.3342 287.127 45.5503 311.872C40.1451 331.645 38.5843 351.334 39.3469 371.61C40.4782 401.527 43.9987 430.999 50.2471 460.156C51.7674 467.236 51.1026 475.495 60.3225 479.326C61.9404 480.007 63.0613 484.427 62.3548 486.578C58.8157 497.43 65.8054 505.267 69.863 513.881C72.621 519.737 77.0428 524.979 79.1432 531.006C84.9698 547.739 95.7306 561.269 107.242 574.726C170.266 648.394 253.991 679.481 354.529 675.558C382.327 674.468 409.916 670.35 436.575 661.206C443.958 658.681 451.534 654.851 464.381 657.428C458.438 661.108 456.027 663.217 453.19 664.259Z" fill="#F7F7F7" />
                        </svg>
                    </AnimatedElementFade>

                </div>
            </section>
        </>
    );
}

export default AboutSection;