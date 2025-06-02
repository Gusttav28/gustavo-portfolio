"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/MovingIcons";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] mt-10 -mb-40 lg:mt-30 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
    </div>
  );
}

const testimonials = [
 {
    id: 1,
    quote: "python",
    name: "python",
    title: "python",
    image:"/assets/python.svg"
 },
 {
    id: 2,
    quote: "js",
    name: "js",
    title: "js",
    image:"/assets/js.svg"
 },
 {
    id: 3,
    quote: "nodejs",
    name: "nodejs",
    title: "nodejs",
    image:"/assets/nodejs.svg"
 },
 {
    id: 4,
    quote: "html",
    name: "html",
    title: "html",
    image:"/assets/html.svg"
 },
 {
    id: 5,
    quote: "css",
    name: "css",
    title: "css",
    image:"/assets/css.png"
 },
 {
    id: 6,
    quote: "tailwind",
    name: "tailwind",
    title: "tailwind",
    image:"/assets/tailwind-css.svg"
 },
 {
    id: 7,
    quote: "react",
    name: "react",
    title: "react",
    image:"/assets/reacttt.svg"
 },
 {
    id: 8,
    quote: "next",
    name: "next",
    title: "next",
    image:"/assets/nextjs.jpeg"
 },
 {
    id: 9,
    quote: "django",
    name: "django",
    title: "django",
    image:"/assets/django.svg"
 },
 {
    id: 10,
    quote: "mysql",
    name: "mysql",
    title: "mysql",
    image:"/assets/mysql.svg"
 },
 {
    id: 11,
    quote: "postgres",
    name: "postgres",
    title: "postgres",
    image:"/assets/postgresql.svg"
 },
 {
    id: 12,
    quote: "git",
    name: "git",
    title: "git",
    image:"/assets/git.svg"
 },
 {
    id: 13,
    quote: "postman",
    name: "postman",
    title: "postman",
    image:"/assets/postman.svg"
 },
 {
    id: 14,
    quote: "acertenityui",
    name: "acertenityui",
    title: "acertenityui",
    image:"/assets/acertenittyui.png"
 },
 {
    id: 15,
    quote: "pythonanywhere",
    name: "pythonanywhere",
    title: "pythonanywhere",
    image:"/assets/pythonanywhere3.png"
 },
 {
    id: 16,
    quote: "vercel",
    name: "vercel",
    title: "vercel",
    image:"/assets/vercel.svg"
 },
];
