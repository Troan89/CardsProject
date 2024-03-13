import { useEffect, useMemo, useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { Pagination } from '@/components/ui/pagination'

const pag = [
  { id: 1, label: 'card 1' },
  { id: 2, label: 'card 2' },
  { id: 3, label: 'card 3' },
  { id: 4, label: 'card 4' },
  { id: 5, label: 'card 5' },
  { id: 6, label: 'card 6' },
  { id: 7, label: 'card 7' },
  { id: 8, label: 'card 8' },
  { id: 9, label: 'card 9' },
  { id: 10, label: 'card 10' },
  { id: 11, label: 'card 11' },
  { id: 12, label: 'card 12' },
  { id: 13, label: 'card 13' },
  { id: 14, label: 'card 14' },
  { id: 15, label: 'card 15' },
  { id: 16, label: 'card 16' },
  { id: 17, label: 'card 17' },
  { id: 18, label: 'card 18' },
  { id: 19, label: 'card 19' },
  { id: 20, label: 'card 20' },
  { id: 21, label: 'card 21' },
  { id: 22, label: 'card 22' },
  { id: 23, label: 'card 23' },
  { id: 24, label: 'card 24' },
  { id: 25, label: 'card 25' },
  { id: 26, label: 'card 26' },
  { id: 27, label: 'card 27' },
  { id: 28, label: 'card 28' },
  { id: 29, label: 'card 29' },
  { id: 30, label: 'card 30' },
  { id: 31, label: 'card 31' },
]

export function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(5)

  const count = Math.ceil(pag.length / perPage)

  useEffect(() => {
    if (currentPage > count) {
      setCurrentPage(count)
    }
  }, [count, currentPage])

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * perPage
    const lastPageIndex = firstPageIndex + perPage

    return pag.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, perPage])

  const handlePerPageChange = (value: number | string) => {
    setPerPage(+value)
  }

  return (
    <div>
      <ul>
        {currentTableData.map(el => (
          <li key={el.id}>{`${el.id}. ${el.label}`}</li>
        ))}
      </ul>

      <Pagination
        count={count}
        limit={perPage}
        onChange={page => setCurrentPage(page)}
        onPerPageChange={handlePerPageChange}
        page={currentPage}
        perPage={perPage}
        perPageOptions={[5, 10, 20]}
      />
      <Icons iconId={'log-out-outline'} />
    </div>
  )
}
