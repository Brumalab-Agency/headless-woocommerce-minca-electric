"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { CardBlog } from "./CardBlog";
import { Entradas } from "@/lib/graphQLRequest";

export const OtrosPost = () => {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const entradasData = await Entradas();
        const postsData = entradasData.posts.nodes;
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(()=>{
    setFilterData(posts)
  },[posts]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (search.length>1) {
        const filterValues = posts.filter(row=>{
            const rawName = row.title.toLowerCase()
            const q = e.target.value.toLowerCase()
            if (rawName.includes(q)) {
                return true
            }
            return false
        })
        setFilterData(filterValues);
    }

  };


  return (
    <div className="otrosPosts grid grid-cols-2 px-2 lg:px-8 lg:grid-cols-1 lg:pt-[150px]">
      {/* <Search valor={search} change={handleSearch} /> */}
      <input
          value={search}
          onChange={handleSearch}
          type="text"
          id="Search"
          placeholder="Buscar"
          className="w-full rounded-md border border-gray-200 p-2.5 pe-10 shadow-sm sm:text-sm  "
        />
      <div className="my-4"></div>
      {filterData.map((post, index) => (
        <Link href={`/blog/${post.postId}`} key={index}>
          <CardBlog
            data={post}
            clasesContenedor={`h-auto mx-1 ${
              index >= 2 ? "hidden" : ""
            }`}
            clasesImg="w-full h-[150px] lg:w-[250px] lg:h-auto"
            clasesIcon="hidden lg:block"
            clasesContenedorFlex={`flex-col gap-0 text-left my-0 mt-2 lg:flex-row lg:gap-3`}
            title="text-lef w-full font-bold lg:w-auto"
            date="text-[14px] font-bold"
            imgCenter="grid place-items-center"
          />
        </Link>
      ))}
    </div>
  );
};

export default OtrosPost;
