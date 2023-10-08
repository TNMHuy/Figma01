import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { UserContext } from '../utills/loginContext'
import { getFormattedDate, getPostApi } from '../utills/blog'

const Admin = () => {
  const postList = []
  const user = useContext(UserContext)
  const {id} = useParams()
  const [list,setList] = useState([])
  const [perPage,setPerPage] = useState('20')
  const [search,setSearch] = useState('')
  const [page,setPage] = useState(1)
  const [categories,setcategories] = useState('1,28')

  useEffect (()=>{
    const data = getPostApi.get(`?per_page=${perPage}&id=${id}&search=${search}&categories=${categories}&page=${page}&_embed`).then(
      (res)=>{
        setList(res.data)
      }
    )
  },[search,categories,perPage,page])
  
  return (

    <main className='my-48'>
    <section className='text-center text-4xl my-6'>
      <h2>Admin Dashboard</h2>
    </section>

    {/* list data post */}
    <section className='mx-[80px]'>
      <div className="relative rounded overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-[#3bbaff] ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              {/* <th scope="col" className="px-6 py-3">
                              Cover Image
                          </th> */}
              <th scope="col" className="px-6 py-3 w-40">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                summary
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              
              return (
                <tr className="bg-white border-b hover:bg-slate-50" key={index}>
                  <td className="px-6 py-4">
                    {index + 1}
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <Link to={'/edit/'+ item.id}>{item.title.rendered}{item.id}</Link>
                  </th>
                  <td className="px-6  py-4">{getFormattedDate(item.date)}
                                  </td>
                  
                  <td className="px-6 py-4" dangerouslySetInnerHTML={{__html:item.excerpt.rendered}}/>
                  <td className="px-6 py-4">
                    <button id={item._id}  >Delete</button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>

    </section>
  </main>
  )
}

export default Admin