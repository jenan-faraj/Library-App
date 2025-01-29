import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

const state = {
  books: [
    {
      id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030"
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "أبو بكر الرازي",
      isbn: "893847239479"
    },
    {
      id: 3,
      title: "الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "7483928474"
    },
    {
      id: 4,
      title: "الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "7483928474"
    },
    {
      id: 5,
      title: "الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "7483928474"
    },
    {
      id: 6,
      title: "الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "7483928474"
    },
    {
      id: 7,
      title: "الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "7483928474"
    },
    {
      id: 8,
      title: "الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "7483928474"
    },
    {
      id: 9,
      title: "الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "7483928474"
    },
    {
      id: 10,
      title: "الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "7483928474"
    },
  ]
};
function Home() {
    return (
      <div>
        <Header />
        <Main books= {state.books} />
        <Footer />
      </div>
    );
  }
export default Home;