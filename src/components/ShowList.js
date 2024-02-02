import React from 'react'
import { Link } from 'react-router-dom';


const ShowList = (props) => {
  console.log(props);
  let { shows } = props


  return (
    <div className='bg-dark m-0 '>
      <div className='row container mx-auto'>
        {shows?.map((data, index) => {
          console.log(data);
          return <div className="col-md-3 my-3 col-sm-6 " key={index} >
            <div className='main-card-cont'>
              <div className="card" >
                <div className="bg-gradient bg-dark pt-4 px-4">
                  { }
                  <img height={300} width={10} src={data?.show?.image?.original ? data?.show?.image?.original : "https://cdn.pixabay.com/photo/2015/01/11/09/19/film-596009_1280.jpg"} className="card-img-top card-bg border border-warning border-1 shadow-lg bg-warning rounded-3" alt="movie" />

                  <p className="movie-name">{data?.show?.name}</p>
                  {data?.show?.genres.map((category) => {
                    return (
                      <span className='category'>{category}</span>
                    )
                  })}
                  <p className='text-sm my-2 fw-bold  text-center text-white'>{data?.show?.summary.replace(/[<p></p><br/>]/g, ' ').slice("0", "100")}...</p>

                </div>
                <Link className='watrchnow-btn text-center' to={`/summary`} state={data}>BOOK NOW</Link>
              </div></div>

          </div>

        })}

      </div>
    </div>

  )

}




export default ShowList
