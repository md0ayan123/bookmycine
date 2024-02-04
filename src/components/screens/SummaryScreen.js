import React from 'react'
import { useLocation } from 'react-router-dom'



const SummaryScreen = () => {

    const location = useLocation()
    let data = location.state
    console.log(location.state)

    return (
        <div className='SummaryScreen '> 
            <div className="card-summary d-flex bg-gradient bg-dark "  >
                
                <div className='container d-flex py-4 flex-md-row flex-column  '>
                                                                                              
                    <img height={'100%'} width={300} src={data?.show?.image?.original ? data?.show?.image?.original : "https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"} className="img-summary" alt="movie" />
                    <div className='container1  px-4 d-flex flex-column justify-content-evenly '>
                        <div >
                            <p className='mt-2'>{data?.show.name}</p>
                            <div className='d-flex'>
                                <i class="fa-solid fa-star start-color"></i>
                                <p className='rating'>{Object.values(data?.show?.rating)}/10 rating ({Object.keys(data?.show?.rating)})</p>
                            </div>
                          
                            <div className="rating-view rounded-2 flex-wrap my-2">
                                <p className='fs-6'><strong>Add your Rating & Review</strong> <div className='line'>your rating matter</div>  </p>
                                <div >
                                    <p className='fs-6 bg-light text-dark fw-bold align-item-center d-flex justify-content-center rounded-1 px-3 py-2 mt-2 flex-sm-column'>Rate Now</p>
                                </div>
                            </div>
                            

                            <div className='genres' >
                                <p className=''>{data?.show.genres.join(", ")}</p>
                                <p className=''>{data?.show.premiered}</p>
                                <p className=''>{data?.show.runtime} mintues</p>
                            </div>
                            <div>
                            </div>
                        </div>
                        <button type="button" class="booknow" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Book Now
                        </button>
                    </div>
                </div>
            </div>
            <div className='container-About mx-4 my-4' >
                <h3 className='fw-bold '>About the movie</h3>
                <p className='mt-4'>{data?.show?.summary.replace(/[<p></p><br/>]/g, ' ')}</p>
            </div>
           


          
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Book your show</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='row mx-auto mb-3'>
                                <input disabled type="text" className="form-control " id="title" value={data.show.name} name='show name' />

                            </div>
                            <div className='row mx-auto gap-4'>
                                <input disabled type="text" className="form-control col" id="title" value={data.show.genres} name='genres' />

                                <input disabled type="text" className="form-control col" id="title" value={data.show.runtime + ' mintues'} name='duration' />
                            </div>
                        </div>
                        <div class="modal-footer">

                            <button type="button" class="booknow bg-secondary w-25" data-bs-dismiss="modal">Close</button>
                            <button type="button" data-bs-dismiss="modal" class="booknow w-25">Book</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SummaryScreen
