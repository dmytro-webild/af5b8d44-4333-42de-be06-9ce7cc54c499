"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="blurBottom"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Pagrindinis",
          id: "#hero",
        },
        {
          name: "Apie",
          id: "#about",
        },
        {
          name: "Meniu",
          id: "#menu",
        },
        {
          name: "Kontaktai",
          id: "#contact",
        },
      ]}
      brandName="Vis-a-Vis"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "sparkles-gradient",
      }}
      title="Elegantiška vieta jubiliejams ir verslo vakarienėms"
      description="Vis-a-Vis — reprezentatyvus restoranas Fabijoniškėse, kuriame dera šiuolaikiškas interjeras, estetiškai pateikiamas maistas ir profesionalus aptarnavimas ypatingoms progoms."
      buttons={[
        {
          text: "Rezervuoti šventę",
          href: "#contact",
        },
        {
          text: "Apie mus",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-chopped-vegetable-salad-with-chicken-pineapple-plate-table_140725-11500.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Vieta, kurioje šventės atrodo išskirtinai"
      description={[
        "Vis-a-Vis pozicionuojamas kaip restoranas jaukioms, gražioms ir gerai organizuotoms šventėms.",
        "Svetainės tonas orientuotas į pasitikėjimą, estetiką ir aukštesnės klasės aptarnavimo įspūdį.",
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Farširuota žuvis",
          price: "Special",
          variant: "Šventinis",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-cooked-squashes-designed-meal-inside-plate-grey-space_140725-83769.jpg",
        },
        {
          id: "2",
          name: "Jubiliejinis tortas",
          price: "Individual",
          variant: "Desertai",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-cookies-with-cream-dogwoods-grey_140725-29962.jpg",
        },
        {
          id: "3",
          name: "Kanelės pyragaičiai",
          price: "Set",
          variant: "Desertai",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-baked-fruit-cake-delicious-sliced-with-red-cherries-inside-sugar-powder-inside-round-brown-plate-pink_140725-23927.jpg",
        },
        {
          id: "4",
          name: "Vaišių stalas renginiams",
          price: "Pagal susitarimą",
          variant: "Pobūviai",
          imageSrc: "http://img.b2bpic.net/free-photo/dining-lunch-plate-white-meal_1203-4407.jpg",
        },
        {
          id: "5",
          name: "Gurmaniškas užkandžių rinkinys",
          price: "Pagal susitarimą",
          variant: "Užkandžiai",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-cooked-squashes-designed-meal-inside-plate-grey-space_140725-83769.jpg",
        },
        {
          id: "6",
          name: "Šventinis vyno rinkinys",
          price: "Pagal susitarimą",
          variant: "Gėrimai",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-cookies-with-cream-dogwoods-grey_140725-29962.jpg",
        },
      ]}
      title="Meniu akcentai"
      description="Išskirtos meniu detalės, kurios kuria elegantiškos šventinės vietos įspūdį."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Renata Grebliunaite",
          handle: "Klientė",
          testimonial: "Vakar kavinėje Vis-a-Vis šventėme mamos 70-ąjį jubiliejų, ir likome sužavėti nuo pirmos iki paskutinės akimirkos.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-woman-hands-holds-two-burgers-blurred-background_169016-43765.jpg",
        },
        {
          id: "2",
          name: "Renata Butkevic",
          handle: "Klientė",
          testimonial: "Maistas puikus, aptarnavimas labai korektiškas ir mandagus, interjeras šiuolaikiškas.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/waitress-near-display-case-with-tartines_23-2147830513.jpg",
        },
        {
          id: "3",
          name: "Andrius Girdzius",
          handle: "Klientas",
          testimonial: "Viskas praėjo puikiai. Padavėjos labai puikios, savininkas malonus, maistas labai geras.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-woman-eatingout-having-breakfast-talking-friend-table-looking-aside-with-cheerful-smile-sitting-near-mobile-phone-terrace_197531-30313.jpg",
        },
        {
          id: "4",
          name: "Jonas Jonaitis",
          handle: "Klientas",
          testimonial: "Nuostabi aplinka, puikiai tiko mūsų verslo susitikimui.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-alluring-european-young-brunette-with-flying-hair-from-wind-bright-city-background-girl-holding-red-summer-drink-looking-camera-dressed-bright-red-dress_291650-1740.jpg",
        },
        {
          id: "5",
          name: "Eglė Eglaitė",
          handle: "Klientė",
          testimonial: "Visada malonu čia sugrįžti, aptarnavimas visada aukščiausio lygio.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-sitting-bed-hotel-stylish-evening-dress-sensual-mood-talking-phone-smiling-flirty-looking-sexy_285396-6180.jpg",
        },
      ]}
      showRating={true}
      title="Klientų atsiliepimai"
      description="Svetainės komunikacija paremta tikromis švenčių ir jubiliejų patirtimis."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Susisiekite"
      title="Rezervuokite šventę"
      description="Susisiekite su mumis dėl rezervacijos ar papildomos informacijos."
      imageSrc="http://img.b2bpic.net/free-photo/light-post-with-spiderweb-halloween_53876-138109.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/side-view-chopped-vegetable-salad-with-chicken-pineapple-plate-table_140725-11500.jpg"
      logoText="Vis-a-Vis"
      columns={[
        {
          title: "Navigacija",
          items: [
            {
              label: "Pagrindinis",
              href: "#hero",
            },
            {
              label: "Apie",
              href: "#about",
            },
            {
              label: "Meniu",
              href: "#menu",
            },
            {
              label: "Kontaktai",
              href: "#contact",
            },
          ],
        },
        {
          title: "Informacija",
          items: [
            {
              label: "Fabijoniškių g. 96, Vilnius",
              href: "#",
            },
            {
              label: "(0-686) 72020",
              href: "tel:+37068672020",
            },
            {
              label: "visavis.lt",
              href: "https://visavis.lt",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
