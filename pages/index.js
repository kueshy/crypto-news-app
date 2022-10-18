import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(null);

  // Funcction
  const getNews = async () => {
    try {
      const res = await axios.get("/api/news", {
        params: { page },
      });
      const { data } = res;
      setResponse(data.data[0].screen_data.news);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col bg-background items-center font-montserrat min-h-screen">
      <h1 className="text-3xl sm:text-6xl font-bold text-primary mt-20">
        Crypto News <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6 text-center">
        Next.js app which provides information latest news about Crypto using
        Cryptocurrency API.
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <div className="mt-4 sm:mt-0 sm:ml-3">
          {!response && (
            <button
              className="block bg-active px-5 py-3 rounded-md w-full text-base text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
              onClick={() => getNews()}
            >
              Get Latest News
            </button>
          )}
        </div>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 gap-16 max-w-5xl">
        {response &&
          response.map((news) => {
            return (
              <div className="mt-10 grid justify-items-center">
                <img
                  src={news.related_image_big}
                  width="300"
                  height="300"
                  className="rounded-lg"
                  alt=""
                />
                <a
                  href={news.news_link ? news.news_link : news.third_party_url}
                  className="text-primary text-center mx-4 hover:text-active transition-colors duration-200"
                  key={news.NEWS_ID}
                >
                  <h3 className="mt-10 text-2xl">{news.HEADLINE}</h3>
                  <p className="mt-4 text-center text-lg opacity-60">
                    {news.news_provider_name}
                  </p>
                </a>
              </div>
            );
          })}
      </div>
      {response && (
        <div className="flex flex-col mt-10 mb-10 justify-center">
          <button
            className="block text-active text-base font-bold"
            onClick={() => {
              setPage(page + 1);
              getNews();
            }}
          >
            Load next page &rarr;
          </button>
        </div>
      )}
    </div>
  );
}
