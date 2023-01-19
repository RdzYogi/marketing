
function ServiceCard({post, index}) {
  return (
    <div
    onMouseEnter={() =>{
      const title_element = document.getElementById(index);
      title_element.classList.remove("text-gray-900");
      title_element.classList.add("text-orange-button");
    }}

    onMouseLeave={() =>{
      const title_element = document.getElementById(index);
      title_element.classList.remove("text-orange-button");
      title_element.classList.add("text-gray-900");
    }}

    className="w-full relative p-8 h-96 lg:h-[200pm] hover:-translate-y-1 transition duration-300 ease-in-out bg-white">
      <div className="w-full">
        <img src={post.img} className="w-10 h-10" alt=""/>
        <h2 className="text-xl font-semibold text-gray-900 pt-8">{post.title}</h2>
        <p className="text-lg font-regular text-gray-500 pt-4">{post.title}</p>
      </div>
      <div className="absolute bottom-0 left-0 p-8">
        <p id={index} className="items-end text-xl font-semibold pt-8">Learn More</p>
      </div>
    </div>
  )
}

export default ServiceCard
