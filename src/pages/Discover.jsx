import React from 'react'
import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const Discover = () => {

    const {data, isFetching, error} = useGetTopChartsQuery();

    const genreTitle = 'pop';
    return (
        <div className='flex flex-col'>
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-white'>Discover {genreTitle} </h2>
                {/* select is html5 component */}
                <select
                    onChange={() => { }}
                    value=""
                    className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
                >
                    {genres.map((genre, id) => {
                        return <option key={id} value={genre.value} id={genre.value}>{genre.title}</option>
                    }
                    )}
                </select>
            </div>

            <div className='flex flex-wrap justify-center sm:justify-start gap-8'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, id) => {
                    return <SongCard
                        key={song.key}
                        song={song}
                        id={id}
                    />
                })}
            </div>

        </div>
    )
}

export default Discover
