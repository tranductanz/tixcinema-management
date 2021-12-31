import React from 'react'
const Film = (props) => {


    const { phim } = props;

    return (
        <div className="p-1 w-full h-full">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div style={{
                    background: `url(${phim.hinhAnh}), url(https://picsum.photos/300)`,
                    backgroundPosition: 'center',
                    backgroundSize: '100%, 100%',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <img className="opacity-0" style={{ height: '200px', width: '500px' }} src={phim.hinhAnh} alt={phim.tenPhim} />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 center text-center h-16">{phim.tenPhim}</div>
                    <p className="text-gray-700 text-base text-center h-16">
                        {phim.moTa.length > 100 ? <span>{phim.moTa.slice(0, 100) + '...'}</span> :
                            <p>{phim.moTa}</p>}
                    </p>
                    <a className="text-indigo-500 inline-flex text-center">ĐẶT VÉ</a>
                </div>
            </div>
        </div>
    )
}

export default Film
